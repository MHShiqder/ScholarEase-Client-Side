import { motion } from "motion/react"
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Slide = ({ Heading, image, Bold, subHeading}) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='h-[300px] md:h-[375px] lg:h-[450px] bg-cover bg-top '>
            <div className='bg-gradient-to-r from-black  to-transparent h-full '>
                <div className='w-11/12 mx-auto flex flex-col  justify-center  h-full'>

                    <motion.div
                        
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className='text-2xl md:text-4xl lg:text-6xl text-white font-bold'>{Heading}</h2>
                        <h2 className='text-3xl md:text-5xl lg:text-7xl  font-bold text-secondary'>{Bold}</h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='text-white text-xs lg:text-sm w-[300motion.px] md:w-[400px] lg:w-[500px]  mt-2 md:mt-3 lg:mt-5  font-light'>{subHeading}</motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-32"
                    >
                        <Link className=' bg-primary/90 px-1 py-1 md:py-2 rounded-md w-full md:w-36 lg:text-base text-sm text-white  mt-2 md:mt-3 lg:mt-5  flex justify-around items-center hover:scale-105' to="all-scholarship">Explore Now <span><FaArrowRight></FaArrowRight></span> </Link>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Slide;