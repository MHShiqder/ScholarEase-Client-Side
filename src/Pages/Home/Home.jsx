import React from 'react';

import Slider2 from '../../Component/Slider/Slider2';
import Success from '../../Component/Success/Success';
import ContactForm from '../../Component/ContactForm/ContactForm';
import TopScholarships from '../../Component/TopScholarship/TopScholarships';
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            
            <Slider2></Slider2>
            <TopScholarships></TopScholarships>
            <Success></Success>
            <WhyChooseUs></WhyChooseUs>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;