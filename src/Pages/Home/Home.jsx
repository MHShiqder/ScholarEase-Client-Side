import React from 'react';

import Slider2 from '../../Component/Slider/Slider2';
import Success from '../../Component/Success/Success';
import ContactForm from '../../Component/ContactForm/ContactForm';
import TopScholarships from '../../Component/TopScholarship/TopScholarships';
import WhyChooseUs from '../../Component/WhyChooseUs/WhyChooseUs';
import TeamSection from '../../Component/TeamSection/TeamSection';
import FAQSection from '../../Component/FaqSection/FAQSection';

const Home = () => {
    return (
        <div>
            
            <Slider2></Slider2>
            <TopScholarships></TopScholarships>
            <Success></Success>
            <WhyChooseUs></WhyChooseUs>
            <TeamSection></TeamSection>
            <FAQSection></FAQSection>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;