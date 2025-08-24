"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import TeamCarousel from "@/app/components/TeamCarousel";
import TeamMbl from "./TeamMbl";

const Team = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ✅ Typewriter effect for title
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const fullTitle = "Our Team";

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.2 && !hasAnimated) {
      setHasAnimated(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedTitle(fullTitle.slice(0, index + 1));
        index++;
        if (index === fullTitle.length) {
          clearInterval(interval);
        }
      }, 100); // typing speed
    }
  });

  // Define animation ranges for staggered visibility
  const lineProgressFirst = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const textOpacityTitle = useTransform(scrollYProgress, [0.2, 0.25], [0.2, 1]);
  const textOpacitySubtitle = useTransform(
    scrollYProgress,
    [0.2, 0.25],
    [0.2, 1]
  );
  const carouselOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const lineProgressSecond = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    [0, 1]
  );
  const lineProgressThird = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest); // value between 0 and 1
  });

  // Team data
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

  return (
    <div ref={ref} className="w-full h-full bg-[#F9F6F0]  ">
      {" "}
      {/* <div className="relative bg-pink-500 w-full max-w-[1440px] " ref={ref}> */}
      <div className="hidden xl:block  relative w-full  mx-auto  max-w-[1440px] px-[200px] mt-[120px]  ">
        <svg
          width="105"
          height="251"
          viewBox="0 0 105 251"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[120px] left-[80px]"
        >
          <motion.path
            d="M2.05078 0.775879V148.93C2.05078 204.159 46.8223 248.93 102.051 248.93H104.514"
            stroke="#EE360B"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgressFirst }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <path
            d="M2.05078 0.775879V148.93C2.05078 204.159 46.8223 248.93 102.051 248.93H104.514"
            stroke="#EE360B"
            strokeWidth="4"
            style={{ opacity: 0.2 }}
          />
        </svg>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.h1
            className="font-['Francois_One'] font-normal text-[72px] leading-[80px] text-left text-[#DD4D2B]"
            style={{ opacity: textOpacityTitle }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedTitle}
          </motion.h1>
          <motion.p
            className="font-['Open_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px] text-black max-w-[503.81px]"
            style={{ opacity: textOpacitySubtitle }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {teamData.subtitle}
          </motion.p>

          <svg
            width="717"
            height="129"
            viewBox="0 0 717 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[100px]"
          >
            <motion.path
              d="M0.283691 2.74219L610.793 2.74176C661.906 2.74173 704.791 41.2856 710.226 92.1082L714.115 128.474"
              stroke="#EE360B"
              stroke-width="4"
              initial={{ pathLength: 0 }}
              style={{ pathLength: lineProgressSecond }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M0.283691 2.74219L610.793 2.74176C661.906 2.74173 704.791 41.2856 710.226 92.1082L714.115 128.474"
              stroke="#EE360B"
              stroke-width="4"
              style={{ opacity: 0.2 }}
            />
          </svg>

          <motion.div
            className=" "
            style={{ opacity: carouselOpacity }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TeamCarousel data={teamData} />
          </motion.div>
        </div>

        <div className=" relative h-[180px]">
          {" "}
          <svg
            width="4"
            height="172"
            viewBox="0 0 4 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[218px] bottom-0"
          >
            <motion.path
              d="M1.875 0.755859V171.651"
              stroke="#DD4D2B"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              style={{ pathLength: lineProgressThird }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M1.875 0.755859V171.651"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ opacity: 0.2 }}
            />
          </svg>
        </div>
      </div>
      <TeamMbl />
    </div>
  );
};

export default Team;

// "use client";
// import React, { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from "framer-motion";
// import FeatureCarousel from "@/app/components/corousal";

// const OurWorks = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Define animation ranges for staggered visibility
//   const lineProgressFirst = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
//   const textOpacityTitle = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
//   const textOpacitySubtitle = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
//   const carouselOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
//   const lineProgressSecond = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log("Scroll progress:", latest); // value between 0 and 1
//   });

//   // Sample data
//   const sampleData = {
//     title: "Our Works",
//     subtitle:
//       "We collaborate with innovative companies to deliver impactful solutions.",
//     feature: [
//       {
//         src: "/images/company1.jpg",
//         alt: "Company 1",
//         title: "TechNova",
//         description:
//           "TechNova builds AI-powered solutions for modern enterprises.",
//         url: "https://technova.com",
//       },
//       {
//         src: "/images/company2.jpg",
//         alt: "Company 2",
//         title: "GreenSpark",
//         description:
//           "GreenSpark creates sustainable energy solutions for a better future.",
//         url: "https://greenspark.com",
//       },
//       {
//         src: "/images/company3.jpg",
//         alt: "Company 3",
//         title: "HealthFirst",
//         description:
//           "HealthFirst revolutionizes healthcare with next-gen digital tools.",
//         url: "https://healthfirst.com",
//       },
//       {
//         src: "/images/company4.jpg",
//         alt: "Company 4",
//         title: "UrbanHive",
//         description:
//           "UrbanHive designs smart urban spaces for sustainable living.",
//         url: "https://urbanhive.com",
//       },
//     ],
//   };

//   return (
//     <div
//       ref={ref}
//       className="bg-gradient-to-b relative from-black to-purple-600 w-full max-w-[1440px] min-h-screen"
//     >
//       {/* <svg
//         width="521"
//         height="263"
//         viewBox="0 0 521 263"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute top-0 right-[22%]"
//       >
//         <motion.path
//           d="M2.05078 0.775879V148.93C2.05078 204.159 46.8223 248.93 102.051 248.93H104.514"
//           stroke="#7C3AED"
//           strokeWidth="4"
//           initial={{ pathLength: 0 }}
//           style={{ pathLength: lineProgressFirst }}
//         />
//       </svg> */}
//       <svg
//         width="105"
//         height="251"
//         viewBox="0 0 105 251"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M2.05078 0.775879V148.93C2.05078 204.159 46.8223 248.93 102.051 248.93H104.514"
//           stroke="#EE360B"
//           stroke-width="4"
//         />
//       </svg>

//       <motion.div className="absolute top-[30%] left-[22%]">
//         <div className="">
//           <motion.h2
//             className="text-4xl font-bold text-white"
//             style={{ opacity: textOpacityTitle }}
//           >
//             {sampleData.title}
//           </motion.h2>
//           <motion.p
//             className="text-lg mt-4 max-w-xl text-white"
//             style={{ opacity: textOpacitySubtitle }}
//           >
//             {sampleData.subtitle}
//           </motion.p>

//           {/* Pass sample data into FeatureCarousel */}
//           <motion.div className="mt-6" style={{ opacity: carouselOpacity }}>
//             <FeatureCarousel data={sampleData} page="ourworks" />
//           </motion.div>
//         </div>
//       </motion.div>

//       <svg
//         width="106"
//         height="774"
//         viewBox="0 0 106 774"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute bottom-0 left-0"
//       >
//         <motion.path
//           d="M105.605 2.47705H102.051C46.8223 2.47705 2.05078 47.2486 2.05078 102.477V552.366V773.652"
//           stroke="#7C3AED"
//           strokeWidth="4"
//           initial={{ pathLength: 0 }}
//           style={{ pathLength: lineProgressSecond }}
//         />
//       </svg>
//     </div>
//   );
// };

// export default OurWorks;
