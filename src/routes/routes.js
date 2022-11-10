import { createBrowserRouter } from "react-router-dom";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Main from "../layouts/Main/Main";
import Banner from "../Pages/Banner/Banner";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Reviews from "../Pages/Reviews/Reviews";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/reviews"),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addservice"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
