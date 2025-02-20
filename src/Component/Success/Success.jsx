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
        <div className="bg-primary/20">
            <div id="animateMe2" className={` w-11/12 mx-auto pb-20 bg-cover bg-right text-white px-5 my-20 animate__animated ${isVisible ? 'animate__fadeInRight' : ''}`}>
                <h1 className="text-2xl md:text-4xl font-bold py-10 text-center text-[#320a4e]">ScholarEase Statistics</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 text-[#320a4e] gap-5 ">
                    <div className="flex flex-col items-center   bg-white/80   rounded-md hover:bg-white  py-10 space-y-3    ">
                        <img className="md:w-14 w-10 " src="https://cdn-icons-png.flaticon.com/128/511/511587.png" alt="" />
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={180}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Mentors</h5>
                    </div>

                    <div className="flex flex-col items-center  bg-white/80   rounded-md hover:bg-white    py-10 space-y-3 ">
                        <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/3018/3018864.png" alt="" />
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={12}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Categories</h5>
                    </div>

                    <div className="flex flex-col items-center  bg-white/80   rounded-md hover:bg-white    py-10 space-y-3 ">
                        <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/10558/10558485.png" alt="" />
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={700}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Scholarships</h5>
                    </div>

                    <div className="flex flex-col items-center  bg-white/80   rounded-md hover:bg-white    py-10 space-y-3 ">
                        <img className="md:w-14 w-10" src="https://cdn-icons-png.flaticon.com/128/2947/2947660.png" alt="" />
                        <h3 ref={ref} className="md:text-5xl text-4xl">{inView && (<CountUp end={58}></CountUp>)}</h3>
                        <h5 className="md:text-xl text-lg ">Countries</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Success;