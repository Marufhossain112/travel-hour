import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    
    ],
  },
  {
    path: "/services",
    element: <Services></Services>,
    loader: () => fetch("http://localhost:5000/services"),
  },
]);
