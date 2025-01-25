import { NavLink } from "react-router-dom";
import navLogo from '../assets/NavLogo.png'
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const Header = () => {
    const { user, signOutUser } = useAuth()
    const [singleUser]=useRole()
    const links = <>
        <li><NavLink to='/' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-6 font-serif px-3 py-1 '}>Home</NavLink></li>

        <li><NavLink to='/all-scholarship' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-6 font-serif px-3 py-1 '}>All_Scholarship</NavLink></li>

        {
            user
                ?
                <>
                    {
                        singleUser?.role=="Admin"||singleUser?.role=="Moderator"
                            ?
                            <>                               
                                <li><NavLink to='/adminDashboard/user-profile' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-2 font-serif px-3 py-1 '}>Admin_Dashboard</NavLink></li>
                            </>
                            :
                            <>
                             <li><NavLink to='/userDashboard/user-profile' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-6 font-serif px-3 py-1 '}>User_Dashboard</NavLink></li>
                            </>
                    }


                    <li onClick={() => { signOutUser() }}><NavLink to='' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-6 font-serif px-3 py-1 '}>Logout</NavLink></li>
                    <div className="bg-green-700 py-1 px-2 md:flex gap-2 items-center ml-4 rounded-l-full">
                        <img className="h-10 w-10 rounded-full  border object-contain" src={user?.photoURL} alt="" />
                        <p className="font-bold">{user?.displayName}</p>
                    </div>
                </>
                :
                <>
                    <li><NavLink to='/login' className={'text-base text-white   hover:border-b-2 hover:border-t-2 hover:border-green-400 ml-6 font-serif px-3 py-1 '}>Login</NavLink></li>
                </>
        }

    </>
    return (
        <div className="sticky bg-[#123524]  bg-opacity-90 top-0 z-50">
            <div className="navbar w-11/12 mx-auto  text-white">
                <div className="navbar-start w-1/5">
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
                            className=" menu-sm dropdown-content bg-[#123524]  bg-opacity-90 rounded-box z-[1] mt-3 w-52 p-2  shadow flex flex-col gap-3">
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