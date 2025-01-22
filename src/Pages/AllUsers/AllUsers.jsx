import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";

import { FaTrashAlt, FaUser } from "react-icons/fa";
import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useRef } from "react";


const AllUsers = () => { 
    const roleRef=useRef()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [], isLoading, } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users')
            return result.data;
        }

    })



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    const handleMakeAdmin = (event,user) => {
        const selected=event.target.value;
        const role={role:selected}
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make ${selected}!`
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("role",selected)
                axiosSecure.patch(`/users/${user._id}`,role)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Changed Role!",
                                text: `${user.name} has been selected as ${selected}`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }



    return (
        <div>
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress w-80 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className='p-5 md:p-10'>
                            <DashboardTitle title={"All Users"}></DashboardTitle>
                            
                            <div className="overflow-x-auto ">
                                <table className="table ">
                                    {/* head */}
                                    <thead className='border bg-slate-200'>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th >Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, idx) => <tr key={idx}>
                                                <th>
                                                    {
                                                        idx + 1
                                                    }
                                                </th>
                                                <td>
                                                    {user.name}
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                <td>
                                                    <select
                                                     onChange={(event)=>handleMakeAdmin(event,user)} name="role" id=""
                                                     defaultValue={user.role||"user"}
                                                     ref={roleRef}
                                                     className="focus:outline-none" >
                                                        <option value="User">User</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="Moderator">Moderator</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-lg text-white min-h-0 h-auto p-2 bg-red-700">
                                                        <FaTrashAlt></FaTrashAlt>
                                                    </button>
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
};

export default AllUsers;