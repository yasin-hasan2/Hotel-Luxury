// import React from 'react';

import feature1 from "../../../assets/img/featured/featured1.jpg";
import feature6 from "../../../assets/img/featured/featured6.jpg";

import parking from "../../../assets/img/Icon/Parking.png";
import bank from "../../../assets/img/Icon/bank.png";
import BreakFast from "../../../assets/img/Icon/BrackFast.png";
import Gym from "../../../assets/img/Icon/GYm.png";
import WiFi from "../../../assets/img/Icon/WiFI.png";
import Work from "../../../assets/img/Icon/Work.png";

const Featured = () => {
  return (
    <div className="my-20">
      <div>
        <div>
          <div>
            <h1 className="text-5xl font-light text-yellow-400 text-center">
              Visit Our Famous Facilities{" "}
            </h1>
            <div className="border w-80 mx-auto my-5 border-yellow-500 "></div>
            <p className="text-center text-xl text-[#ffffffc6] font-normal">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings <br /> of spring which I enjoy with my whole
              heart.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className=" py-20 px-10 flex gap-10 flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-10 text-white">
                <h1 className="text-5xl">
                  The Book library , An <br /> iconic computer room
                </h1>
                <p className="text-xl font-light">
                  The lai area curated library the Penthouse is a classic Books
                  at it’s finest.Surrounding the computer, a carefully curated
                  library spans the walls, embracing the timeless allure of
                  printed knowledge.
                </p>
              </div>
              <img className="w-1/2" src={feature1} alt="" />
            </div>
          </div>
          <div>
            <div className=" py-20 px-10 flex gap-10 flex-col lg:flex-row-reverse items-center">
              <div className="flex-1 space-y-10 text-white">
                <h1 className="text-4xl">
                  3 Michelin Stars <br /> Restaurant, Vézère
                </h1>
                <p className="text-xl font-light">
                  A brasserie inspired by French cuisine, a fresh and modern
                  place to visit and enjoy dishes always handmade of the best
                  ingredients of the season.
                </p>
              </div>
              <img className="w-2/3" src={feature6} alt="" />
            </div>
          </div>
          <div className=" mt-10 w-1/2 gap-5  grid grid-cols-4 mx-auto">
            <div className="flex flex-col items-center">
              <img className="w-40" src={parking} alt="" />
              <p className="text-white text-lg font-medium">Parking</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40" src={Work} alt="" />
              <p className="text-white text-lg font-medium">Work</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40" src={WiFi} alt="" />
              <p className="text-white text-lg font-medium"> WIFI</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-40" src={BreakFast} alt="" />
              <p className="text-white text-lg font-medium">BreakFast</p>
            </div>
            <div></div>
            <div className="  flex flex-col items-center">
              <img className="w-40" src={bank} alt="" />
              <p className="text-white text-lg font-medium">Bank</p>
            </div>
            <div className=" flex flex-col items-center">
              <img className="w-40" src={Gym} alt="" />
              <p className="text-white text-lg font-medium">Gym</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
