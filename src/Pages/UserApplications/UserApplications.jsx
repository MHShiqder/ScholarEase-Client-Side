import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdCancel, MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserAddReviewModal from "./UserAddReviewModal";

const UserApplications = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: applications = [] } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosPublic.get('/appliedScholarship')
            return res.data;
        }
    })

    const handleEdit = (item) => {

        if (item.status != "pending") {
            Swal.fire({
                icon: "error",
                title: "Can Not Edit.",
                text: "Application Processing!",
            });
        }
        else {

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
            <div>
                <DashboardTitle title="My Applications"></DashboardTitle>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-300">
                        <tr>
                            <th>University</th>
                            <th>Feedback</th>
                            <th><span className="font-extrabold text-black ">Subject</span> & <br /> Degree</th>
                            <th><span className="font-extrabold text-black">Application</span> &<br />Service Charge</th>
                            <th>Application Status</th>
                            <th className="text-center">Action</th>
                            <th>Add Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* table row loop */}
                        {applications.map((item,idx) =>
                           
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
                                            <div>{item.feedback}</div>
                                        </div>
                                    </td>
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
                                            <Link to={`/details/${item.scholarshipId}`}>
                                                <button className="cursor-pointer p-2 text-xl hover:scale-150 text-blue-600 transition-all ease-in"><FaInfoCircle></FaInfoCircle> </button>
                                            </Link>
                                        </div>
                                        <div className="tooltip" data-tip='Edit'>
                                            <button onClick={() => handleEdit(item)} className="cursor-pointer p-2 text-xl hover:scale-150 text-green-600 transition-all ease-in"><FaEdit></FaEdit></button>
                                        </div>
                                        <div className="tooltip" data-tip='Cancel'>
                                            <button onClick={() => handleDelete(item._id)} className="cursor-pointer p-2 text-xl hover:scale-150 text-red-600 transition-all ease-in"><MdCancel></MdCancel></button>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="tooltip" data-tip='Add Review'>
                                            <button 
                                            onClick={()=>document.getElementById(`${item._id}`).showModal()}
                                            className="cursor-pointer p-2 text-xl hover:scale-150 text-orange-600 transition-all ease-in"><MdReviews></MdReviews></button>
                                        </div>

                                    </td>
                                    <UserAddReviewModal item={item}></UserAddReviewModal>
                                </tr>
                           
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default UserApplications;