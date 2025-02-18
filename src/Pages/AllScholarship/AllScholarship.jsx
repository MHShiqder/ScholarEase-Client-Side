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
            <h2 className='md:text-5xl text-3xl bg-[#2E5077 ] font-bold my-10 font-lora'>All Scholarship</h2>
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
                        <div className='mb-5'>
                            <div><p className='mb-2 md:text-sm text-xs '>Search with University Name, Scholarship Name or Degree Name</p></div>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0'>
                                {/* onKeyUp={handleSearch} */}
                                <input ref={searchRef} className='input input-bordered rounded-none focus:outline-none border-[#15AE5C] focus:border-sky-500 focus:border-2' type="search" name="" id="" />

                                <input onClick={handleSearch} type="submit" className='py-2.5 px-6 bg-[#15AE5C] border-[#15AE5C] border-2 transition-all duration-300 hover:border-sky-500  md:border-l-0 hover:text-gray-800 hover:bg-transparent text-white rounded-none hover:cursor-pointer' value={"Search"} />
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
                                className={currentPage==page?'bg-green-600 btn rounded-none mr-2':'btn rounded-none mr-2'} 
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