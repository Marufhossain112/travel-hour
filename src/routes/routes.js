import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main/Main";
import Services from "../Pages/Services/Services";

import Headers from "../Pages/Header/Headers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Headers></Headers>,
    children:[
      {
        path:'/',
        element:<Headers></Headers>
      },
    ]
  },
  {
    path: "/services",
    element: <Services></Services>,
    loader: () => fetch("http://localhost:5000/services"),
  },
]);
