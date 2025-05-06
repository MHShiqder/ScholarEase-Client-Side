import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useScholarship from "../../Hooks/useScholarship";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
import loadingImage from '../../assets/navLogoNew2.png'


const stripePromise = loadStripe(`${import.meta.env.VITE_payment_gateway_key}`);
const Payment = () => {
    const { id } = useParams()
    const [scholarship, , isLoading] = useScholarship();
    if (!isLoading) {
        const currentScholarship = scholarship.find(item => item._id == id)
        var { applicationFee, university, subject, category, country, city, applicationFee, serviceCharge, scholarship: scholarshipName, deadline } = currentScholarship;

    }
    const info = { university, subject, category, id, country, city, applicationFee, serviceCharge, scholarshipName, deadline }
    return (
        <div>
            {
                isLoading ?
                    <>
                        <div className=' flex justify-center items-center h-[calc(100vh-100px)]'>
                            {/* <progress className="progress md:w-80 w-48 "></progress> */}
                            <img src={loadingImage} alt="Loading" className='animate-pulse duration-200 w-[300px]' />
                        </div>
                    </>
                    :
                    <>
                        <div className="my-5 w-11/12 mx-auto">
                            <p className="text-2xl ">
                                Application Fee of this Scholarship is : {applicationFee}
                            </p>

                        </div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm price={applicationFee} id={id} />
                        </Elements>

                        <PaymentModal info={info} ></PaymentModal>
                    </>
            }
        </div>
    );
};

export default Payment;