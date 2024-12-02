import React from "react";
import Card1 from "../assets/card-1.png";
import Card2 from "../assets/card-2.png";
import Card3 from "../assets/card-3.png";

const Cards = () => {
  return (
    <div className="CrdCnt">
      <div className="CardCnt flex justify-center gap-[12vw] px-[8vw] py-[8vh] text-secondary">
        <img className="Card-1 h-[55vh]" src={Card1} alt="card-1" />
        <div className="flex flex-col justify-center ">
          <div className="CardHead-1 text-[4vw]">A Worldly Origin</div>
          <div className="CardPara-1 text-[1.5vw] w-[40vw]">
            At Bean Odyssey, every bean's story begins at the source. We
            carefully select farms worldwide, partnering with farmers who honor
            tradition and cultivate beans in harmony with the land—handpicked
            for purity, unique profiles, and exceptional character.
          </div>
        </div>
      </div>
      <div className="CardCnt flex justify-center gap-[12vw] px-[8vw] py-[8vh] text-secondary">
        <div className="flex flex-col justify-center ">
          <div className="CardHead-1 text-[4vw]">Crafted in Every Roast</div>
          <div className="CardPara-1 text-[1.5vw] w-[40vw]">
            Each batch is a blend of art and precision. Through small-batch
            roasting, we enhance each bean's peak profile, unlocking its unique
            flavor notes. Our roasters perfect every roast to ensure that each
            cup of Bean Odyssey coffee is an experience, not just a drink
          </div>
        </div>
        <img className="Card-2 h-[55vh]" src={Card2} alt="card-1" />
      </div>
      <div className="CardCnt flex justify-center gap-[12vw] px-[8vw] py-[8vh] text-secondary">
        <img className="Card-2 h-[55vh]" src={Card3} alt="card-1" />
        <div className="flex flex-col justify-center ">
          <div className="CardHead-1 text-[4vw]">From Farm to Cup</div>
          <div className="CardPara-1 text-[1.5vw] w-[40vw]">
            Bean Odyssey brings you coffee crafted with care, merging nature and
            artistry in every sip. Each cup reflects our dedication to quality
            and passion for the perfect brew—let every sip take you on a
            journey.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
