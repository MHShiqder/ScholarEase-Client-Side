import React from 'react';
import DashboardTitle from '../../Component/DashboardTitle/DashboardTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from './ReviewCard';

const AllReview = () => {
    const axiosSecure=useAxiosSecure()
    const {refetch,data:review=[]}=useQuery({
        queryKey:['review'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/allReview')
            return res.data;
        }
    })
    console.log("reviews",review)
    return (
        <div className='p-5 md:p-10'>
            <DashboardTitle title={"All Review"}></DashboardTitle>

            <div className='grid md:grid-cols-3 gap-5 '>
                {
                    review.map((item,idx)=><ReviewCard key={idx} refetch={refetch} item={item}></ReviewCard>)
                }
            </div>

        </div>
    );
};

export default AllReview;