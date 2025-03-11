import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/Home";
import AllSpots from "./pages/AllSpots";
import AddSpot from "./pages/AddSpot";
import MyList from "./pages/MyList";
import Details from "./pages/Details";
import EditSpot from "./pages/EditSpot";
import RouterPrivate from "./RouterPrivate";
import Error from "./pages/Error";
import SpotsInACountry from "./pages/SpotsInACountry";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/all-spots',
                element: <AllSpots />,
                loader: () => fetch(`https://travel-nest-sigma.vercel.app/spots`)
            },
            {
                path: '/spots/:country',
                element: <SpotsInACountry />,
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://travel-nest-sigma.vercel.app/spot/${params.id}`)
            },
            {
                path: '/add-spots',
                element: <RouterPrivate><AddSpot /></RouterPrivate>,
            },
            {
                path: 'edit-spot/:id',
                element: <RouterPrivate><EditSpot /></RouterPrivate>,
                loader: ({ params }) => fetch(`https://travel-nest-sigma.vercel.app/spot/${params.id}`)
            },
            {
                path: '/my-list',
                element: <RouterPrivate><MyList /></RouterPrivate>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            }
        ],
    },
]);
export default router;