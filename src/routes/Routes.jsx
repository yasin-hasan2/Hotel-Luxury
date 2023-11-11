// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Error from "../components/error/Error";
import Rooms from "../components/pages/rooms/Rooms";
import LogIn from "../components/pages/account/login/LogIn";
import SignUp from "../components/pages/account/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import RoomDetail from "../components/shared/roomDetails/RoomDetail";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/rooms",
        element: (
          <PrivateRoute>
            {" "}
            <Rooms></Rooms>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("https://luxury-hotel-server.vercel.app/services"),
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "roomDetail/:id",
        element: (
          <PrivateRoute>
            <RoomDetail></RoomDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://luxury-hotel-server.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
