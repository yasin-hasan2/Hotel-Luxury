// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Error from "../components/error/Error";
import Rooms from "../components/pages/rooms/Rooms";
import LogIn from "../components/pages/account/login/LogIn";
import SignUp from "../components/pages/account/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: (
          <PrivateRoute>
            {" "}
            <Rooms></Rooms>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
