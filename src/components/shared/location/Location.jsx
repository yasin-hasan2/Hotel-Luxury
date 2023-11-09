// import React from 'react';

import GoogleMapReact from "google-map-react";
import { GoogleAPIKey } from "./GoogleAPIKey";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => (
  <div>
    {" "}
    <FaMapMarkerAlt className="text-xl text-red-600 font-bold"></FaMapMarkerAlt>{" "}
  </div>
);

const Location = () => {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 14,
  };

  return (
    <div className="my-10">
      <div className=" min-h-screen bg-base-200">
        <div className="pt-10">
          <h1 className="text-5xl font-light text-yellow-400 text-center">
            Our Location{" "}
          </h1>
          <div className="border w-80 mx-auto my-5 border-yellow-500 "></div>
        </div>
        <div className="flex items-center justify-around flex-col lg:flex-row-reverse">
          <div className="pt-16" style={{ height: "500px", width: "500px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GoogleAPIKey }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <div className="text-white my-10">
            <h1 className="text-5xl font-bold">Hotel Address</h1>
            <p className="py-6 text-2xl ">Zen Steckenstra ße 43340 Zermatt</p>
            <button className="btn rounded-sm btn-outline text-yellow-500 lg:hover:btn-warning">
              Google Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
