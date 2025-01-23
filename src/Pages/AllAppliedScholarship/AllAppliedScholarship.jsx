import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import {  FaInfoCircle } from "react-icons/fa";
import { MdCancel, MdReviews } from "react-icons/md";
import Swal from "sweetalert2";
import AppliedScholarshipDetailsModal from "./AppliedScholarshipDetailsModal";
import FeedbackModal from "./FeedbackModal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllAppliedScholarship = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: applications = [] } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allAppliedScholarship')
            return res.data;
        }
    })

    
    const handleDelete = (id) => {
        const info={status:"rejected"}
        axiosSecure.patch(`/appliedScholarship?id=${id}`,info)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.modifiedCount>0){
                        Swal.fire({
                            title:"Done",
                            text:"The application has been rejected",
                            icon:"success",
                            timer:"1500"
                        })
                        refetch()
                    }
                })
                .catch(err=>{
                    console.log("error",err)
                    Swal.fire({
                        title:"Error",
                        icon:"error",
                        timer:"1500"
                    })
                })
    }
    return (
        <div className="p-5 md:p-10">
            <DashboardTitle title={"All Applied Scholarship"}></DashboardTitle>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300">
                        <tr>
                            <th>University</th>

                            <th><span className="font-extrabold text-black ">Subject</span> & <br /> Degree</th>
                            <th><span className="font-extrabold text-black">Application</span> &<br />Service Charge</th>
                            <th>Application Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table row loop */}
                        {applications.map((item, idx) =>

                            <tr key={idx}>
                                <th>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{item.university}</div>
                                            <div className="text-sm opacity-50">{item.universityAddress}</div>
                                        </div>
                                    </div>
                                </th>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold uppercase">{item.subject}</div>
                                            <div className="text-sm opacity-50 ">{item.degree}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold uppercase">$ {item.applicationFee} </div>
                                            <div className="text-sm opacity-50 ">$ {item.serviceCharge}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>{item.status || "pending"}</div>
                                    </div>
                                </td>
                                <td className="flex items-center justify-center" >
                                    <div className="tooltip" data-tip='Details'>
                                        <button 
                                        onClick={() => document.getElementById(`details${item._id}`).showModal()}
                                        className="cursor-pointer p-2 text-xl hover:scale-150 text-blue-600 transition-all ease-in"><FaInfoCircle></FaInfoCircle> </button>
                                    </div>
                                    <div className="tooltip" data-tip='Feedback'>
                                        <button
                                            onClick={() => document.getElementById(`feedback${item._id}`).showModal()}
                                            className="cursor-pointer p-2 text-xl hover:scale-150 text-green-600 transition-all ease-in"><MdReviews></MdReviews></button>
                                    </div>
                                    <div className="tooltip" data-tip='Cancel'>
                                        <button onClick={() => handleDelete(item._id)} className="cursor-pointer p-2 text-xl hover:scale-150 text-red-600 transition-all ease-in"><MdCancel></MdCancel></button>
                                    </div>
                                </td>

                                <AppliedScholarshipDetailsModal item={item}></AppliedScholarshipDetailsModal>
                                <FeedbackModal id={item._id}></FeedbackModal>
                            </tr>

                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllAppliedScholarship;