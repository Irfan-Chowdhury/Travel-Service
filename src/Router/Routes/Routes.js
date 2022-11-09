import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import Home from "../../Pages/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceCard/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
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
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>, //Private
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/add-service',
                element:<AddService></AddService>
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

