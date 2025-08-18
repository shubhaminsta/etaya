"use client";

import React, { useRef } from "react";
import TeamCarousel from "@/app/components/TeamCarousel";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const teamData = {
  title: "Our Team",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Eget vitae in molestie arcu mattis eros sodales duis. Lobortis amet viverra sodales suscipit dictum accumsan.",
  members: [
    {
      name: "Alice Johnson",
      role: "Lead Designer with 8 years of experience in UI/UX design.",
    },
    {
      name: "Michael Smith",
      role: "Full Stack Developer specializing in modern web apps.",
    },
    {
      name: "Sophia Lee",
      role: "Project Manager who keeps everything on track and moving.",
    },
    {
      name: "James Brown",
      role: "Marketing Expert with a knack for brand storytelling.",
    },
  ],
};

const TeamMbl = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgressFirst = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const lineProgressThird = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <div className="xl:hidden flex flex-col items-center w-full  h-[907px]">
      <div className="flex relative  h-[250px]">
        <svg
          width="23"
          height="144"
          viewBox="0 0 23 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2 0.134521V121.302C2 132.635 11.1871 141.822 22.5199 141.822V141.822"
            stroke="#DD4D2B"
            stroke-width="3"
            style={{ pathLength: lineProgressSecond }}
          />
          <motion.path
            d="M2 0.134521V121.302C2 132.635 11.1871 141.822 22.5199 141.822V141.822"
            stroke="#DD4D2B"
            stroke-width="3"
            style={{ opacity: 0.2 }}
          />
        </svg>
        <div className="relative p-4  mt-[100px] h-fit w-full max-w-[90vw] sm:max-w-[600px]">
          {/* Our Team Heading */}
          <h2 className="font-[400] text-[32px] sm:text-[40px] leading-[38px] sm:leading-[48px] font-[Francois_One] text-[#DD4D2B]">
            Our Team
          </h2>

          {/* Paragraph */}
          <p className="font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[0.5px] font-[Open_Sans] text-black mt-2">
            {teamData.subtitle}
          </p>
          <svg
            width="75"
            height="31"
            viewBox="0 0 75 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-end absolute bottom-0 right-0"
          >
            <motion.path
              d="M0.046875 2.19971H49.2913C62.5461 2.19971 73.2913 12.9449 73.2913 26.1997V30.2749"
              stroke="#DD4D2B"
              stroke-width="3"
              style={{ pathLength: lineProgressThird }}
            />
            <path
              d="M0.046875 2.19971H49.2913C62.5461 2.19971 73.2913 12.9449 73.2913 26.1997V30.2749"
              stroke="#DD4D2B"
              stroke-width="3"
              style={{ opacity: 0.2 }}
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-[90vw] h-[500px] bg-amber-900 sm:max-w-[600px] md:max-w-[720px] mx-auto mt-4">
        <TeamCarousel data={teamData} />
      </div>

      <div className="flex justify-center mt-6">
        <div ref={ref}>
          <motion.svg
            width="4"
            height="120" // Reduced height for mobile/tablet
            viewBox="0 0 4 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto" // Center the SVG
          >
            <motion.path
              d="M2 0 V120"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ pathLength: lineProgressFirst }}
            />
            <motion.path
              d="M2 0 V120"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ opacity: 0.2 }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default TeamMbl;
