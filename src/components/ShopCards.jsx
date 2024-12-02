import React from "react";

const ShopCards = ({title,desc,img}) => {
  return (
    <div className="w-fit">
      {/* product image */}
      <img className="w-[40vw]" src={img} alt="image of the products" />
      {/* Product description and price */}
      <div className="ParaCntr flex flex-col mt-4 gap-5">
        <h1 className="text-4xl">
          {title}
          <br />
          $12.93
        </h1>
        <p className="w-[40vw] text-xl">
          {desc}
        </p>
        <button className="bg-secondary text-2xl rounded-md w-fit  text-primary p-3 cursor-pointer hover:bg-orange-400 hover:scale-105 transition-all duration-300 ease-in-out">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopCards;
