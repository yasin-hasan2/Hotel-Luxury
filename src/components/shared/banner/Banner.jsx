// import React from 'react';

import banner1 from "../../../assets/img/banner/banner1.jpg";
import banner2 from "../../../assets/img/banner/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] py-10 min-h-screen bg-base-200">
        <div className=" flex items-center mx-10 flex-col lg:flex-row">
          <div className="relative hidden lg:flex  w-full ">
            <img src={banner1} className=" max-w-xl rounded-lg shadow-2xl" />
            <img
              src={banner2}
              className="absolute left-1/4 -bottom-1/4 max-w-xs rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:absolute mt-20 lg:mt-10 lg:space-y-3 space-y-9 ml-8 left-1/2 top-1/3 text-white ">
            <h1 className="text-5xl  font-normal">Welcome to Hotel Luxury</h1>
            <h3 className="py-6 text-4xl font-extralight ">
              5 stars boutique hotel
            </h3>
            <button className="btn btn-outline rounded-sm hover:btn-warning text-yellow-400">
              {" "}
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
