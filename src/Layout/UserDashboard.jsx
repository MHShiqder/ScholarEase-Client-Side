import { RiMenu2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const UserDashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-[#F6F4F0] ">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" role="button" className="btn bg-[#2E5077] fixed bottom-3 right-3 drawer-button rounded-none text-white  lg:hidden ">
                        <RiMenu2Line className="text-2xl"></RiMenu2Line>
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-[#320a4e] text-base-content min-h-full md:w-72 w-56 p-4 gap-2">
                        {/* Sidebar content here */}

                        <li><Link to="/userDashboard/user-profile" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>My Profile</Link></li>

                        <li><Link to="/adminDashboard/chart" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>Overview</Link></li>

                        <li><Link to="/userDashboard/user-applications" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>My Applications</Link></li>
                        <li><Link to="/userDashboard/user-reviews" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>My Reviews</Link></li>


                        <div className=" border-b-2 my-5 border-[#4DA1A9]"></div>

                        <li><Link to="/" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>Home</Link></li>
                        <li><Link to="/all-scholarship" className={"bg-primary hover:bg-secondary/80  text-white rounded-none"}>All Scholarship</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;