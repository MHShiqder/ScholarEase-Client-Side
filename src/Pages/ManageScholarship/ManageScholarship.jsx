
import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdCancel, MdReviews } from "react-icons/md";
import Swal from "sweetalert2";
import useScholarship from "../../Hooks/useScholarship";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpdateScholarshipModal from "./UpdateScholarshipModal";


const ManageScholarship = () => {
    const axiosSecure = useAxiosSecure()

    const [scholarships, refetch, isLoading] = useScholarship()


    const handleDelete = (id) => {
        console.log("Id default",id)
        axiosSecure.delete(`/scholarships?id=${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Done",
                        text: "The Scholarship has been deleted",
                        icon: "success",
                        timer: "1500"
                    })
                    refetch()
                }
            })
            .catch(err => {
                console.log("error", err)
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    timer: "1500"
                })
            })
    }
    return (
        <div className="p-5 md:p-10">
            <DashboardTitle title={"All Applied Scholarship"}></DashboardTitle>


            {
                isLoading ?
                    <>
                        <div className=' flex justify-center items-center h-56'>
                            <progress className="progress w-80 "></progress>
                        </div>
                    </>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-slate-300">
                                <tr>
                                    <th>University</th>
                                    <th>Scholarship Name</th>
                                    <th><span className="font-extrabold text-black ">Subject</span> & <br /> Degree</th>
                                    <th>Application Fee</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* table row loop */}
                                {scholarships?.map((item, idx) =>

                                    <tr key={idx}>
                                        <th>
                                            <div className="font-bold">{item.university}</div>
                                        </th>
                                        <th>
                                            {item.scholarship}
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
                                            <div className="font-bold uppercase">$ {item.applicationFee} </div>
                                        </td>

                                        <td className="flex items-center justify-center" >
                                            <div className="tooltip" data-tip='Details'>
                                                <Link to={`/details/${item._id}`}>
                                                    <button className="cursor-pointer p-2 text-xl hover:scale-150 text-blue-600 transition-all ease-in"><FaInfoCircle></FaInfoCircle> </button>
                                                </Link>
                                            </div>
                                            <div className="tooltip" data-tip='Edit'>
                                                <button
                                                    onClick={() => document.getElementById(`edit${item._id}`).showModal()}
                                                    className="cursor-pointer p-2 text-xl hover:scale-150 text-green-600 transition-all ease-in"><FaEdit></FaEdit></button>
                                            </div>
                                            <div className="tooltip" data-tip='Delete'>
                                                <button onClick={() => handleDelete(item._id)} className="cursor-pointer p-2 text-xl hover:scale-150 text-red-600 transition-all ease-in"><MdCancel></MdCancel></button>
                                            </div>
                                        </td>

                                        <UpdateScholarshipModal refetch={refetch} item={item}></UpdateScholarshipModal>
                                    </tr>

                                )}
                            </tbody>

                        </table>
                    </div>
            }

        </div>
    );
};

export default ManageScholarship;





