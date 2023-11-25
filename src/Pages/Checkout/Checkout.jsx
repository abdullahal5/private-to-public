import { useParams } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../../Components/Payment/Payment";

const Checkout = () => {
    const axiosPublic = useAxiosPublic();
    const { data: packages = [], isLoading } = useQuery({
      queryKey: ["package"],
      queryFn: async () => {
        const res = await axiosPublic.get("/membership");
        return res.data;
      },
    });
    const { packageName } = useParams();
    const dataFind = packages?.find(
      (item) => item?.package_name === packageName
    );
    const price = dataFind?.price
    const badge = dataFind?.package_name;
    const stripePromise = loadStripe('pk_test_51OEpkQD6HiOKUnrgGvScdxR6WDgFLqYyi5dM1CcaBE8M6PrWsVerdD7qsSISAWm5eA9CoZGMxAxa36F3WkyDhQvA00niqpiWUZ')
    return (
        <div>
            <Nav></Nav>
            <Elements stripe={stripePromise}>
                <Payment price={price} badge={badge}></Payment>
            </Elements>
        </div>
    );
};

export default Checkout;