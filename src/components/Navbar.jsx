import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserOverlay from "./UserOverlay";

const Navbar = () => {
  const [isSignOpen, setSignOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleNavShop = () => {
    navigate("/shop");
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
        <span
          onClick={handleNavShop}
          className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Shop
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Subscribe
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Cart
        </span>
        <span
          onClick={() => setSignOpen(true)}
          className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Sign in
        </span>
        <span className="cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          <a href="https://my-port-fo-lio.framer.website/">about me</a>
        </span>
      </div>
      <UserOverlay isOpen={isSignOpen} onClose={() => setSignOpen(false)} />
    </div>
  );
};

export default Navbar;
