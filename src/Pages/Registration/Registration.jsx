import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

const Registration = () => {
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
            <form>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="Username"
                  name="username"
                  className="border-[#02c39a] border  rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="text"
                />
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="photo URL"
                  name="photo"
                  className=" rounded-[55px] border-[#02c39a] border bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="text"
                />
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="your email"
                  name="email"
                  className=" border-[#02c39a] border rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="email"
                />
              </div>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="your password"
                  name="password"
                  className="border-[#02c39a] border rounded-[55px] bg-[#f0f0f0] mx-auto pl-[30px] w-2/3 py-3"
                  type="password"
                />
              </div>
              <div className="text-center pb-5">
                <input
                  className="w-1/6 bg-[#02c39a] font-semibold font-font1 p-3 text-white rounded-[50px]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center ">
              Already have an account?
              <Link to='/login' className="text-[#02c39a] underline">Sign In</Link>
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