import React from "react";
import Navbar from "../components/Navbar";
import HisHero from "../components/HisHero";
import Cards from "../components/Cards";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const History = () => {
  return (
    <div>
      <Navbar />
      <HisHero />
      <Cards/>
      <CTA/>
      <Footer/>
    </div>
  );
};
export default History;
