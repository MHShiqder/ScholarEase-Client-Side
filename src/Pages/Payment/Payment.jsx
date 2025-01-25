import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useScholarship from "../../Hooks/useScholarship";
import { useState } from "react";
import PaymentModal from "./PaymentModal";


const stripePromise = loadStripe(`${import.meta.env.VITE_payment_gateway_key}`);
const Payment = () => {
    const { id } = useParams()
    const [scholarship, , isLoading] = useScholarship();
    if (!isLoading) {
        const currentScholarship = scholarship.find(item => item._id == id)
        var { applicationFee,university,subject,category,country, city,applicationFee,serviceCharge,scholarship:scholarshipName,deadline } = currentScholarship;

    }
    const info={university,subject,category,id,country,city,applicationFee,serviceCharge,scholarshipName,deadline}
    return (
        <div>
            {
                isLoading ?
                    <>
                        <div className=' flex justify-center items-center h-72'>
                            <progress className="progress w-80 "></progress>
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
                            <CheckoutForm price={applicationFee} id={id}/>
                        </Elements>

                        <PaymentModal info={info} ></PaymentModal>
                    </>
            }
        </div>
    );
};

export default Payment;