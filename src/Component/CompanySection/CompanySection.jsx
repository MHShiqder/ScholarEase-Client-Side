import React from 'react';
import { FaGraduationCap, FaBookOpen, FaUsers } from 'react-icons/fa';
import cover from "../../assets/banner3.jpg"
const CompanySection = () => {
  return (
    <section className="flex md:px-20  flex-col md:flex-row items-center justify-between pb-20 px-6 bg-white  mx-auto w-11/12">
      <div className="w-full  h-96 md:w-1/3 mb-8 md:mb-0  ">
        <img
          src={cover}
          alt="ScholarEase"
          className="w-full h-full object-cover md:object-right rounded-lg shadow-xl"
        />
      </div>
      <div className="w-full md:w-2/3 md:pl-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
          Since the 1980s, the growing demand for education has driven the expansion of scholarship opportunities for students.
        </h2>
        <p className="text-xs md:text-sm text-gray-600 mb-8 text-justify ">
        We are dedicated to helping students find and apply for scholarships worldwide. By simplifying the application process and offering tailored opportunities, we aim to make education more accessible to students, regardless of their background or financial situation. Our mission is to empower students to pursue their academic dreams without the barrier of high costs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex items-center md:justify-center space-x-4 text-gray-700">
            <FaGraduationCap className="text-blue-600 text-5xl" />
            <span className="text-base ">Educational Growth</span>
          </div>
          <div className="flex items-center md:justify-center space-x-4 text-gray-700">
            <FaBookOpen className="text-green-600 text-5xl" />
            <span className="text-base ">Knowledge Access</span>
          </div>
          <div className="flex items-center md:justify-center space-x-4 text-gray-700">
            <FaUsers className="text-red-600 text-5xl" />
            <span className="text-base ">Global Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
