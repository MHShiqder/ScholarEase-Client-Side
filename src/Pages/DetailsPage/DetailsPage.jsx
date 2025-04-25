import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Reviews from "../../Component/Reviews/Reviews";
import DashboardTitle from "../../Component/DashboardTitle/DashboardTitle";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const DetailsPage = () => {
    const { id } = useParams()


    const axiosSecure = useAxiosSecure()
    const { data: thisReviews = [] } = useQuery({
        queryKey: ["thisReviews", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/thisReviews/${id}`)
            return res.data;
        }
    })
    // const total = thisReviews.reduce((acc, cVal) => acc + parseInt(cVal.rating), 0)
    // const averageRating = (total / thisReviews.length).toFixed(2);
    // console.log("average", averageRating)



    const { data: scholarship = {}, isLoading, } = useQuery({
        queryKey: ['scholarship'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/scholarship/${id}`)
            return result.data;
        }
    })
    const { applicationFee, category, city, country, deadline, postDate, rank, scholarship: scholarshipName, serviceCharge, subject, _id, university, imageUrl, details, ratingCount, ratingTotal } = scholarship;
    return (
        <div>
            {
                isLoading
                    ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress w-80 "></progress>
                        </div>
                    </>
                    :

                    <div>
                        <div className=" flex flex-col justify-center items-center card-compact bg-primary/10 p-10 rounded-none shadow-xl text-center my-10 w-11/12 md:w-2/3 mx-auto ">
                            <figure>
                                <img
                                    src={imageUrl}
                                    alt="University Image"
                                    className='h-64' />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title md:text-3xl text-xl font-bold justify-center h-12">{university}</h2>

                                <div className=' md:text-lg text-sm'>
                                    <p><span className=' font-medium'>Scholarship Category:</span> {category} </p>
                                    <p><span className=' font-medium'>University location:</span> {city + " , " + country} </p>
                                    <p><span className=' font-medium'> Application Deadline:</span> {deadline} </p>
                                    <p><span className=' font-medium'> Post Date:</span> {postDate} </p>
                                    <p><span className=' font-medium'>Subject Category:</span> {subject} </p>
                                    <p><span className=' font-medium'>Application Fees:</span> {applicationFee} </p>
                                    <p><span className=' font-medium'>Service Charge:</span> {serviceCharge} </p>
                                    <p><span className=' font-medium'>Scholarship Name:</span> {scholarshipName} </p>
                                    <p><span className=' font-medium'>World Rank:</span> {rank} </p>
                                    {
                                        details && <p><span className=' font-medium'>Scholarship Details:</span> {details} </p>
                                    }
                                    <p className="flex flex-col md:flex-row items-center justify-center gap-2"><span className=' font-medium'>Rating: </span><Rating
                                        style={{ maxWidth: 100 }}
                                        value={ratingTotal / ratingCount}
                                        readOnly
                                    />  ({ratingTotal / ratingCount || 0}) </p>

                                </div>

                                <div className=" ">
                                    <Link to={`/payment/${_id}`}><button className="btn px-16 bg-primary hover:bg-[#320a4e] rounded-full text-white">Apply Scholarship</button></Link>
                                </div>
                            </div>
                        </div>
                        {/* TODO: */}
                        <DashboardTitle title={"Reviews"}></DashboardTitle>
                        {
                            thisReviews.length
                            ?
                            <Reviews thisReviews={thisReviews} ></Reviews>
                            :
                            <div className="text-center md:mb-10 mb-5">
                                <h2 className="md:text-2xl text-lg font-semibold">No Reviews available</h2>
                            </div>
                        }
                    </div>

            }
        </div>
    );
};

export default DetailsPage;