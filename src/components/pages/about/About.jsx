// import React from 'react';
import about1 from "../../../assets/img/about/wallpaperflare.com_wallpaper (10).jpg";
import about2 from "../../../assets/img/about/wallpaperflare.com_wallpaper (9).jpg";
import about3 from "../../../assets/img/about/wallpaperflare.com_wallpaper (12).jpg";
import about4 from "../../../assets/img/about/wallpaperflare.com_wallpaper (11).jpg";

const About = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#605d53] to-[#5d5640] h-60 flex justify-center items-center">
        <h1 className="text-6xl font-semibold text-white "> About Us </h1>
      </div>
      <div>
        <div className="  flex items-center mx-10 my-20 flex-col lg:flex-row">
          <div className="relative hidden lg:flex  w-full ">
            <img src={about1} className=" max-w-xl rounded-lg shadow-2xl" />
            <img
              src={about2}
              className="absolute border-8 border-yellow-400  left-1/4 -bottom-1/4 max-w-xs rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className=" mt-20 lg:mt-10 lg:space-y-3 space-y-9 ml-8 left-1/2 top-1/3 text-white ">
            <h1 className="text-5xl  font-normal">
              Best For Your Ski Destination
            </h1>
            <h3 className="py-6 text-4xl font-extralight ">
              For guests seeking a more luxurious experience, we offer premium
              rooms with additional amenities such as larger beds, seating
              areas, and stunning views of the city.
            </h3>
          </div>
        </div>

        <div className=" gap-5  flex items-center mx-10 mt-10 mb-20 flex-col lg:flex-row-reverse">
          <div className="relative hidden lg:flex  w-full ">
            <img src={about4} className=" max-w-xl rounded-lg shadow-2xl" />
            <img
              src={about3}
              className="absolute border-8 border-yellow-400  left-1/4 -bottom-1/4 max-w-xs rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div className=" mt-20 lg:mt-10 lg:space-y-3 space-y-9 ml-8 left-1/2 top-1/3 text-white ">
            <h1 className="text-5xl  text-yellow-400  font-normal">
              Our hotel are located in the prime area of Zermatt
            </h1>
            <h3 className="py-6 text-4xl text-justify font-extralight ">
              When it comes to choosing a hotel, there are several factors that
              guests look for to ensure their stay is comfortable and enjoyable.
              Cleanliness is one of the most important factors, as guests want
              to feel confident that their rooms and the overall property are
              well-maintained and hygienic. At our hotel, we take great pride in
              ensuring that all areas of the property are regularly cleaned and
              sanitized, so that our guests can feel secure and comfortable
              during their stay.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
