// import React from 'react';
import { BiBed } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { _id, bed_name, room_image, room_name, room_price, max_guest } = room;
  return (
    <div>
      <div className="card card-compact rounded-sm h-[32rem] bg-base-100 shadow-xl">
        <div className="relative">
          <img className="h-[18rem]" src={room_image} alt="Shoes" />
          <h4 className="absolute bottom-5 left-6 text-[#FFFFFF] text-2xl font-semibold bg-yellow-700 px-4 py-3">
            {" "}
            From ${room_price}/{" "}
            <small className="font-normal text-lg">night</small>
          </h4>
        </div>
        <div className=" text-white py-10 px-4 space-y-5">
          <h2 className="card-title text-3xl font-medium hover:text-yellow-400 ">
            {" "}
            {room_name}{" "}
          </h2>
          <div className="flex text-xl font-normal text-[#c7bfbfd7]  justify-around">
            <p className="flex items-center gap-3">
              {" "}
              <span className="text-3xl">
                <BiBed></BiBed>
              </span>
              {bed_name}{" "}
            </p>
            <p className="flex items-center gap-3">
              {" "}
              <span className="text-3xl">
                <BsPeople></BsPeople>
              </span>{" "}
              {max_guest} Guests{" "}
            </p>
          </div>
          <div className="card-actions ">
            {" "}
            {/*  */}
            <Link to={`/roomDetail/${_id}`}>
              <button className="btn   text-white ">
                BOOK now{" "}
                <IoIosArrowForward className="text-xl"></IoIosArrowForward>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
