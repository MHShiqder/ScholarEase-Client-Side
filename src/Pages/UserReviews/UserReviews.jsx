import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import DashboardTitle from '../../Component/DashboardTitle/DashboardTitle';
import { FaEdit } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';
import UserEditReviewModal from './UserEditReviewModal';

const UserReviews = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const {refetch, data: review = [] } = useQuery({
        queryKey: ["review", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/review?email=${user.email}`)
            return res.data;
        }
    })


    const handleDelete = (id) => {
            axiosPublic.delete(`/review?id=${id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            icon: "success",
                            title: "Deleted",
                            text: "Review is Removed!",
                        });
                        refetch()
                    }
                })
    
        }

    return (
        <div className="p-5 md:p-10">
            <div>
                <DashboardTitle title="My Reviews"></DashboardTitle>
            </div>


            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300">
                        <tr>
                            <th>Scholarship Name</th>
                            <th>University Name</th>
                            <th> Review comments</th>
                            <th>Review date</th>
                            <th className="text-center">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* table row loop */}
                        {review.map((item,idx) =>
                            
                                <tr key= {idx}>
                                    <td>
                                        <div>{item.scholarshipName}</div>
                                    </td>
                                    <td>
                                        <div>{item.university}</div>
                                    </td>
                                    <td>
                                        <div>{item.review}</div>
                                    </td>
                                    <td>
                                        <div>{item.reviewDate}</div>
                                    </td>
                                    
                                    <td className="flex items-center justify-center" >
                                        <div className="tooltip" data-tip='Edit'>
                                            <button onClick={() => document.getElementById(`${item._id}`).showModal()}
                                             className="cursor-pointer p-2 text-xl hover:scale-150 text-green-600 transition-all ease-in"><FaEdit></FaEdit></button>
                                        </div>
                                        <div className="tooltip" data-tip='Remove'>
                                            <button onClick={() => handleDelete(item._id)} className="cursor-pointer p-2 text-xl hover:scale-150 text-red-600 transition-all ease-in"><MdCancel></MdCancel></button>
                                        </div>
                                    </td>
                                    
                                    <UserEditReviewModal refetch={refetch} item={item}></UserEditReviewModal>
                                </tr>
                           
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default UserReviews;