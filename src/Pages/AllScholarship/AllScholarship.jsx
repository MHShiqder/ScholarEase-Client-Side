import React from 'react';
import useScholarship from '../../Hooks/useScholarship';

const AllScholarship = () => {
    const [scholarships, refetch, isLoading]=useScholarship()
    return (
        <div>
            {
                scholarships.map((scholarship,idx)=> <img src={scholarship.imageUrl}/>)
            }
        </div>
    );
};

export default AllScholarship;