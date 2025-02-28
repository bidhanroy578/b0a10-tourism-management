import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/Home";
import AllSpots from "./pages/AllSpots";
import AddSpot from "./pages/AddSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/all-spots',
                element: <AllSpots />,
                loader: ()=> fetch(`http://localhost:3000/spots`)
            },
            {
                path: '/add-spots' , 
                element: <AddSpot />,
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