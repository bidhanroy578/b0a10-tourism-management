import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Home from "./pages/home/Home";

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