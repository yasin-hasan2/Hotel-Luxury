// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const NavLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/">Booking </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="   navbar px-5 text-[#dad5d5]  bg-gradient-to-r from-[#605d53] to-[#5d5640]">
        <div className="navbar-start  ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLink}
            </ul>
          </div>
          <a className=" text-4xl    font-bold  text-[#d1ac3c] "> H T L </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold ">
            {NavLink}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-5 text-lg font-medium ">
            <li>
              {user ? (
                <button className="text-yellow-400" onClick={handleLogOut}>
                  Log Out
                </button>
              ) : (
                <Link to="/logIn">
                  {" "}
                  <button> Log In </button>{" "}
                </Link>
              )}
            </li>
            <div className="border-l "></div>
            <li>
              <Link to="/signUp"> Sign Up </Link>
            </li>
          </ul>
          <div className=" hidden md:flex ml-4">
            <Link className="btn btn-outline  hover:btn-warning text-[#FFFFFF] border-[#d1ac3c] ">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
