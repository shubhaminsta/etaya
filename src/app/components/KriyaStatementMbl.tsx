import React from "react";
import Image from "next/image";
import gym2 from "../../../public/images/gym2.png";

const KriyaStatementMbl = () => {
  return (
    <div className="w-full pb-10 md:pb-[100px]">
      {/* Purple card */}
      <div
        className="relative mx-auto w-full max-w-[1237px] rounded-[16px] md:rounded-[24px] 
                   px-6 md:pl-[100px] pt-8 md:pt-[58px] 
                   text-white bg-[#7C3AED] min-h-[600px] md:min-h-[500px]"
      >
        {/* Heading */}
        <h2 className="font-['Francois_One'] text-xl sm:text-2xl md:text-4xl leading-snug md:leading-10 mb-4 md:mb-6">
          Problem Statement
        </h2>

        {/* Description */}
        <p className="font-['Open_Sans'] text-sm sm:text-base md:text-lg leading-6 tracking-[0.5px] max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Tellus elementum ultricies sed
          in risus ac egestas. Proin malesuada nibh vel habitant morbi semper
          cursus in lacus. Neque duis augue mauris aliquet sed mi lorem. Et
          vitae habitant viverra quis id scelerisque.
        </p>
      </div>

      {/* Image (half inside, half outside) */}
      <div className="relative flex justify-center -mt-[300px] px-[20px]">
        <Image
          src={gym2}
          alt="Gym"
          className="rounded-[16px] md:rounded-[24px] object-cover w-full max-w-[600px] sm:max-w-[700px] md:max-w-[1040px] h-[600px] shadow-lg"
          priority
        />
      </div>

      {/* Outside paragraph */}
      <p
        className="font-['Open_Sans'] font-normal mt-10 md:mt-[150px] mx-6 md:mx-auto md:ml-[250px] max-w-[774px] 
                  text-sm sm:text-base md:text-[16px] leading-6 tracking-[0.5px] text-black"
      >
        Lorem ipsum dolor sit amet consectetur. Tellus elementum ultricies sed
        in risus ac egestas. Proin malesuada nibh vel habitant morbi semper
        cursus in lacus. Neque duis augue mauris aliquet sed mi lorem. Et vitae
        habitant viverra quis id scelerisque.
      </p>
    </div>
  );
};

export default KriyaStatementMbl;
