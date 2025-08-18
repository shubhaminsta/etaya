// components/OurWorksMbl.tsx
import React from "react";
import FeatureCarousel from "@/app/components/corousal";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

const OurWorksMbl = () => {
  // Create a ref for the SVG container
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll progress transformations
  const lineProgressFirst = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Smooth the scroll progress with a spring effect
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to strokeDashoffset (0 to path length)

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
    <div className="xl:hidden bg-gradient-to-b from-black to-purple-600 w-full h-full flex flex-col items-center">
      <div className="relative  pt-[100px]">
        <div ref={ref}>
          <motion.svg
            width="4"
            height="77"
            viewBox="0 0 4 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[48%] top-0"
          >
            <motion.path
              d="M1.95605 0.138428V76.3452"
              stroke="#7C3AED"
              strokeWidth="3"
              style={{ pathLength: lineProgressFirst }}
            />
            <motion.path
              d="M1.95605 0.138428V76.3452"
              stroke="#7C3AED"
              strokeWidth="3"
              style={{ opacity: 0.2 }}
            />
          </motion.svg>
        </div>

        {/* Our Works */}
        <h2 className="font-[400] text-[45px] leading-[52px] text-center font-[Francois_One] text-white">
          Our Works
        </h2>

        {/* Paragraph */}
        <p className="font-[400] text-[14px] leading-[20px] tracking-[0.25px] font-[Open_Sans] text-[#EBEBEB]">
          Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis
          parturient consequat sit phasellus.. Et non habitant risus ut.
        </p>
      </div>
      <div className="w-[350px] mt-5  md:w-[625px] lg:w-[924px]">
        <FeatureCarousel data={sampleData} page="ourworks" />
      </div>
    </div>
  );
};

export default OurWorksMbl;
