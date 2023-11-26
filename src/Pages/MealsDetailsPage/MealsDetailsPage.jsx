import { Link, useParams } from "react-router-dom";
import Star from "../../Components/Star/Star";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const MealsDetailsPage = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const { data: category = [], isLoading } = useQuery({
      queryKey: ["category"],
      queryFn: async () => {
        const res = await axiosPublic.get("/category");
        return res.data;
      },
    });
    const {id} = useParams()
    const dataFind = category?.find((item) => (item._id) === id);
    // console.log(dataFind)
    const [liked, setLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);
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
    const request =(id) =>{
      const data = {
        email: user?.email, 
        dataFind
      };
        axiosPublic.post('/request', data)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              title: "Good Job!",
              text: "you successfully requested for the meal",
              icon: "success",
            });
          }
        })
    }
    
    const { data: review = [], refetch } = useQuery({
      queryKey: ["ok"],
      queryFn: async () => {
        const res = await axiosPublic.get('/review');
        return res.data;
      },
    });
    // console.log(review.dataId)
    const handleInput = (e) =>{
      e.preventDefault();
      const review = e.target.review.value;
      const inputReview = {
        dataId: dataFind?._id,
        email: user?.email,
        review,
        name: user?.displayName,
        image: user?.photoURL,
      };

      axiosPublic.post("/review", inputReview)
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            title: "Good Job!",
            text: "your review added",
            icon: "success",
          });
        }
      });
    }
    const iddd = review.filter(item => item.dataId === dataFind?._id)
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
               <Link to="/meals" className="w-3/4">
                 <button className="btn w-full bg-[#02c39a] text-white">
                   See All
                 </button>
               </Link>
               <button
                 onClick={() => request(dataFind?._id)}
                 className="btn w-1/3 text-[#02c39a]"
               >
                 Request for this meal
               </button>
             </div>
           </div>
           <div className="w-[40%]">
             <img src={dataFind?.image} alt="" />
           </div>
         </div>
         <div>
           <h1 className="text-3xl text-center my-10">Reviews</h1>
           <div className="text-center">
             <form onSubmit={handleInput}>
               <input
                 placeholder="Type your Review"
                 name="review"
                 type="text"
                 className="border py-10 w-3/4  rounded-lg bg-gray-200 pl-5 text-3xl"
               />
               <button
                 className="text-white bg-[#02c39a] px-3 py-2 font-semibold block mx-auto my-5 rounded-lg cursor-pointer"
                 type="submit"
                >Sumbit</button>
             </form>
           </div>
           <div className=" my-10">
             {iddd.map((item) => (
               <div key={item?._id}>
                 <div className="flex items-center p-5 gap-10 bg-gray-200 border-b border-gray-500">
                   <img
                     className="w-20 rounded-full"
                     src={item?.image}
                     alt=""
                   />
                   <div className="flex flex-col font-semibold">
                     <h1>Name: {item?.name}</h1>
                     <p>Review: {item?.review}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     );
};

export default MealsDetailsPage;