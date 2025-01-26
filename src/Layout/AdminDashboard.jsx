import { RiMenu2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";


const AdminDashboard = () => {
    const [singleUser]=useRole()
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-[#F6F4F0] ">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" role="button" className="btn bg-[#2E5077] fixed bottom-3 right-3 drawer-button rounded-none text-white  lg:hidden z-50">
                        <RiMenu2Line className="text-2xl"></RiMenu2Line>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#2E5077] text-base-content min-h-full md:w-72 w-56 p-4 gap-2">
                        {/* Sidebar content here */}

                        <li><Link to="/adminDashboard/user-profile" className={"bg-[#4DA1A9] text-white rounded-none"}>My Profile</Link></li>

                        {
                            singleUser.role=="Admin"&&<li><Link to="/adminDashboard/all-users" className={"bg-[#4DA1A9] text-white rounded-none"}>All Users </Link></li>
                        }

                        <li><Link to="/adminDashboard/all-review" className={"bg-[#4DA1A9] text-white rounded-none"}>All Review</Link></li>

                        <li><Link to="/adminDashboard/all-appliedScholarship" className={"bg-[#4DA1A9] text-white rounded-none"}>All Applied Scholarship</Link></li>

                        <li><Link to="/adminDashboard/manage-scholarship" className={"bg-[#4DA1A9] text-white rounded-none"}>Manage Scholarship</Link></li>

                        <li><Link to="/adminDashboard/add-scholarship" className={"bg-[#4DA1A9] text-white rounded-none"}>Add Scholarship</Link></li>

                        <li><Link to="/adminDashboard/chart" className={"bg-[#4DA1A9] text-white rounded-none"}>Analytics</Link></li>


                        <div className=" border-b-2 my-5 border-[#4DA1A9]"></div>


                        <li><Link to="/" className={"bg-[#4DA1A9] text-white rounded-none"}>Home</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;