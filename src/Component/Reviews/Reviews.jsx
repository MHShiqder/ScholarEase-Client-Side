import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
    // const [reviews, setReviews] = useState([])
    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setReviews(data)
                
    //         });

    // }, [])
    return (
        <div className='my-16'>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map((review,idx) => <SwiperSlide key={idx}>
                        <div className='flex flex-col items-center mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='text-5xl mt-10'/>
                            <p className='py-8'>
                                {review.details}
                            </p>
                            <h2 className='text-2xl text-orange-400'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;