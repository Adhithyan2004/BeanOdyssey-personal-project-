import React from "react";
import FooterImg from "../assets/footerimg.png";

const Footer = () => {
  return (
    <footer>
      <div className="w-full   text-secondary">
        <div className="TopSection pt-[5%] w-full flex  justify-center gap-[55vw] ">
          <div className="Left flex flex-col">
            <span className="text-[32px] ">Beanodyssey</span>
            <span className="leading-tight">
              ©2024 TamrielAGI, <br />
              All rights reserved
            </span>
          </div>
          <div className="Right text-[18px] gap-[14%] flex font-medium">
            <div className="FT1 flex text-[20px] flex-col">
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                Shop
              </span>
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                Subscribe
              </span>
              <span className="w-fit hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                cart
              </span>
              <span className="w-[110px] hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                sign in
              </span>
            </div>
            <div className="FT2 flex text-[20px] flex-col">
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                About
              </span>
              <span className="w-[110px] hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                contact
              </span>
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                privacy policy
              </span>
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                shipping policy
              </span>
            </div>
            <div className="FT3 flex text-[20px] flex-col">
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                instagram
              </span>
              <span className="w-[110px] hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                facebook
              </span>
              <span className="hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                twitter
              </span>
            </div>
          </div>
        </div>
        <img className="pt-[8%] h-[50vh] mx-auto" src={FooterImg} alt="bean odyssey alt logo"/>
      </div>
    </footer>
  );
};

export default Footer;
