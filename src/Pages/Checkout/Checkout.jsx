import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import Payment from "../../Components/Payment/Payment";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Checkout = () => {
    const params = useParams()
    const axiosPublic = useAxiosPublic()
    const { data: membership = [], isLoading } = useQuery({
      queryKey: ["membership"],
      queryFn: async () => {
        const res = await axiosPublic.get("/membership");
        return res.data;
      },
    });
    
    const filter = membership?.filter(item => item?.package_name === params?.packageName)
    console.log(filter)
    const stripePromise = loadStripe(
      "pk_test_51OEpkQD6HiOKUnrgGvScdxR6WDgFLqYyi5dM1CcaBE8M6PrWsVerdD7qsSISAWm5eA9CoZGMxAxa36F3WkyDhQvA00niqpiWUZ"
    );
    
    return (
      <div>
        <Elements stripe={stripePromise}>
          {filter.map((i) => (
            <Payment key={i._id} price={i.price} badge={i?.package_name}></Payment>
          ))}
        </Elements>
      </div>
    );
};

export default Checkout;