import React, { useEffect, useRef, useState } from 'react';
import useScholarship from '../../Hooks/useScholarship';
import ScholarshipCard from '../../Component/ScholarshipCard/ScholarshipCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import noData from '../../Lottie/NoData.json'
import Lottie from 'lottie-react';

const AllScholarship = () => {
    const [scholarships, refetch, isLoading] = useScholarship()
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(scholarships.length)
    }, [scholarships])
    const numberOfPages = Math.ceil(count / 5)
    const pages = [...Array(numberOfPages).keys()]
    const searchRef = useRef()
    const axiosPublic = useAxiosPublic()
    const [currentScholarship, setCurrentScholarship] = useState([])
    useEffect(() => {
        if (!isLoading) {
            const range=scholarships.slice(0,5)
            console.log(range)
            setCurrentScholarship(range)
        }
    }, [scholarships])
const [currentPage,setCurrentPage]=useState(0)
    const handlePage=(pageNo)=>{
        setCurrentPage(pageNo-1)
        const max=(pageNo*5);
        const min=(pageNo*5)-5;
        console.log(min,max,"minmax")
        
        const range=scholarships.slice(min,max);
        console.log("range",range)
        setCurrentScholarship(range)

    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const query = searchRef.current.value;
        console.log(query)
        const res = await axiosPublic.get(`/searchScholarships?search=${query}`)

        setCurrentScholarship(res.data)


    }
    return (
        <div className='text-center w-11/12 mx-auto'>
            <h2 className='md:text-5xl text-3xl text-[#320a4e] font-bold my-10 font-lora'>All Scholarship</h2>
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress md:w-80 w-48 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className='mb-8'>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
                                {/* onKeyUp={handleSearch} */}
                                <input ref={searchRef} placeholder="Search by university, scholarship, or degree..." className='input input-bordered rounded-lg md:w-[500px] focus:outline-none border-[#320a4e] focus:border-secondary' type="search" name="" id="" />

                                <input onClick={handleSearch} type="submit" className='py-2 px-6 bg-[#320a4e] transition-all duration-200 hover:bg-primary text-white rounded-full hover:cursor-pointer' value={"Search"} />
                            </div>

                        </div>
                        {
                            currentScholarship.length
                                ?
                                <>
                                    {/* Search Box  */}

                                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                                        {
                                            currentScholarship.map((item, idx) => <ScholarshipCard key={idx} item={item} ></ScholarshipCard>)
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <div className='flex justify-center items-center'>
                                        <Lottie animationData={noData} className='w-96'></Lottie>
                                    </div>

                                </>

                        }

                        <div className='mb-10'>
                            {
                                pages.map(page =>
                                <button 
                                onClick={()=>handlePage(page+1)}
                                className={currentPage==page?'bg-secondary/80 btn rounded-lg mr-2':'btn rounded-lg mr-2'} 
                                key={page}
                                >{page+1}</button>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default AllScholarship;