import React, { useEffect, useState } from 'react';
import useHomeScholarship from '../../Hooks/useHomeScholarship';
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const TopScholarships = () => {
    const [scholarship, refetch, isLoading] = useHomeScholarship()
    const [loaded,setLoaded]=useState([])
    useEffect(()=>{
        if(scholarship.length>0){
            setLoaded(scholarship)
        }
    },[scholarship])
   
    return (
        <div className='text-center w-11/12 mx-auto bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-5 py-10 mt-20'>
            <h2 className='text-3xl text-[#320a4e] md:text-5xl bg-[#2E5077 ] font-bold font-lora mb-10'>Top Scholarships</h2>
            
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress w-48 md:w-80 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>
                            {
                                loaded.map((item, idx) => <ScholarshipCard key={idx} item={item} ></ScholarshipCard>)
                            }
                        </div>
                        <Link to='/all-scholarship'><button className='btn rounded-full bg-gradient-to-br from-primary to-indigo-700  transition-all duration-300 hover:scale-105   text-white px-20 '>All Scholarship <span><FaArrowRight></FaArrowRight></span></button></Link>
                        
                        
                    </>
            }
        </div>
    );
};

export default TopScholarships;