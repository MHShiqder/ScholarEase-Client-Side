import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="bg-background text-[#320a4e] min-h-screen py-12 px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#320a4e]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About ScholarEase
                </motion.h1>
                <motion.p 
                    className="mt-4 text-base sm:text-lg text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Empowering students worldwide by making scholarships more accessible and manageable.
                </motion.p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
                <motion.div 
                    className="p-6 bg-secondary/10 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">Our Mission</h2>
                    <p className="mt-3 text-gray-700 text-sm sm:text-base">
                        Our goal is to connect students with scholarship opportunities effortlessly, ensuring that financial constraints never hinder academic dreams.
                    </p>
                </motion.div>

                <motion.div 
                    className="p-6 bg-secondary/10 rounded-xl shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-primary">Why Choose Us?</h2>
                    <p className="mt-3 text-gray-700 text-sm sm:text-base">
                        ScholarEase simplifies the scholarship search, offering a user-friendly platform with real-time updates and personalized recommendations.
                    </p>
                </motion.div>
            </div>

            <div className="mt-16 text-center">
                <motion.h2 
                    className="text-2xl sm:text-3xl font-semibold text-[#320a4e]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Join Us in Shaping a Brighter Future!
                </motion.h2>
                <motion.p 
                    className="mt-3 text-base sm:text-lg text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover endless opportunities and unlock your academic potential with ScholarEase.
                </motion.p>
            </div>
        </div>
    );
};

export default AboutUs;
