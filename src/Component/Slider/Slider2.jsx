import banner2 from "../../assets/banner2.jpg"
import banner1 from "../../assets/banner1.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Autoplay, Navigation, EffectFade,Pagination } from 'swiper/modules';
import Slide from './Slide';

const Slider2 = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                speed={1500}
                effect="fade"
                fadeEffect={{ crossFade: false, }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loop={true}
                // navigation={true}
                pagination={{
                    clickable:true,
                }}
                modules={[Autoplay, Navigation, EffectFade,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Slide 
                        
                        Heading="Unlock Your"
                        image={banner2}
                        Bold="Bright Future"
                        subHeading="Education is the key to success, and the right scholarship can unlock limitless opportunities. Start your journey today and secure the future you deserve."
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide >
                    <Slide 
                        
                        Heading="Education Without"
                        image={banner1}
                        Bold="Limits Ahead"
                        subHeading="Financial barriers shouldn’t hold you back from achieving greatness. Explore a world of scholarships designed to support your dreams, no matter where you come from."
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide >
                    <Slide 
                        
                        Heading="Dream Big"
                        image={banner3}
                        Bold="Fund Secure"
                        subHeading="Turn your academic aspirations into reality with the right financial support. Discover grants and scholarships that make higher education stress-free and achievable."
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide >
                    <Slide 
                        
                        Heading="Your Scholarship"
                        image={banner4}
                        Bold="Your Success"
                        subHeading="Finding the right scholarship shouldn’t be complicated. ScholarEase connects you to funding opportunities tailored to your academic goals, making success more accessible."
                    ></Slide>
                </SwiperSlide>
                {/* <SwiperSlide><img className="w-full" alt="Slide 2" src={banner3} /></SwiperSlide>
                <SwiperSlide><img className="w-full" alt="Slide 3" src={banner2} /></SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Slider2;
