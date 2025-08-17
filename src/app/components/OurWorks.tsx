"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import FeatureCarousel from "@/app/components/corousal";
import OurWorksMbl from "./OurWorksMbl";

const OurWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Define animation ranges for staggered visibility
  const lineProgressFirst = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const textOpacityTitle = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const textOpacitySubtitle = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const carouselOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);

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
      className="bg-gradient-to-b overflow-hidden relative flex flex-col items-center  from-black to-purple-600 w-full h-full"
    >
      <div className="relative w-full hidden  xl:block max-w-[1440px] px-[200px] mt-[200px] mb-[259px] ">
        <svg
          width="106"
          height="774"
          viewBox="0 0 106 774"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[35px] left-[80px]"
        >
          <motion.path
            d="M105.605 2.47705H102.051C46.8223 2.47705 2.05078 47.2486 2.05078 102.477V552.366V773.652"
            stroke="#7C3AED"
            stroke-width="4"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgressSecond }}
          />
          <path
            d="M105.605 2.47705H102.051C46.8223 2.47705 2.05078 47.2486 2.05078 102.477V552.366V773.652"
            stroke="#7C3AED"
            stroke-width="4"
            style={{ opacity: 0.2 }}
          />
        </svg>{" "}
        <svg
          width="521"
          height="263"
          viewBox="0 0 521 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[200px] right-[26.6%]"
        >
          <motion.path
            d="M518.353 0.797027V160.333C518.353 215.561 473.581 260.333 418.353 260.333L0 260.334"
            stroke="#7C3AED"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgressFirst }}
          />
          <path
            d="M518.353 0.797027V160.333C518.353 215.561 473.581 260.333 418.353 260.333L0 260.334"
            stroke="#7C3AED"
            strokeWidth="4"
            style={{ opacity: 0.2 }}
          />
        </svg>
        <div className=" ">
          <div className="">
            <motion.h2
              className="font-['Francois_One'] font-normal text-[72px] leading-[80px] tracking-[-0.25px] "
              style={{ opacity: textOpacityTitle }}
            >
              {sampleData.title}
            </motion.h2>
            <motion.p
              className="font-['Open_Sans'] max-w-[594px] font-normal text-[16px] leading-[24px] tracking-[0.5px]"
              style={{ opacity: textOpacitySubtitle }}
            >
              Lorem ipsum dolor sit amet consectetur. Eu amet egestas a
              facilisis parturient consequat sit phasellus.. Et non habitant
              risus ut.
            </motion.p>

            {/* Pass sample data into FeatureCarousel */}
            <motion.div className="" style={{ opacity: carouselOpacity }}>
              <FeatureCarousel data={sampleData} page="ourworks" />
            </motion.div>
          </div>
        </div>
      </div>
      <OurWorksMbl />
    </div>
  );
};

export default OurWorks;
