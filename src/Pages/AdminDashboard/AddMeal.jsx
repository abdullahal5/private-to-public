import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";
import { data } from "browserslist";
import Swal from "sweetalert2";
import { useState } from "react";

const AddMeal = () => {
  const image_hosting_key = "e9e1388a03f6f3b6650b65332302c55d";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
   const { register, handleSubmit, reset, getValues } = useForm();
   const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
      const imageFile = { image: data.image[0]};
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const dd = {
        name: data.name,
        category: data.category,
        description : data.description,
        email: data.email,
        image: res.data.data.display_url,
        ingredients: data.ingredients,
        likes: data.likes,
        price: data.price,
        rating: data.rating,
        review: data.review,
        title: data.title,
        date: data.date
      }
      // console.log(dd)
      axiosPublic.post("/category", dd)
      .then(res => {
        // console.log(res.data)
        if(res.data.insertedId){
          reset()
           Swal.fire({
             title: "Good Job!",
             text: "you successfully added the card",
             icon: "success",
           });
        }
      })
    };
     const handleUpcomingMeal = () => {
       const formData = getValues()
      //  console.log(formData)
       axiosPublic.post('/upcoming', formData)
       .then(res => {
        // console.log(res.data)
         if(res.data.insertedId){
          reset();
          Swal.fire({
            title: "Good Job!",
            text: "you successfully added upcoming card",
            icon: "success",
          });
         }
       })
     };
    return (
      <div className="font-font1 bg-gray-100 p-10">
        <h1 className="text-3xl text-center my-5">Add Meal</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div className="flex gap-5">
            <input
              placeholder="Meal Title"
              type="text"
              {...register("title", { required: true })}
              name="title"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
            <select
              defaultValue="default"
              name="category"
              {...register("category", { required: true })}
              className="select border rounded-none py-3 border-[#02c39a] w-1/2"
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>
          <div className="flex gap-10 justify-between">
            <input
              {...register("image", { required: true })}
              type="file"
              name="image"
              className=" py-3 w-1/2 border bg-[#02c39a] text-white max-w-xs"
            />
            <input
              placeholder="Ingredients"
              type="text"
              {...register("ingredients", { required: true })}
              name="ingredients"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
          </div>
          <div className="flex gap-10">
            <input
              placeholder="Description"
              type="text"
              {...register("description", { required: true })}
              name="description"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
            <input
              placeholder="Price"
              type="number"
              name="price"
              {...register("price", { required: true })}
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
          </div>
          <div className="flex gap-10">
            <input
              placeholder="Posting date"
              type="date"
              name="date"
              {...register("date", { required: true })}
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
            <input
              placeholder="Rating"
              type="number"
              name="rating"
              {...register("rating", { required: true })}
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
          </div>
          <div className="flex gap-10">
            <input
              placeholder="Likes"
              type="number"
              defaultValue={0}
              {...register("likes", { required: true })}
              name="likes"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
            <input
              placeholder="Review"
              type="number"
              defaultValue={0}
              {...register("review", { required: true })}
              name="review"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
          </div>
          <div className="flex gap-10">
            <input
              placeholder="Admin Name"
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
            <input
              placeholder="Admin Email"
              type="email"
              {...register("email", { required: true })}
              name="email"
              className="py-3 pl-4 border w-1/2 border-[#02c39a]"
            />
          </div>
          <div className="flex gap-10">
            <button
              className="text-white bg-[#02c39a] px-3 py-2 font-semibold block w-1/2 mx-auto  my-5 rounded-lg cursor-pointer"
              type="submit"
            >
              Add Meal
            </button>
          </div>
        </form>
          <button
            onClick={handleUpcomingMeal}
            className="text-white bg-[#02c39a] px-3 py-2 font-semibold block mx-auto w-1/2 my-5 rounded-lg cursor-pointer"
          >
            Upcoming Meal
          </button>
      </div>
    );
};

export default AddMeal;