// import React from 'react';

import { useLoaderData } from "react-router-dom";
// import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LuBedDouble } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { BiArea } from "react-icons/bi";
import { PiTree } from "react-icons/pi";

// ==========
import { FiMonitor } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { TbAirConditioning } from "react-icons/tb";
import { BsSafe2 } from "react-icons/bs";
import { GiTheater } from "react-icons/gi";
// import { LiaSwimmerSolid } from "react-icons/lia";
import { FaSmokingBan } from "react-icons/fa";
import { BiSolidDryer } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";
// import { Rule } from "postcss";

import ReactStars from "react-rating-star-with-type";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import { Toast } from "react-toastify/dist/components";

const RoomDetail = () => {
  const roomDetail = useLoaderData();
  const [star, setStar] = useState(5);
  const { user } = useContext(AuthContext);

  const {
    _id,
    room_image,
    room_name,
    room_category,
    bed_name,
    room_price,
    room_offer,
    details_description,
    rating,
    max_guest,
    room_space,
    room_view,
    // hotel_rules,
  } = roomDetail;

  const onChange = () => {
    setStar(rating);
  };

  const handleBookingRoom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const dateIn = form.dateIn.value;
    const dateOut = form.dateOut.value;
    const email = form?.email?.value;
    const booking = {
      customerName: name,
      email,
      dateIn,
      dateOut,
      room_img: room_image,
      room_name: room_name,
      room_space: room_space,
      room_offer: room_offer,
      bed_name: bed_name,
      max_guest: max_guest,
      room_id: _id,
      price: room_price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Booking SuccessFull");
        }
      });
  };

  return (
    <div>
      <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] h-60 flex justify-center items-center">
        <h1 className="text-6xl font-semibold text-white ">{room_name}</h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 ">
        <div className="lg:w-[70%]">
          <img src={room_image} alt="" />
          <div className="flex border-b border-[#6b6767] pb-4 justify-between text-white my-10 ">
            <div className="space-y-4">
              <h1 className="text-5xl">
                {" "}
                {room_name}{" "}
                <span className="text-2xl text-[#a5a0a0]">
                  {" "}
                  {room_category}{" "}
                </span>
              </h1>

              <p className="text-2xl flex items-center gap-4 text-[#a5a0a0]">
                {" "}
                Room Rating :{" "}
                <span className="text-yellow-400 text-2xl">
                  {" "}
                  <ReactStars
                    onChange={onChange}
                    value={star}
                    edit={true}
                    activeColors={["#FFCE00"]}
                  />
                </span>{" "}
              </p>
              <p className="text-2xl text-[#a5a0a0]">Room Features</p>
            </div>
            <div>
              <p className="text-xl font-light  text-[#a7a0a0] ">
                {" "}
                {room_offer}{" "}
              </p>
              <h3 className="text-2xl font-normal  ">From ${room_price} </h3>
              <p className="text-xl font-light  text-[#a7a0a0] ">per night</p>
              {/* <Link to="/booking">
                <button className="btn btn-outline text-yellow-400 mt-5">
                  Booking
                </button>
              </Link> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 space-y-5 mt-10 mb-16">
            <div className="text-[#FFF] flex gap-5">
              <LuBedDouble className="text-5xl "></LuBedDouble>
              <div>
                <h1 className="text-2xl font-normal">Bed</h1>
                <p className="text-lg font-light  text-[#a7a0a0] ">
                  {" "}
                  {bed_name}{" "}
                </p>
              </div>
            </div>
            <div className="text-[#FFF] flex gap-5">
              <GoPeople className="text-5xl "></GoPeople>
              <div>
                <h1 className="text-2xl font-normal">Bed</h1>
                <p className="text-lg font-light  text-[#a7a0a0] ">
                  {" "}
                  {max_guest}{" "}
                </p>
              </div>
            </div>
            <div className="text-[#FFF] flex gap-5">
              <BiArea className="text-5xl "></BiArea>
              <div>
                <h1 className="text-2xl font-normal">Bed</h1>
                <p className="text-lg font-light  text-[#a7a0a0] ">
                  {" "}
                  {room_space}{" "}
                </p>
              </div>
            </div>
            <div className="text-[#FFF] flex gap-5">
              <PiTree className="text-5xl "></PiTree>
              <div>
                <h1 className="text-2xl font-normal">Bed</h1>
                <p className="text-lg font-light  text-[#a7a0a0] ">
                  {" "}
                  {room_view}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" border-b border-[#6b6767] pb-6 space-y-5 text-lg font-medium text-[#a7a0a0]">
            <p> {details_description} </p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
            <p>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen. She packed her seven
              versalia, put her initial into the belt and made herself on the
              way. When she reached the first hills of the Italic Mountains, she
              had a last view back on the skyline of her hometown
            </p>
          </div>
          <div className="mt-10 border-b border-[#6b6767]">
            <h1 className="text-3xl font-normal text-white">
              {" "}
              Room Amenities{" "}
            </h1>
            <div className="py-10 grid grid-cols-3 gap-5 ">
              <div className="  border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <FiMonitor className="text-4xl "></FiMonitor>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">TV</h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <AiOutlineWifi className="text-4xl "></AiOutlineWifi>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">
                  Free WiFi
                </h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <BsSafe2 className="text-4xl "></BsSafe2>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">Safe</h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <FaSmokingBan className="text-4xl "></FaSmokingBan>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">
                  {" "}
                  none Smoke{" "}
                </h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <TbAirConditioning className="text-4xl "></TbAirConditioning>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">
                  Air Conditioning
                </h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <GiTheater className="text-4xl "></GiTheater>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">Heater</h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <BsTelephoneForward className="text-4xl "></BsTelephoneForward>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">Phone</h1>
              </div>
              <div className="border border-[#6b6767] hover:border-none hover:shadow-lg hover:shadow-[#787474] rounded-lg p-4 text-[#FFF] flex gap-5">
                <BiSolidDryer className="text-4xl "></BiSolidDryer>
                <h1 className="text-2xl text-[#a7a0a0]  font-normal">
                  Hair Dryer
                </h1>
              </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="text-3xl font-normal text-white"> Hotel Rules</h1>
            <div>
              <ul className="list-disc ">
                <li className="ml-5">Smoking not allowed</li>
                <li className="ml-5">Pets not allowed</li>
                <li className="ml-5">
                  Swimming pool closed from 8.00pm - 6.00am
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" lg:w-[25%]  ">
          <form onSubmit={handleBookingRoom} className="space-y-5 card-body  ">
            <h1 className="text-3xl mt-5 mb-10  text-white ">
              {" "}
              Book Your Room
            </h1>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">
                Your Name :
              </h4>
              <input
                className="bg-[#1D232A] border p-3 rounded-lg text-yellow-400"
                type="text"
                name="name"
                placeholder=" Your Name"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">
                Your Email :
              </h4>
              <input
                className="bg-[#1D232A] border p-3 rounded-lg text-yellow-400"
                type="email"
                name="email"
                placeholder=" Your Email"
                defaultValue={user?.email}
                required
              />
            </div>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">
                Check In :
              </h4>
              <input type="date" name="dateIn" required />
            </div>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">
                Check Out :
              </h4>
              <input type="date" name="dateOut" required />
            </div>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">Room :</h4>
              <input
                className="bg-[#1D232A] text-yellow-400"
                type="number"
                name="room"
                defaultValue={0}
              />
            </div>
            <div>
              <h4 className="text-left text-2xl text-[#a7a0a0] mb-2">
                Guests :
              </h4>
              <div className="flex gap-2">
                <p>
                  ADULTS{" "}
                  <input
                    className="bg-[#1D232A] text-yellow-400  "
                    type="number"
                    name="adult"
                    defaultValue={0}
                  />{" "}
                </p>
                <p>
                  {" "}
                  CHILDREN{" "}
                  <input
                    className="bg-[#1D232A] text-yellow-400"
                    type="number"
                    name="children"
                    defaultValue={0}
                  />{" "}
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-2xl font-semibold ">
                price : <span className="text-yellow-400"> ${room_price} </span>{" "}
              </h5>
            </div>
            <button className="btn w-full btn-outline text-yellow-400 hover:btn-warning">
              Book Now
            </button>
          </form>
          <div className="border border-[#6b6767] "></div>
          <div className="space-y-5">
            <h1 className="text-3xl mt-5 mb-10  text-white "> Enquiry</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Full Name <sup>*</sup>{" "}
                  </span>
                </label>
                <input
                  type="text "
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email Address <sup>*</sup>{" "}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Enquiry</span>
                </label>
                <area
                  type="text"
                  placeholder="Enquiry"
                  className="input input-bordered"
                  required
                />
              </div>
              <button className="btn w-full btn-outline text-yellow-400 hover:btn-warning">
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RoomDetail;
