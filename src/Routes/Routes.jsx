import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Services from "../Pages/Services/Services";
import ErrorElement from "../ErrorElement/ErrorElement";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import ServiceDetailsCard from "../Pages/Services/AllServiceCard/ServiceDetailsCard/ServiceDetailsCard";
import MyAddedService from "../Pages/MyAddedService/MyAddedService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import UpdateService from "../Pages/MyAddedService/UpdateService/UpdateService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("https://home-services-exchange-server.vercel.app/services")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/update/:id',
                element:<PrivateRoute> <UpdateService></UpdateService></PrivateRoute>,
                loader: ({ params }) => fetch(`https://home-services-exchange-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/dashboard/add-services',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/dashboard/my-schedules',
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetailsCard></ServiceDetailsCard></PrivateRoute>,
                loader: ({ params }) => fetch(`https://home-services-exchange-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/dashboard/myAddedServices',
                element: <PrivateRoute><MyAddedService></MyAddedService></PrivateRoute>
            },
        ]
    },
]);

export default router;