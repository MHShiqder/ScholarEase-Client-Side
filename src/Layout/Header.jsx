import { NavLink } from "react-router-dom";
import navLogo from '../assets/navLogoNew.png'
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const Header = () => {
    const { user, signOutUser } = useAuth()
    const [singleUser] = useRole()
    const links = <>
        <li><NavLink to='/' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>Home</NavLink></li>

        <li><NavLink to='/all-scholarship' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold  font-lora  px-2 py-1 '}>Scholarships</NavLink></li>
        <li><NavLink to='/aboutUs' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold  font-lora  px-2 py-1 '}>About</NavLink></li>

        {
            user
                ?
                <>
                    {
                        singleUser?.role == "Admin" || singleUser?.role == "Moderator"
                            ?
                            <>
                                <li><NavLink to='/adminDashboard/user-profile' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold  md:ml-2  font-lora  px-2 py-1 '}>Admin_Dashboard</NavLink></li>

                                <li><NavLink to='/adminDashboard/all-appliedScholarship' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold  md:ml-2  font-lora  px-2 py-1 '}>Applications</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/userDashboard/user-profile' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>User_Dashboard</NavLink></li>
                                <li><NavLink to='/userDashboard/user-applications' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>Applications</NavLink></li>
                                {/* <li><NavLink to='/userDashboard/user-reviews' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>Reviews</NavLink></li> */}
                            </>
                    }


                    <li onClick={() => { signOutUser() }}><NavLink to='' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>Logout</NavLink></li>
                    <div className=" py-1  pl-3  items-center   tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <NavLink to={"/userDashboard/user-profile"}>
                            <img className="h-10 w-10 rounded-md object-contain" src={user?.photoURL} alt="DisplayImage" />
                        </NavLink>

                    </div>
                </>
                :
                <>
                    <li><NavLink to='/login' className={'text-base text-white    hover:text-[#FFD700]  hover:font-bold     font-lora  px-2 py-1 '}>Login</NavLink></li>
                </>
        }

    </>
    return (
        <div className="sticky bg-primary   top-0 z-50">
            <div className="navbar w-11/12 mx-auto  text-white  px-0">
                <div className="navbar-start md:w-1/5 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu-sm dropdown-content bg-[#123524]  bg-opacity-90 rounded-box z-[1] mt-3 w-60 p-2  shadow flex flex-col gap-3">
                            {links}
                        </ul>
                    </div>
                    <a href="/"><img className="h-14 " src={navLogo} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex w-4/5">
                    <ul className=" menu-horizontal px-1 items-center">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;