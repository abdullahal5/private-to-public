import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/Meals";
import UpcomingMeals from "../Pages/UpcomingMeals/UpcomingMeals";
import MealsDetailsPage from "../Pages/MealsDetailsPage/MealsDetailsPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import RequestedMeals from "../Pages/Dashboard/RequestedMeals";
import MyReview from "../Pages/Dashboard/MyReview";
import Checkout from "../Pages/Checkout/Checkout";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile";
import ManageUser from "../Pages/AdminDashboard/ManageUser";
import AddMeal from "../Pages/AdminDashboard/AddMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/upcomingmeals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "/mealsdetailspage/:id",
        element: <MealsDetailsPage></MealsDetailsPage>,
      },
      {
        path: "/checkout/:packageName",
        element: <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "requestedMeals",
        element: <RequestedMeals></RequestedMeals>,
      },
      {
        path: "MyReview",
        element: <MyReview></MyReview>,
      },
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "manageUsers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "addMeal",
        element: <AddMeal></AddMeal>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);

export default router;
