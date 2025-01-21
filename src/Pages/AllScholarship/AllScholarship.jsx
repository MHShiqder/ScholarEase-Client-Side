import React, { useEffect, useRef, useState } from 'react';
import useScholarship from '../../Hooks/useScholarship';
import ScholarshipCard from '../../Component/ScholarshipCard/ScholarshipCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import noData from '../../Lottie/NoData.json'
import Lottie from 'lottie-react';

const AllScholarship = () => {
    const [scholarships, refetch, isLoading] = useScholarship()
    const searchRef = useRef()
    const axiosPublic = useAxiosPublic()
    const [currentScholarship, setCurrentScholarship] = useState([])
    useEffect(() => {
        if (!isLoading) {
            setCurrentScholarship(scholarships)
        }
    }, [scholarships])



    const handleSearch = async (e) => {
        e.preventDefault();
        const query = searchRef.current.value;
        console.log(query)
        const res = await axiosPublic.get(`/searchScholarships?search=${query}`)

        setCurrentScholarship(res.data)


    }
    return (
        <div className='text-center w-11/12 mx-auto'>
            <h2 className='text-5xl bg-[#2E5077 ] font-bold my-10'>All Scholarship</h2>
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress w-80 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className='mb-5'>
                            <div><p className='mb-2 text-sm '>Search with University Name, Scholarship Name or Degree Name</p></div>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0'>
                            {/* onKeyUp={handleSearch} */}
                                <input  ref={searchRef} className='input input-bordered rounded-none focus:outline-none border-[#15AE5C] focus:border-sky-500 focus:border-2' type="search" name="" id="" />

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
                    </>
            }
        </div>
    );
};

export default AllScholarship;