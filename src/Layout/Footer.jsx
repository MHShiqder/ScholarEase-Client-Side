import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/NavLogo.png'
const Footer = () => {
    return (
        <div className="bg-neutral ">
            <footer className="footer flex flex-col items-center  w-11/12 mx-auto text-neutral-content py-10">
                <aside>
                    <img className='h-24 ' src={logo} alt="" />
                    
                </aside>
                <nav>
                    <p className="footer-title mx-auto">Social</p>
                    <div className="grid grid-flow-col gap-4">
                        
                        
                        <div className='text-3xl'>
                            <FaFacebook ></FaFacebook>
                        </div>
                        <div className='text-3xl'>
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className='text-3xl'>
                            <FaYoutube></FaYoutube>
                        </div>
                    </div>
                </nav>
                <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by ScolarEase Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;