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
import AllMeal from "../Pages/AdminDashboard/AllMeal";
import ServeMeals from "../Pages/AdminDashboard/ServeMeals";
import AllReview from "../Pages/AdminDashboard/AllReview";
import UpcomingMeal from "../Pages/AdminDashboard/UpcomingMeal";
import PrivateRoute from "../Components/private/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "requestedMeals",
        element: (
          <PrivateRoute>
            <RequestedMeals></RequestedMeals>
          </PrivateRoute>
        ),
      },
      {
        path: "MyReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "adminProfile",
        element: (
          <PrivateRoute>
            <AdminProfile></AdminProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUser></ManageUser>
          </PrivateRoute>
        ),
      },
      {
        path: "addMeal",
        element: (
          <PrivateRoute>
            <AddMeal></AddMeal>
          </PrivateRoute>
        ),
      },
      {
        path: "upcomingmeals",
        element: (
          <PrivateRoute>
            <UpcomingMeal></UpcomingMeal>
          </PrivateRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <PrivateRoute>
            <AllMeal></AllMeal>
          </PrivateRoute>
        ),
      },
      {
        path: "serve",
        element: (
          <PrivateRoute>
            <ServeMeals></ServeMeals>
          </PrivateRoute>
        ),
      },
      {
        path: "allreview",
        element: (
          <PrivateRoute>
            <AllReview></AllReview>
          </PrivateRoute>
        ),
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
