import { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import { FaUser, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user ={
      email, password
    }
    console.log(user)
    signIn(email, password)
    .then(res =>{
      const user = res.user;
       Swal.fire({
         title: "Good Job!",
         text: "you successfully logged in",
         icon: "success",
       });
    })
  }
    return (
      <div>
        <Nav></Nav>
        <div className="flex items-center justify-between h-[100vh]">
          <div className="bg-[#02c39a] h-full items-center flex justify-center w-[60%] rounded-br-[70%]">
            <div className="text-white">
              <h1 className="text-4xl font-font1 font-semibold">
                Join our community
              </h1>
              <p className="italic text-lg">
                Step into a world of personalized access. <br /> Your gateway to
                exclusive experiences, where your <br /> security meets seamless
                convenience. Join us and <br /> unlock a tailored journey at
                your fingertips.
              </p>
            </div>
          </div>
          <div className="w-[40%] font-font1 text-center ">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <form onSubmit={handleLogin}>
              <div className="relative flex items-center  mx-auto my-5">
                <input
                  placeholder="Email"
                  name="email"
                  className="border-none rounded-[55px] bg-[#f0f0f0] mx-auto pl-[60px] w-2/3 py-3"
                  type="text"
                />
                <FaUser color="gray" className="absolute ml-28" />
              </div>
              <div className="relative flex items-center mx-auto ">
                <input
                  placeholder="Password"
                  name="password"
                  className="border-none rounded-[55px] bg-[#f0f0f0]  mx-auto pl-[60px] w-2/3 py-3"
                  type="password"
                />
                <FaLock color="gray" className="absolute ml-28" />
              </div>
              <div className="block my-5 text-center">
                <input
                  className="w-1/5 bg-[#02c39a] py-3 cursor-pointer rounded-[50px] text-white"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <div className="divider">OR</div>
              <div>
                <button
                  className="w-3/5 bg-white text-[#02c39a] py-3 rounded-[50px] border border-[#02c39a] "
                  type="submit"
                  value="Sign In"
                >
                  <FcGoogle className="inline mr-3" fontSize={"1.5rem"} />
                  Google Sign In
                </button>
              </div>
            </form>
            <p className="py-5">
              Don't have any account?
              <Link
                to="/registration"
                className="text-[#02c39a] underline ml-3"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;