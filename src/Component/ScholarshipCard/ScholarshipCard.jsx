import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaAngleRight, FaArrowAltCircleRight, FaArrowRight, FaCalendarAlt, FaDollarSign, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ScholarshipCard = ({ item }) => {
    const { applicationFee, category, city, country, deadline, degree, email, postDate, rank, scholarship, serviceCharge, subject, _id, university, imageUrl, ratingTotal, ratingCount } = item;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full  transform hover:-translate-y-1">
                <div className="relative">
                    <img
                        src={imageUrl}
                        alt={university}
                        className="w-full h-40 object-cover brightness-[0.90]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                        <h3 className="text-white font-semibold line-clamp-2 text-base">
                            {scholarship}
                        </h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/30 text-white px-2 py-1 rounded-full flex items-center">
                        <FaStar className="text-yellow-500 mr-1 text-sm" />
                        <span className="text-sm font-medium">{isNaN((ratingTotal / ratingCount).toFixed(2)) ? 0 : (ratingTotal / ratingCount).toFixed(2)}</span>
                    </div>
                </div>

                <div className="p-3 space-y-2.5">
                    <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-1.5 shrink-0 text-gray-400" />
                        <span className="text-sm truncate">{city + " , " + country}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className={`text-sm font-medium px-2.5 py-1 rounded-full bg-purple-100 text-gray-700`}>
                            {category}
                        </span>
                        <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                            {subject}
                        </span>
                    </div>

                    <div className="flex justify-between items-center pt-1">
                        <div className="space-y-1">
                            <div className="flex items-center text-gray-600">
                                <FaCalendarAlt className="mr-1.5 text-gray-400" />
                                <span className="text-sm">Due {deadline}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <FaDollarSign className="mr-1.5 text-gray-400" />
                                <span className="text-sm">Fee: ${applicationFee}</span>
                            </div>
                        </div>

                        <Link to={`/details/${_id}`}><button className=" text-gray-800 border-2 border-gray-300 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/30 transition-colors flex items-center gap-1">Details </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;






