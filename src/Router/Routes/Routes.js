import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllServices from "../../Pages/Services/AllServices";
import SingleServices from "../../Pages/SingleService/SingleServices";
import Unavailable from "../../Pages/Unavailable/Unavailable";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import AddService from "../../Pages/AddService/AddService";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <AllServices></AllServices>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <SingleServices></SingleServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Unavailable></Unavailable>
            },
            {
                path: '/myreviews',
                element: <PrivateRouter>
                    <MyReviews></MyReviews>
                </PrivateRouter>
            },
            {
                path: '/addservice',
                element: <PrivateRouter>
                    <AddService></AddService>
                </PrivateRouter>
            }
        ]
    }
]);

export default router;