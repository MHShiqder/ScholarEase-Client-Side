import React from 'react';
import { Link } from 'react-router-dom';

const ScholarshipCard = ({ item }) => {
    const { applicationFee, category, city, country, deadline, degree, email, postDate, rank, scholarship, serviceCharge, subject, _id, university, imageUrl } = item;
    return (
        <div>
            <div className=" card-compact bg-base-100 rounded-none shadow-xl">
                <figure>
                    <img
                        src={imageUrl}
                        alt="Shoes"
                        className='h-56 w-full' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center h-12">{university}</h2>

                    <div className='text-start text-base h-44'>
                    <p><span className=' font-medium'>Scholarship Category:</span> {category} </p>
                    <p><span className=' font-medium'>University location:</span> {city+" , "+country} </p>
                    <p><span className=' font-medium'> Application Deadline:</span> {deadline} </p>
                    <p><span className=' font-medium'>Subject Category:</span> {subject} </p>
                    <p><span className=' font-medium'>Application Fees:</span> {applicationFee} </p>
                    <p><span className=' font-medium'>Rating:</span> {""} </p>
                    
                    </div>

                    <div className=" ">
                        <Link to={`/details/${_id}`}><button className="btn bg-green-600 hover:bg-green-900 rounded-none text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;