import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { VscPreview } from "react-icons/vsc";

const Dashboard = () => {
  const isAdmin = true
    return (
      <div className="flex gap-10">
        <div className="w-64 min-h-screen bg-gray-200">
          <ul className="">
            <h1 className="text-3xl text-[#02c39a] pt-5 pb-10 text-center">
              Dashboard
            </h1>
            {isAdmin ? (
              <div>
                <li>
                  <NavLink to="/dashboard/adminProfile">
                    <span className="flex items-center py-3 border-b border-gray-300  hover:bg-neutral-50 pl-3 gap-3">
                      <CgProfile
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">Admin Profile</h1>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <span className="flex items-center py-3 border-b border-gray-300  hover:bg-neutral-50 pl-3 gap-3">
                      <CgProfile
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">Manage Users</h1>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addMeal">
                    <span className="flex items-center py-3 border-b border-gray-300  hover:bg-neutral-50 pl-3 gap-3">
                      <CgProfile
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">Add Meal</h1>
                    </span>
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <NavLink to="/dashboard/myProfile">
                    <span className="flex items-center py-3 border-b border-gray-300  hover:bg-neutral-50 pl-3 gap-3">
                      <CgProfile
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">My Profile</h1>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/requestedMeals">
                    <span className="flex items-center border-b border-gray-300 gap-3 py-3 hover:bg-neutral-100 pl-3">
                      <GiForkKnifeSpoon
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">Requested Meals</h1>
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myReview">
                    <span className="flex items-center border-gray-300 gap-3 py-3 border-b hover:bg-neutral-100 pl-3">
                      <VscPreview
                        color="#02c39a"
                        fontSize={"2rem"}
                        className="inline"
                      />
                      <h1 className="text-xl">My Review</h1>
                    </span>
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;