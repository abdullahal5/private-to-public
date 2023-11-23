import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/Meals";
import UpcomingMeals from "../Pages/UpcomingMeals/UpcomingMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/meals',
            element: <Meals></Meals>
        },
        {
            path: '/upcomingmeals',
            element: <UpcomingMeals></UpcomingMeals>
        }
    ]
  },
]);

export default router;
