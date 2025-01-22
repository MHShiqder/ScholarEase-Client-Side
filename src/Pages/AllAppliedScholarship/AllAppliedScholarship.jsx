import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdCancel, MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserAddReviewModal from "../UserApplications/UserAddReviewModal";
import UserEditApplicationModal from "../UserApplications/UserEditApplicationModal";
import AppliedScholarshipDetailsModal from "./AppliedScholarshipDetailsModal";


const AllAppliedScholarship = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: applications = [] } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allAppliedScholarship')
            return res.data;
        }
    })

    const handleEdit = (item) => {

        if (item.status && item.status != "pending") {
            Swal.fire({
                icon: "error",
                title: "Can Not Edit.",
                text: "Application Processing!",
            });
        }
        else {
            document.getElementById(`edit${item._id}`).showModal()
        }
    }
    const handleDelete = (id) => {
        axiosPublic.delete(`/appliedScholarship?id=${id}`)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    icon: "success",
                    title: "Deleted",
                    text: "Application is Canceled!",
                });
                refetch()
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
                                            onClick={() => document.getElementById(`${item._id}`).showModal()}
                                            className="cursor-pointer p-2 text-xl hover:scale-150 text-green-600 transition-all ease-in"><MdReviews></MdReviews></button>
                                    </div>
                                    <div className="tooltip" data-tip='Cancel'>
                                        <button onClick={() => handleDelete(item._id)} className="cursor-pointer p-2 text-xl hover:scale-150 text-red-600 transition-all ease-in"><MdCancel></MdCancel></button>
                                    </div>
                                </td>

                                <AppliedScholarshipDetailsModal item={item}></AppliedScholarshipDetailsModal>
                                <UserEditApplicationModal refetch={refetch} item={item}></UserEditApplicationModal>
                            </tr>

                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllAppliedScholarship;