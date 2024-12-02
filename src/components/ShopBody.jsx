import React from "react";
import ShopCards from "./ShopCards";
import I1 from "../assets/mcard.png";
import I2 from "../assets/ccard.png";
import I3 from "../assets/vcard.png";
import I4 from "../assets/scard.png";

const ShopBody = () => {
  return (
    <div className="ShpCrd">
        <h1 className="text-center py-8 text-7xl">Discover the Essence of Every Bean</h1>
        {/* product container */}
      <div className="flex flex-wrap justify-center mb-28 gap-14">
        <ShopCards
          img={I1}
          title="Midnight mocha"
          desc="Bold as the Night, Sweet as the Moon — this flavor captures the allure
          of a starry evening with its deep, robust undertones and a whisper of
          velvety sweetness."
        />
        <ShopCards
          img={I2}
          title="citrus spark"
          desc="A Bright Burst in Every Sip — this flavor radiates vibrancy with its zesty citrus notes and a lively, refreshing finish. Perfect for those who crave an uplifting coffee experience."
        />
        <ShopCards
          img={I3}
          title="velvet vanilla"
          desc="Smooth, Creamy Comfort in a Cup — indulge in the velvety richness and gentle sweetness that wraps you in warmth with every sip. This flavor is your perfect companion for cozy mornings or tranquil evenings"
        />
        <ShopCards
          img={I4}
          title="spiced maple drift"
          desc="Spiced Maple Drift — a symphony of warm spices and the golden sweetness of maple, evoking the cozy charm of autumn in every sip. Let this enchanting blend transport you to crisp mornings and firelit evenings."
        />
      </div>
    </div>
  );
};

export default ShopBody;
