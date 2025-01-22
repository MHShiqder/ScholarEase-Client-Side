import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import AdminDashboard from "../Layout/AdminDashboard";
import UserDashboard from "../Layout/UserDashboard";
import AddScholarship from "../Pages/AddScholarship/AddScholarship";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../Pages/Payment/Payment";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserApplications from "../Pages/UserApplications/UserApplications";
import UserReviews from "../Pages/UserReviews/UserReviews";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllReview from "../Pages/AllReview/AllReview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/all-scholarship',
                element: <AllScholarship></AllScholarship>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><DetailsPage></DetailsPage></PrivateRoutes>,
            },
            {
                path: '/payment/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
            },
        ],
    },
    // user dashboard 
    {
        path: '/userDashboard',
        element: <UserDashboard></UserDashboard>,
        children:[
            {
                path:'user-profile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'user-applications',
                element:<UserApplications></UserApplications>
            },
            {
                path:'user-reviews',
                element:<UserReviews></UserReviews>
            },
        ]
    },
    // admin dashboard 
    {
        path: '/adminDashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: 'add-scholarship',
                element: <AddScholarship></AddScholarship>
            },
            {
                path:'user-profile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'all-users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'all-review',
                element:<AllReview></AllReview>
            },
        ]
    },
]);

export default router;