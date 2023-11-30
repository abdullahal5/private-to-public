import { Link, NavLink } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { LuUserCircle2 } from "react-icons/lu";
import Swal from "sweetalert2";

const Nav = () => {
  const {user, logOut} = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen)
  const handleLogOut =() =>{
    logOut()
    .then(res => {
      console.log('logged Out', res)
       Swal.fire({
         title: "Good Job!",
         text: "you successfully logged out",
         icon: "success",
       });
    })
  }
    const links = (
      <>
        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#02c39a] font-font1  underline"
                : ""
            }
          >
            <span className="text-lg">Home</span>
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#02c39a] font-font1 underline"
                : ""
            }
          >
            <span className="text-lg">Meals</span>
          </NavLink>
          <NavLink
            to="/upcomingmeals"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#02c39a] font-font1 underline"
                : ""
            }
          >
            <span className="text-lg">Upcoming Meals</span>
          </NavLink>
        </div>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center">
                <img
                  className="w-16"
                  src="https://i.ibb.co/LrS88wv/home-icon-house-symbol-simple-vector-design-logo-231786-5048-removebg-preview-1.png"
                  alt=""
                />
                <p className="font-font1 text-xl font-semibold">
                  Hostel<span className="text-[#02c39a]">Heaven</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <img
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 cursor-pointer h-14 rounded-[50%] mr-5"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <LuUserCircle2 className="mr-5" fontSize={"30px"} />
            )}
            <IoNotifications
              className="cursor-pointer "
              fontSize={"1.5rem"}
              color="028090"
            />
            <Link to="/login">
              <button className="bg-[#02c39a] px-5 py-2 rounded-lg text-white font-semibold ml-9 items-center ">
                Join Us
                <span className="">
                  <BiLogInCircle fontSize={"1.5rem"} className="inline ml-1" />
                </span>
              </button>
            </Link>

            {isOpen && (
              <div className="absolute rounded-xl shadow-md top-20 mr-44">
                <div className="flex flex-col cursor-pointer">
                  {user ? (
                    <p className="px-4 py-3 bg-[#fff] rounded-t-xl hover:bg-neutral-100  font-semibold">
                      {user?.displayName}
                    </p>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="px-4 py-3 bg-[#fff] hover:bg-neutral-100  font-semibold"
                    >
                      Log Out
                    </button>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <Link
                      to="/dashboard"
                      className="px-4 py-3 bg-[#fff] rounded-b-xl  hover:bg-neutral-100 font-semibold"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Nav;