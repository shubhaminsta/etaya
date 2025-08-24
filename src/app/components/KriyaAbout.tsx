"use client";
import React from "react";
import gym1 from "../../../public/images/gym3.png";
import { motion } from "framer-motion";
import KriyaAboutMbl from "./KriyaAboutMbl";

const KriyaAbout = () => {
  const logos = Array(10).fill(null); // 10 dummy logos

  const items = [
    "Member Management",
    "Team Management",
    "Equipment Management",
    "Invoicing & Expense Tracking",
  ];
  return (
    <div
      className="
      relative
       w-full
      flex flex-col  justify-center items-center
    "
    >
      <div className="w-full hidden xl:block  max-w-[1050px]">
        <div className="flex">
          {" "}
          <div
            className="
        text-white
        font-['Open_Sans'] font-normal
        leading-[28px]

        /* Mobile */
        text-[14px]

        /* Desktop */
        md:text-[18px]
      "
          >
            <div className=" text-black  pt-[132px]">
              {/* Basic Information */}
              <h2 className="font-['Francois_One'] text-2xl md:text-4xl mb-4">
                Basic Information
              </h2>

              {/* Target Audience */}
              <p className="font-['Open_Sans'] font-bold text-sm md:text-base tracking-[0.5px] mb-4">
                Target Audience : Lorem Ipsum
              </p>

              {/* Description */}
              <p className="font-['Open_Sans'] text-sm md:text-base leading-6 tracking-[0.5px] max-w-2xl">
                KriyaX is Etaya’s first product developed with Health & Fitness
                Industry in mind, which today is largely unorganized. Its
                usability extends to the Performing Arts Sector too. KriyaX is a
                cloud-based SaaS platform developed to digitize the day-to-day
                operations of these Industries at affordable prices.
              </p>
              <p className="font-['Open_Sans'] text-sm md:text-base leading-6 tracking-[0.5px] max-w-2xl">
                The platform offers 4 key Modules :
              </p>
              <section className="flex flex-wrap justify-start gap-10 py-12">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center max-w-[92px] "
                  >
                    {/* Icon */}
                    <svg
                      width="93"
                      height="96"
                      viewBox="0 0 93 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-4"
                    >
                      <ellipse
                        cx="46.4368"
                        cy="47.8129"
                        rx="46.4368"
                        ry="47.7465"
                        fill="#D9D9D9"
                      />
                    </svg>

                    {/* Text */}
                    <p className="font-roboto text-sm md:text-base text-black tracking-[0.25px] leading-5">
                      {item}
                    </p>
                  </div>
                ))}
              </section>
            </div>
          </div>
          <div className="w-[700px]  h-[600px] flex justify-center items-center">
            <img src={gym1.src} alt="Gym" />
          </div>
        </div>

        <section className="w-full py-16 text-center overflow-hidden ">
          {/* Heading */}
          <h2 className="font-['Francois_One'] text-[45px] leading-[52px] text-[#7C3AED]">
            12 Customers
          </h2>
          <p className="font-['Open_Sans'] text-base leading-6 tracking-[0.5px] text-[#CECECE] mb-12">
            No. Of Customers
          </p>

          {/* Infinite Scrolling Logos */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {/* Duplicate logos to create infinite loop effect */}
              {[...logos, ...logos].map((_, i) => (
                <div
                  key={i}
                  className="w-[116.53px] h-[100px] bg-[#D9D9D9] rounded-md flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <KriyaAboutMbl />
    </div>
  );
};

export default KriyaAbout;
