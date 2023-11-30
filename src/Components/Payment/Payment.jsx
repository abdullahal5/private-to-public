import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const Payment = ({price, badge}) => {
  // console.log(badge)
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = price
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (totalPrice)
      axiosPublic
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res?.data?.clientSecret);
          const data = res?.data?.clientSecret;
          setClientSecret(data);
        });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("payment error", error);
      setError(error.message);
    } else {
      // console.log("payment Method", paymentMethod);
      setError("");
    }


    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      // console.log("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("trnasaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          transactionId: paymentIntent.id,
          badge: badge
        };
        const res = await axiosPublic.post("/payments", payment);
        // console.log(res.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: 'you successfully deleted',
            icon: "success",
          });
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn border-[#02c39a] text-white btn-sm bg-[#02c39a] btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay ${totalPrice}
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default Payment;
