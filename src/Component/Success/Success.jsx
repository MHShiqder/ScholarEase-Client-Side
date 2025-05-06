import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import 'animate.css';
import { useEffect, useState } from 'react';

const Success = () => {
    const [isVisible, setIsVisible] = useState(false);  // State to track visibility

    useEffect(() => {
        // Create an Intersection Observer to watch for when the element is visible on screen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {  // If the element is visible on the screen
                    setIsVisible(true);        // Trigger the animation
                }
            });
        });

        const element = document.getElementById('animateMe2');  // The element we want to animate
        observer.observe(element);  // Start observing the element

        return () => observer.disconnect();  // Cleanup the observer when the component unmounts
    }, []);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    return (
        <div className="bg-gray-50">
            <div id="animateMe2" className={`flex flex-col items-center w-11/12 mx-auto pb-20 py-16 text-white px-5 my-20 animate__animated ${isVisible ? 'animate__fadeInRight' : ''}`}>
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">ScholarEase Statistics</h2>
                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
                        Have questions? We've got answers. Explore our FAQ section to learn more about how ScholarEase works.
                    </p>
                </div>
                <div className="grid grid-cols-3 text-[#320a4e] w-1/2">
                    <div className="flex flex-col items-center     border border-l-0 border-t-0      hover:bg-white  py-10 space-y-3    ">
                        {/* <img className="md:w-14 w-10 " src="https://cdn-icons-png.flaticon.com/128/511/511587.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={180}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Mentors</h5>
                    </div>

                    <div className="flex flex-col items-center    border  border-t-0     hover:bg-white    py-10 space-y-3 ">
                        {/* <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={12}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Categories</h5>
                    </div>

                    <div className="flex flex-col items-center    border  border-t-0 border-r-0     hover:bg-white    py-10 space-y-3 ">
                        {/* <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={12}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Categories</h5>
                    </div>

                    <div className="flex flex-col items-center    border  border-b-0 border-l-0    hover:bg-white    py-10 space-y-3 ">
                        {/* <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={12}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Categories</h5>
                    </div>

                    <div className="flex flex-col items-center    border   border-b-0   hover:bg-white    py-10 space-y-3 ">
                        {/* <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/10558/10558485.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={700}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Scholarships</h5>
                    </div>

                    <div className="flex flex-col items-center    border     border-b-0 border-r-0  hover:bg-white    py-10 space-y-3 ">
                        {/* <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/2947/2947660.png" alt="" /> */}
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={58}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Countries</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Success;