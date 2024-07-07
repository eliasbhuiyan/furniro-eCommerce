import React, { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Browse from "../components/Home/Browse";
import OurProduct from "../components/Home/OurProduct";
import Explore from "../components/Home/Explore";
import SetupPart from "../components/Home/SetupPart";
const Home = () => {
  return (
    <>
      <Banner />
      <Browse />
      <OurProduct />
      <Explore />
      <SetupPart />
    </>
  );
};

export default Home;
