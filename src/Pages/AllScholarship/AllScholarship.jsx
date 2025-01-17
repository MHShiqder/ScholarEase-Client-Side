import React from 'react';
import useScholarship from '../../Hooks/useScholarship';
import ScholarshipCard from '../../Component/ScholarshipCard/ScholarshipCard';

const AllScholarship = () => {
    const [scholarships, refetch, isLoading] = useScholarship()
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
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                        {
                            scholarships.map((item, idx) => <ScholarshipCard key={idx} item={item} ></ScholarshipCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default AllScholarship;