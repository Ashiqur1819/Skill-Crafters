import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Error Page</h2>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/services",
            element: <Services></Services>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]
  },
]);

export default router;