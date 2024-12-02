import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop");
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center my-[20vh]">
      <h1 className="text-[6vw]">Discover the Art of Flavor</h1>
      <button
        onClick={handleNavigate}
        className="w-[10vw] h-[6vh] text-[1.7vw] text-primary rounded-md bg-secondary hover:bg-orange-400 transition-all duration-200 ease-in-out cursor-pointer"
      >
        Shop Now
      </button>
    </div>
  );
};

export default CTA;
