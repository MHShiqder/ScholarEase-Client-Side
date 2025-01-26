import React, { useEffect, useState } from 'react';
import useHomeScholarship from '../../Hooks/useHomeScholarship';
import ScholarshipCard from '../ScholarshipCard/ScholarshipCard';
import { Link } from 'react-router-dom';

const TopScholarships = () => {
    const [scholarship, refetch, isLoading] = useHomeScholarship()
    const [loaded,setLoaded]=useState([])
    useEffect(()=>{
        if(scholarship.length>0){
            setLoaded(scholarship)
        }
    },[scholarship])
   
    return (
        <div className='text-center w-11/12 mx-auto'>
            <h2 className='text-3xl md:text-5xl bg-[#2E5077 ] font-bold my-10'>Top Scholarship</h2>
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
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                            {
                                loaded.map((item, idx) => <ScholarshipCard key={idx} item={item} ></ScholarshipCard>)
                            }
                        </div>
                        <Link to='/all-scholarship'><button className='btn rounded-none bg-[#15AE5C] border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white px-20'>All Scholarship</button></Link>
                        
                    </>
            }
        </div>
    );
};

export default TopScholarships;