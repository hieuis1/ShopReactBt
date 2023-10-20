import React from "react";
import Carousel from "../../components/carousel/Carousel";
import About from "../../components/about/About";
import See from "../../components/see/See";
import Branch from "../../components/branch/Branch";
import Comment from "../../components/comment/Comment";
import Better from "../../components/better/Better";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Branch></Branch>
      <About></About>
      <See></See>
      <Comment></Comment>
      <Better></Better>
    </div>
  );
};

export default Home;
