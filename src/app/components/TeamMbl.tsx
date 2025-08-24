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
  // Adjusted offset for better mobile scroll trigger
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"], // Start when component enters viewport, end when it leaves
  });

  // Smooth out the scroll progress with useSpring for better animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Adjusted ranges for smoother path animations
  const lineProgressFirst = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const lineProgressThird = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <div
      ref={ref}
      className="xl:hidden flex flex-col items-center w-full h-[907px]"
    >
      {/* First SVG Section */}
      <div className="flex justify-center relative w-full h-[250px]">
        <svg
          width="23"
          height="144"
          viewBox="0 0 23 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4" // Ensure SVG is positioned correctly
        >
          <motion.path
            d="M2 0.134521V121.302C2 132.635 11.1871 141.822 22.5199 141.822"
            stroke="#DD4D2B"
            strokeWidth="3"
            style={{ pathLength: lineProgressSecond }}
          />
          <path
            d="M2 0.134521V121.302C2 132.635 11.1871 141.822 22.5199 141.822"
            stroke="#DD4D2B"
            strokeWidth="3"
            style={{ opacity: 0.2 }}
          />
        </svg>

        {/* Team Heading and Subtitle */}
        <div className="relative p-4 w-[330px] mt-5 md:w-[625px] lg:w-[924px] h-fit max-w-[90vw] sm:max-w-[600px]">
          <h2 className="font-[400] text-[32px] sm:text-[40px] leading-[38px] sm:leading-[48px] font-[Francois_One] text-[#DD4D2B]">
            {teamData.title}
          </h2>
          <p className="font-[400] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[0.5px] font-[Open_Sans] text-black mt-2">
            {teamData.subtitle}
          </p>
          <svg
            width="75"
            height="31"
            viewBox="0 0 75 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0"
          >
            <motion.path
              d="M0.046875 2.19971H49.2913C62.5461 2.19971 73.2913 12.9449 73.2913 26.1997V30.2749"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ pathLength: lineProgressThird }}
            />
            <path
              d="M0.046875 2.19971H49.2913C62.5461 2.19971 73.2913 12.9449 73.2913 26.1997V30.2749"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ opacity: 0.2 }}
            />
          </svg>
        </div>
      </div>

      {/* Team Carousel */}
      <div className="w-full max-w-[350px] h-[500px] sm:max-w-[600px] md:max-w-[720px] mx-auto mt-4">
        <TeamCarousel data={teamData} />
      </div>

      {/* Bottom SVG Line */}
      <div className="flex justify-center mt-6">
        <div>
          <motion.svg
            width="4"
            height="120"
            viewBox="0 0 4 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <motion.path
              d="M2 0 V120"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ pathLength: lineProgressFirst }}
            />
            <path
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
