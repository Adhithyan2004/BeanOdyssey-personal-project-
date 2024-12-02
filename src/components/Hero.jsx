import React from "react";
import Citrus from "../assets/citrus-c&p.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/his");
  };

  return (
    <div className="text-secondary">
      <div className="HeroCont gap-0 flex flex-col w-fit mx-auto">
        <h1 className="HeroHead text-[10vw]">ecstasy at every sip</h1>
        <p className="HeroPara text-[2vw] w-[25vw] mt-[-4vh] leading-tight">
          Discover bold flavors, meticulously roasted to perfection.
        </p>
        <img
          className="HomeImg mx-auto h-[70vh] w-auto mt-[-190px]"
          src={Citrus}
          alt="Citrus-pouch-and-cup"
        />
        <button
          className="ShopNow text-[32px] mx-auto mt-[-3vh] w-[150px] hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={handleNavigate}
        >
          <u>Shop Now</u>
        </button>
      </div>
    </div>
  );
};

export default Hero;
