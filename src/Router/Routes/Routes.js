import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Services/AllServices";
import SingleServices from "../../Pages/SingleService/SingleServices";
import Unavailable from "../../Pages/Unavailable/Unavailable";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('service.json'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('service.json'),
                element: <AllServices></AllServices>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service',
                element: <SingleServices></SingleServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Unavailable></Unavailable>
            }
        ]
    }
]);

export default router;