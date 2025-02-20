import React from 'react';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { IoBookOutline } from 'react-icons/io5';
import { MdOutlineVerifiedUser } from 'react-icons/md';

const WhyChooseUs = () => {
  return (
    <div className="w-11/12 mx-auto bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 py-20 relative overflow-hidden mb-20">
      {/* Vector-style background elements */}
      <div className="absolute inset-0">
                
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${i * 10}%`,
                left: '-25%',
                right: '-25%',
                transform: 'rotate(-35deg)'
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Title Column */}
          <div className="text-white">
            <h2 className="text-3xl  font-bold leading-tight text-left">
              Why Choose
              <span className="block mt-2">Our Platform?</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-white rounded"></div>
            <p className="mt-6 text-indigo-100 text-left">
              We provide comprehensive solutions to make your scholarship journey seamless and successful.
            </p>
          </div>

          {/* Feature Columns - All with fixed height */}
          {[
            {
              icon: (
                <MdOutlineVerifiedUser></MdOutlineVerifiedUser>
              ),
              title: "Verified ",
              description: "All scholarships are thoroughly vetted and verified to ensure legitimacy and quality for our students."
            },
            {
              icon: (
                <AiOutlineThunderbolt />
              ),
              title: "Fast Application",
              description: "Streamlined application process with smart forms and real-time status tracking for efficiency."
            },
            {
              icon: (
                <IoBookOutline />
              ),
              title: "Expert Guidance",
              description: "Access to mentorship and comprehensive resources to help you succeed in your academic journey."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 h-[280px] transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
            >
              <div className="text-white mb-6">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-white/20 rounded-lg rotate-6"></div>
                  <div className="absolute inset-0 bg-white/20 rounded-lg -rotate-6"></div>
                  <div className="relative w-12 h-12 text-4xl flex justify-center items-center">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 text-left line-clamp-1">{feature.title}</h3>
              <p className="text-indigo-100 text-left text-sm line-clamp-5 ">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;