import { NavLink } from "react-router-dom";
import navLogo from '../assets/NavLogo.png'
import useAuth from "../Hooks/useAuth";


const Header = () => {
    const { user, signOutUser } = useAuth()
    const links = <>
        <li><NavLink to='/' className={'text-base text-white   hover:border-b-2 hover:border-green-400 ml-6 font-serif px-3 py-1 rounded-3xl'}>Home</NavLink></li>

        {
            user
                ?
                <>
                    <li onClick={() => { signOutUser() }}><NavLink to='' className={'text-base text-white   hover:border-b-2 hover:border-green-400 ml-6 font-serif px-3 py-1 rounded-3xl'}>Logout</NavLink></li>
                </>
                :
                <>
                    <li><NavLink to='/login' className={'text-base text-white   hover:border-b-2 hover:border-green-400 ml-6 font-serif px-3 py-1 rounded-3xl'}>Login</NavLink></li>
                </>
        }

    </>
    return (
        <div className="sticky bg-[#191A19] bg-opacity-60 top-0 z-50">
            <div className="navbar w-11/12 mx-auto  text-white">
                <div className="navbar-start">
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
                            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a href="/"><img className="h-14" src={navLogo} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;