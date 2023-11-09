// import React from 'react';

import { useLoaderData } from "react-router-dom";
import RoomCard from "../../shared/roomsCard/RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();
  console.log(rooms);

  return (
    <div>
      <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] h-60 flex justify-center items-center">
        <h1 className="text-5xl font-normal text-white ">
          Our Luxurious Rooms
        </h1>
      </div>
      <div className=" my-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
