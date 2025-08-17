import React from "react";
import gym2 from "../../../public/images/gym2.png";

const KriyaStatement = () => {
  return (
    <div className="w-full  pb-[100px]">
      <div className="w-full h-[100vh] rounded-[24px] pt-[58px] pl-[100px] relative text-[#FFFFFF] mx-auto max-w-[1237px] max-h-[717px] bg-[#7C3AED]">
        <h2 className="font-['Francois_One']  text-2xl md:text-4xl leading-10 mb-6">
          Problem Statement
        </h2>

        {/* Description */}
        <p className="font-['Open_Sans'] text-base md:text-lg leading-6 tracking-[0.5px] max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Tellus elementum ultricies sed
          in risus ac egestas. Proin malesuada nibh vel habitant morbi semper
          cursus in lacus. Neque duis augue mauris aliquet sed mi lorem. Et
          vitae habitant viverra quis id scelerisque.
        </p>
        <img
          src={gym2.src}
          alt="Gym"
          className="absolute left-1/2 rounded-[24px]  transform -translate-x-1/2 top-[219px] h-[600px] max-w-[1040px]"
        />
      </div>
      <p className="font-open-sans  font-normal mt-[150px] ml-[250px] max-w-[774px]  text-[16px] leading-6 tracking-[0.5px] text-black">
        Lorem ipsum dolor sit amet consectetur. Tellus elementum ultricies sed
        in risus ac egestas. Proin malesuada nibh vel habitant morbi semper
        cursus in lacus. Neque duis augue mauris aliquet sed mi lorem. Et vitae
        habitant viverra quis id scelerisque.
      </p>
    </div>
  );
};

export default KriyaStatement;
