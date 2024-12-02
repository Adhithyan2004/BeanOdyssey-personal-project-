import React from "react";
import Mocha from "../assets/mocha-c&p.png";

const HisHero = () => {
  return (
    <div className="HisHero flex py-[20px] gap-[0vw] justify-center items-center text-secondary">
      <div className="HisHeroTxt">
        <h1 className="HisHead text-[8vw] w-[42vw] leading-[15vh]">Journey Beyond the Bean.</h1>
        <p className="HisPara text-[2vw] w-[35vw] leading-[6vh]">
          Embark on a Journey of Flavors–From Farm to Cup, Only the Finest Beans
          Make the Voyage
        </p>
      </div>
      <img className="HisImg h-[70vh]" src={Mocha} alt="Mocha cup and pouch" />
    </div>
  );
};

export default HisHero;
