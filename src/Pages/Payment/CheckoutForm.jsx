import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price,id }) => {
    const { user } = useAuth()
    const stripe = useStripe();
    const [transactionId, setTransactionId] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState("")
    const elements = useElements();
    const axiosSecure = useAxiosSecure()

    const prise = {
        price: price
    }
    useEffect(() => {

        axiosSecure.post('/create-payment-intent', prise)
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("confirm error", confirmError)
            Swal.fire({
                title: "There has been some error",
                icon: "error",
            });
        }
        else {
            console.log("payment intent", paymentIntent)
            if (paymentIntent.status == "succeeded") {
                console.log("transactionId", paymentIntent.id)
                setTransactionId(paymentIntent.id)
                await Swal.fire({
                    title: "Your payment is successfull",
                    text: "Press OK or outside the box for further process",
                    icon: "success",
                });
                document.getElementById(`${id}`).showModal()
            }
        }
    }
    return (
        <div className="my-20 w-11/12 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm bg-[#4DA1A9] hover:bg-[#2E5077] my-5 " type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600">Your transaction id:{transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;