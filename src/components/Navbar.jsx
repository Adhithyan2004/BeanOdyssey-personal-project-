import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="NavContainer text-secondary px-[60px] py-[10px] flex justify-between items-center">
      <h1
        onClick={handleNavigate}
        className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out text-[36px]"
      >
        Bean Odyssey
      </h1>
      <div className="Menu  text-[24px] flex gap-[36px]">
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Shop
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Subscribe
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Cart
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Sign in
        </span>
        {/* <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out"></span> */}
      </div>
    </div>
  );
};

export default Navbar;
