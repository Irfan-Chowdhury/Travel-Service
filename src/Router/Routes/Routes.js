import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceCard/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<AllService></AllService>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>, //Private
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/add-service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute> //Private
            },
            {
                path:'/blog',
                element:<Blog></Blog> 
            },
            {
                path:'/my-reviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute> //Private
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
]);

export default router;

