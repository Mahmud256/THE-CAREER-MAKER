import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../home/Home";
import SignUpForm from "../page/Register/SignUpForm";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            
            },
            {
                path: '/signup',
                element: <SignUpForm></SignUpForm>
            },
        ]
    },
   
]);
export default router;