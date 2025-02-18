import banner2 from "../../assets/banner2.jpg"
import banner1 from "../../assets/banner1.jpg"
import banner3 from "../../assets/banner3.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import Slide from './Slide';

const Slider2 = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide key={1}>
                    <Slide key={1}
                        index={"1"}
                        Heading="Unlock Your"
                        image={banner2}
                        Bold="Bright Future"
                        subHeading="Education is the key to success, and the right scholarship can unlock limitless opportunities. Start your journey today and secure the future you deserve."
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <Slide key={2}
                        index={"2"}
                        Heading="Education Without"
                        image={banner1}
                        Bold="Limits Ahead"
                        subHeading="Financial barriers shouldn’t hold you back from achieving greatness. Explore a world of scholarships designed to support your dreams, no matter where you come from."
                    ></Slide>
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <Slide key={3}
                        index={"3"}
                        Heading="Dream Big"
                        image={banner3}
                        Bold="Fund Secure"
                        subHeading="Turn your academic aspirations into reality with the right financial support. Discover grants and scholarships that make higher education stress-free and achievable."
                    ></Slide>
                </SwiperSlide>
                {/* <SwiperSlide><img className="w-full" alt="Slide 2" src={banner3} /></SwiperSlide>
                <SwiperSlide><img className="w-full" alt="Slide 3" src={banner2} /></SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default Slider2;
