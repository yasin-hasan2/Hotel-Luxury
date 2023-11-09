// import React from 'react';

import Banner from "../../shared/banner/Banner";
import Featured from "../../shared/featured/featured";
import Location from "../../shared/location/Location";
import NewsLetter from "../../shared/newsLetter/NewsLetter";
import ShortDescription from "../../shared/shortDescription/ShortDescription";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShortDescription></ShortDescription>
      <Featured></Featured>
      <Location></Location>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
