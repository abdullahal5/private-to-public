import { Link, useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/useAxiosPublic/useAxiosPublic";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const badge = 'https://i.ibb.co/6R5QCd7/badge.png'
   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic()
  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then((result) => {
      console.log(result.user)
      updateUserProfile(data.name, data.photo)
      .then(() =>{
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          console.log(res.data)
        })
        Swal.fire({
          title: "congratulations!",
          text: "You got a bronze badge!",
          imageUrl: badge,
          icon: "success",
        });
      })
      Swal.fire({
        title: "Good job!",
        text: "You successfully register!",
        icon: "success",
      });
      navigate('/')
    })
    .catch(err =>{
      console.log(err)
    })
  }
    return (
      <div>
        <Nav></Nav>
        <div className="flex items-center h-[85vh]">
          <div className="flex-1">
            <h1 className="text-3xl text-center font-font1 font-semibold">
              Sign Up
            </h1>
            <p className="text-center italic">
              Embark on a personalized journey with us. Join a community
              tailored to your preferences, unlocking exclusive benefits and
              experiences. Sign up now and start your unique adventure
            </p>
            <hr className="w-96 mx-auto border-[#02c39a] my-5" />
            <p className="italic"></p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="Username"
                  {...register("name", { required: true })}
                  name="name"
                  className="border-[#02c39a] border  rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="text"
                />
              </div>
              <div className="text-center">
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="photo URL"
                  {...register("photo")}
                  name="photo"
                  className=" rounded-[55px] border-[#02c39a] border bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="text"
                />
              </div>
              <div className="text-center">
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="your email"
                  name="email"
                  {...register("email")}
                  className=" border-[#02c39a] border rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="email"
                />
              </div>
              <div className="text-center">
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="your password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  className="border-[#02c39a] border rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="password"
                />
              </div>
              <div className="text-center">
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="text-center pb-5">
                <input
                  className="w-1/6 bg-[#02c39a] font-semibold font-font1 p-3 text-white rounded-[50px] cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center ">
              Already have an account?
              <Link to="/login" className="text-[#02c39a] underline">
                Sign In
              </Link>
            </p>
          </div>
          <div className="flex-1">
            <img
              className=""
              src="https://i.ibb.co/v4cMhMr/undraw-Mobile-login-re-9ntv-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Registration;