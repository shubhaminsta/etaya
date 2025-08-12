"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import FeatureCarousel from "@/app/components/corousal";

const OurWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define animation ranges for staggered visibility
  const lineProgressFirst = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textOpacityTitle = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const textOpacitySubtitle = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const carouselOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest); // value between 0 and 1
  });

  // Sample data
  const sampleData = {
    title: "Our Works",
    subtitle:
      "We collaborate with innovative companies to deliver impactful solutions.",
    feature: [
      {
        src: "/images/company1.jpg",
        alt: "Company 1",
        title: "TechNova",
        description:
          "TechNova builds AI-powered solutions for modern enterprises.",
        url: "https://technova.com",
      },
      {
        src: "/images/company2.jpg",
        alt: "Company 2",
        title: "GreenSpark",
        description:
          "GreenSpark creates sustainable energy solutions for a better future.",
        url: "https://greenspark.com",
      },
      {
        src: "/images/company3.jpg",
        alt: "Company 3",
        title: "HealthFirst",
        description:
          "HealthFirst revolutionizes healthcare with next-gen digital tools.",
        url: "https://healthfirst.com",
      },
      {
        src: "/images/company4.jpg",
        alt: "Company 4",
        title: "UrbanHive",
        description:
          "UrbanHive designs smart urban spaces for sustainable living.",
        url: "https://urbanhive.com",
      },
    ],
  };

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b relative from-black to-purple-600 w-full max-w-[1440px] min-h-screen"
    >
      <svg
        width="521"
        height="263"
        viewBox="0 0 521 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-[22%]"
      >
        <motion.path
          d="M518.353 0.797027V160.333C518.353 215.561 473.581 260.333 418.353 260.333L0 260.334"
          stroke="#7C3AED"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          style={{ pathLength: lineProgressFirst }}
        />
      </svg>

      <motion.div className="absolute top-[30%] left-[22%]">
        <div className="">
          <motion.h2
            className="text-4xl font-bold text-white"
            style={{ opacity: textOpacityTitle }}
          >
            {sampleData.title}
          </motion.h2>
          <motion.p
            className="text-lg mt-4 max-w-xl text-white"
            style={{ opacity: textOpacitySubtitle }}
          >
            {sampleData.subtitle}
          </motion.p>

          {/* Pass sample data into FeatureCarousel */}
          <motion.div className="mt-6" style={{ opacity: carouselOpacity }}>
            <FeatureCarousel data={sampleData} page="ourworks" />
          </motion.div>
        </div>
      </motion.div>

      <svg
        width="106"
        height="74"
        viewBox="0 0 106 774"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-24 left-2"
      >
        <motion.path
          d="M105.605 2.47705H102.051C46.8223 2.47705 2.05078 47.2486 2.05078 102.477V552.366V773.652"
          stroke="#7C3AED"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          style={{ pathLength: lineProgressSecond }}
        />
      </svg>
    </div>
  );
};

export default OurWorks;
