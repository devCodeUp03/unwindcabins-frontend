import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/home/HeroSection";
import DiscoverCabins from "../components/home/discoverCabin/DiscoverCabins";
import InspirationCabins from "../components/home/inspirationCabin/InspirationCabins";
import PurpleWoman from "../components/home/PurpleWoman";
import CabinGateway from "../components/home/CabinGateway";
import FindCabin from "../components/home/FindCabin";
import Faq from "../components/home/Faq";
import FindGateway from "../components/home/FindGateway";
import Footer from "../components/common/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  return (
    <>
 

      {/* <Header /> */}
      <HeroSection />
      <DiscoverCabins />
      <InspirationCabins />
      <PurpleWoman />
      <CabinGateway />
      <FindCabin />
      <Faq />
      <FindGateway />
      {/* <Footer />      */}
    </>
  );
};

export default Home;
