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
                loader: () => fetch('https://service-review-server-murex.vercel.app/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>, //Private
                loader: ({params}) => fetch(`https://service-review-server-murex.vercel.app/services/${params.id}`)
            },
            {
                path:'/add-service',
                element:<AddService></AddService> //Private
            },
            {
                path:'/blog',
                element:<Blog></Blog> 
            },
            {
                path:'/my-reviews',
                element:<MyReviews></MyReviews> //Private
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

