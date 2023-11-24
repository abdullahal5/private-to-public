import { Link, useLoaderData, useParams } from "react-router-dom";
import Star from "../../Components/Star/Star";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import axios from "axios";

const MealsDetailsPage = () => {
    const axiosPublic = useAxiosPublic();
    const { data: category = [], isLoading } = useQuery({
      queryKey: ["category"],
      queryFn: async () => {
        const res = await axiosPublic.get("/category");
        return res.data;
      },
    });
    const {id} = useParams()
    const dataFind = category?.find((item) => (item._id) === id);
    console.log(dataFind)
    const [liked, setLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);
    const back = () =>{
        window.history.back()
    }
    const handleClick = () => {
      if (!liked) {
        setLiked(true);
        const updatedLikes = totalLikes + 1;
        setTotalLikes(updatedLikes);
      }
    };
    useEffect(() => {
    
    }, []);
    if(isLoading){
        <div className="flex justify-center items-center h-[100vh]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
      <div>
        <h1 className="text-3xl font-font1 text-center pt-10 pb-5 text-[#02c39a]">
          Details
        </h1>
        <p className="text-center mx-28">
          A Comprehensive Exploration of Product Features, Specifications, and
          Insights to Empower Your Decision-making Process and Enhance Your
          Understanding of this Exceptional Offering.
        </p>
        <hr className="mt-5 border-[#02c39a] mx-auto w-96" />
        <div className="flex items-center justify-between font-font1 h-[70vh]">
          <div className="space-y-5 w-[50%]">
            <h1 className="text-3xl">See Details about the product</h1>
            <hr className="w-96 border-[#02c39a]" />
            <p className="text-3xl">Title: {dataFind?.name}</p>
            <p className="text-4xl">Price: {dataFind?.price}</p>
            <span className="flex text-lg">
              Reviews: <Star rating={dataFind?.rating}></Star>
            </span>
            <p className=" italic text-left">{dataFind?.recipe}</p>
            <div>
              <button onClick={handleClick}>
                {liked ? (
                  <FaHeart fontSize={"2rem"} color="red" />
                ) : (
                  <FaRegHeart fontSize={"2rem"} />
                )}
              </button>
              <p>Total Likes: {totalLikes}</p>
            </div>
            <div className="flex gap-3">
              <Link className="w-3/4">
                <button className="btn w-full bg-[#02c39a] text-white">
                  See All
                </button>
              </Link>
              <button onClick={back} className="btn w-1/3">
                Go back
              </button>
            </div>
          </div>
          <div className="w-[40%]">
            <img src={dataFind?.image} alt="" />
          </div>
        </div>
      </div>
    );
};

export default MealsDetailsPage;