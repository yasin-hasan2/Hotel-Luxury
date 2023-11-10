// import React from 'react';

import { Link, useRouteError } from "react-router-dom";
import errorimg from "../../assets/img/404page/undraw_page_not_found_re_e9o6.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-[#FFFFFF] text-center space-y-5 mt-10 ">
      <h1 className="text-5xl text-center"> Opppppppps !!!!!!!!!!!!!! </h1>
      <p>there have nothing </p>
      <div className="w-1/2 mx-auto ">
        <p className=" text-2xl text-yellow-400 ">
          {" "}
          that is your error :
          <span className="text-red-600 ">
            {" "}
            {error.statusText || error.message}{" "}
          </span>
        </p>
        <img className="w-96 mx-auto my-10" src={errorimg} alt="" />
        <p>
          {error.status === 404 && (
            <div>
              <h3 className="text-2xl"> page not found</h3>
              <p> Go back in Home page </p>
              <Link to="/">
                <button className="btn btn-outline">Home</button>
              </Link>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default Error;
