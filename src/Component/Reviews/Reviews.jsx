
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Reviews = ({ thisReviews }) => {
    
    
    
    return (
        <div className='my-16'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    thisReviews.map((review, idx) => <SwiperSlide key={idx}>
                        <div className='flex flex-col items-center mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            
                            <p className='py-8 text-xl'>
                                "{review.review}"
                            </p>
                            <img className='h-24 w-24 rounded-full object-contain' src={review.photo} alt="" />
                            <h2 className='text-2xl text-orange-400 mt-5'>{review.userName}</h2>
                            <p className='pb-3'>
                               Date: {review.reviewDate}
                            </p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;