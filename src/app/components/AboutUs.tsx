"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AboutUsMbl from "./AboutUsMbl";

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [showText, setShowText] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "AboutUs";
  const pathLength = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);

  // Trigger typewriter after path animation completes
  useEffect(() => {
    const unsubscribe = pathLength.on("change", (latest) => {
      if (latest >= 0.99 && !showText) {
        setShowText(true);
      }
    });
    return () => unsubscribe();
  }, [pathLength, showText]);

  // Typewriter effect (left → right)
  useEffect(() => {
    if (showText) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500); // Hide cursor after delay
        }
      }, 100); // Typing speed
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [showText]);

  // Log for debugging

  // Line animations for all SVGs
  const lineProgressFirst = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const lineProgressThird = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const lineProgressForth = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const linePathOffset = useTransform(scrollYProgress, [0.3, 0.45], [1, 0]);
  const linePathOffsetSecond = useTransform(
    scrollYProgress,
    [0.5, 0.6],
    [1, 0]
  );

  // Circle animations for second SVG
  const circleOpacityFirst = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
  const circleScaleFirst = useTransform(scrollYProgress, [0.35, 0.4], [0.5, 1]);
  const circleOpacitySecond = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [0, 1]
  );
  const circleScaleSecond = useTransform(
    scrollYProgress,
    [0.4, 0.45],
    [0.5, 1]
  );

  // Circle animations for third SVG
  const circleOpacityThird = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
  const circleScaleThird = useTransform(scrollYProgress, [0.45, 0.5], [0.5, 1]);
  const circleOpacityFourth = useTransform(
    scrollYProgress,
    [0.48, 0.5],
    [0, 1]
  );
  const circleScaleFourth = useTransform(
    scrollYProgress,
    [0.48, 0.5],
    [0.5, 1]
  );

  // Smooth animations with spring for second SVG
  const smoothCircleOpacityFirst = useSpring(circleOpacityFirst, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleScaleFirst = useSpring(circleScaleFirst, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleOpacitySecond = useSpring(circleOpacitySecond, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleScaleSecond = useSpring(circleScaleSecond, {
    stiffness: 100,
    damping: 20,
  });

  // Smooth animations with spring for third SVG
  const smoothCircleOpacityThird = useSpring(circleOpacityThird, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleScaleThird = useSpring(circleScaleThird, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleOpacityFourth = useSpring(circleOpacityFourth, {
    stiffness: 100,
    damping: 20,
  });
  const smoothCircleScaleFourth = useSpring(circleScaleFourth, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="w-full flex justify-center bg-black">
      {/* Desktop View */}
      <div
        ref={ref}
        className="hidden xl:flex flex-col shrink-0 items-center  relative min-w-[1440px] overflow-hidden"
      >
        <div className="flex absolute top-0 right-[355px]">
          {/* Typewriter Text */}
          {showText && (
            <p className="font-[Francois_One] mt-[80px] not-italic font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#DD4D2B]">
              {displayedText}
              {showCursor && <span className="animate-pulse"></span>}
            </p>
          )}
          <svg
            width="642"
            height="121"
            viewBox="0 0 642 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M640.074 0.197876V38.6151C640.074 82.7979 604.196 118.615 560.013 118.615C357.385 118.615 222.006 118.615 0 118.615"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ pathLength }}
              onAnimationComplete={() => setShowText(true)} // Fallback trigger
            />
          </svg>
        </div>
        <svg
          width="1066"
          height="637"
          viewBox="0 0 1066 637"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M23.7315 635.445V615.296C23.7315 571.113 59.5487 535.296 103.731 535.296H988.836C1030.2 535.296 1063.73 501.764 1063.73 460.401C1063.73 419.037 1030.2 385.506 988.836 385.506H82.0781C37.8954 385.506 2.07812 349.688 2.07812 305.506V1.49902"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              pathLength: lineProgressFirst,
              pathOffset: linePathOffset,
            }}
          />

          <motion.text
            x={64.8471 + 50}
            y={295.38 + 5}
            fill="white"
            fontSize="16"
            fontWeight="400"
            style={{
              opacity: smoothCircleOpacityFirst,
            }}
          >
            <tspan x={64.8471 + 50} dy="0">
              Etaya aims to pave the way
            </tspan>
            <tspan x={64.8471 + 50} dy="25">
              for Definitive, Digitized, Sustainable Innovation.
            </tspan>
          </motion.text>

          <motion.circle
            cx="1014"
            cy="460.774"
            r="35.6415"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <motion.text
            x={1014 - 250}
            y={460.774 - 5}
            fill="white"
            fontSize="16"
            fontWeight="400"
            style={{
              opacity: smoothCircleOpacitySecond,
            }}
          >
            <tspan x={740 - 250} dy="0">
              Catering to all industries,it is our motto to become
            </tspan>
            <tspan x={740 - 250} dy="25">
              the Precursor to Change.
            </tspan>
          </motion.text>

          <motion.path
            d="M23.7315 635.445V615.296C23.7315 571.113 59.5487 535.296 103.731 535.296H988.836C1030.2 535.296 1063.73 501.764 1063.73 460.401C1063.73 419.037 1030.2 385.506 988.836 385.506H82.0781C37.8954 385.506 2.07812 349.688 2.07812 305.506V1.49902"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              opacity: 0.2,
            }}
          />
          <motion.circle
            cx="64.8471"
            cy="295.38"
            r="35.6415"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <motion.circle
            cx="64.8473"
            cy="294.65"
            r="30.8297"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <motion.circle
            cx="64.8473"
            cy="294.65"
            r="26.5788"
            fill="url(#paint0_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <path
            d="M60.9006 303.513C58.994 303.513 57.674 302.677 56.9406 301.005C56.2073 299.318 55.8406 297.287 55.8406 294.911C55.8406 292.549 56.2 290.54 56.9186 288.883C57.652 287.225 58.9793 286.397 60.9006 286.397C62.822 286.397 64.1493 287.225 64.8826 288.883C65.6306 290.54 66.0046 292.542 66.0046 294.889C66.0046 297.265 65.6306 299.296 64.8826 300.983C64.1493 302.669 62.822 303.513 60.9006 303.513ZM60.9006 300.917C61.37 300.917 61.744 300.748 62.0226 300.411C62.316 300.073 62.536 299.428 62.6826 298.475C62.8293 297.521 62.9026 296.143 62.9026 294.339C62.9026 292.608 62.7706 291.288 62.5066 290.379C62.2573 289.455 61.722 288.993 60.9006 288.993C60.0793 288.993 59.544 289.44 59.2946 290.335C59.06 291.215 58.9426 292.461 58.9426 294.075C58.9426 295.952 59.0086 297.382 59.1406 298.365C59.2726 299.347 59.478 300.022 59.7566 300.389C60.0353 300.741 60.4166 300.917 60.9006 300.917ZM68.7253 303.205V300.499H70.8373V290.731L68.5713 291.215V288.905L72.3333 286.705H73.9173V300.499H76.0733L75.9413 303.205H68.7253Z"
            fill="white"
          />
          <motion.circle
            cx="1014"
            cy="460.774"
            r="35.6415"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <motion.circle
            cx="1014"
            cy="460.045"
            r="30.8297"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <motion.circle
            cx="1014"
            cy="460.045"
            r="26.5788"
            fill="url(#paint1_radial_1_3)"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />

          <path
            d="M1008.25 468.353C1006.34 468.353 1005.02 467.517 1004.29 465.845C1003.55 464.158 1003.19 462.127 1003.19 459.751C1003.19 457.39 1003.55 455.38 1004.27 453.723C1005 452.066 1006.33 451.237 1008.25 451.237C1010.17 451.237 1011.5 452.066 1012.23 453.723C1012.98 455.38 1013.35 457.382 1013.35 459.729C1013.35 462.105 1012.98 464.136 1012.23 465.823C1011.5 467.51 1010.17 468.353 1008.25 468.353ZM1008.25 465.757C1008.72 465.757 1009.09 465.588 1009.37 465.251C1009.66 464.914 1009.88 464.268 1010.03 463.315C1010.18 462.362 1010.25 460.983 1010.25 459.179C1010.25 457.448 1010.12 456.128 1009.85 455.219C1009.6 454.295 1009.07 453.833 1008.25 453.833C1007.43 453.833 1006.89 454.28 1006.64 455.175C1006.41 456.055 1006.29 457.302 1006.29 458.915C1006.29 460.792 1006.36 462.222 1006.49 463.205C1006.62 464.188 1006.83 464.862 1007.1 465.229C1007.38 465.581 1007.76 465.757 1008.25 465.757ZM1015.65 465.647C1016.04 465.148 1016.67 464.386 1017.55 463.359C1018.5 462.274 1019.26 461.35 1019.83 460.587C1020.42 459.81 1020.91 459.003 1021.31 458.167C1021.72 457.316 1021.92 456.488 1021.92 455.681C1021.92 455.226 1021.78 454.808 1021.48 454.427C1021.21 454.031 1020.79 453.833 1020.23 453.833C1019.67 453.833 1019.18 454.104 1018.76 454.647C1018.33 455.175 1018.06 455.813 1017.94 456.561L1015.3 455.703C1015.45 454.911 1015.74 454.178 1016.18 453.503C1016.62 452.814 1017.19 452.264 1017.9 451.853C1018.6 451.442 1019.4 451.237 1020.3 451.237C1021.22 451.237 1022.04 451.428 1022.76 451.809C1023.48 452.19 1024.04 452.726 1024.43 453.415C1024.84 454.09 1025.05 454.86 1025.05 455.725C1025.05 457.309 1024.51 458.893 1023.42 460.477C1022.34 462.061 1020.93 463.682 1019.22 465.339H1024.92L1024.65 468.045H1015.65V465.647Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(64.8473 294.65) rotate(90) scale(26.5788)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1014 460.045) rotate(90) scale(26.5788)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          width="987"
          height="224"
          viewBox="0 0 987 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M948.554 187.984V187.984C948.554 143.801 912.737 107.729 868.554 107.729H38.0012C18.1183 107.729 2 91.6108 2 71.7279V71.7279C2 51.845 18.1183 35.7267 38.0012 35.7267H50.6498"
            stroke="white"
            strokeWidth="3"
            style={{
              pathLength: lineProgressSecond,
              pathOffset: linePathOffsetSecond,
            }}
          />
          <motion.circle
            cx="70.7601"
            cy="35.7267"
            r="35.6415"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <motion.circle
            cx="70.7603"
            cy="34.9972"
            r="30.8297"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <motion.circle
            cx="70.7604"
            cy="34.9972"
            r="26.5788"
            fill="url(#paint0_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <path
            d="M65.0056 43.3052C63.099 43.3052 61.779 42.4692 61.0456 40.7972C60.3123 39.1105 59.9456 37.0792 59.9456 34.7032C59.9456 32.3419 60.305 30.3325 61.0236 28.6752C61.757 27.0179 63.0843 26.1892 65.0056 26.1892C66.927 26.1892 68.2543 27.0179 68.9876 28.6752C69.7356 30.3325 70.1096 32.3345 70.1096 34.6812C70.1096 37.0572 69.7356 39.0885 68.9876 40.7752C68.2543 42.4619 66.927 43.3052 65.0056 43.3052ZM65.0056 40.7092C65.475 40.7092 65.849 40.5405 66.1276 40.2032C66.421 39.8659 66.641 39.2205 66.7876 38.2672C66.9343 37.3139 67.0076 35.9352 67.0076 34.1312C67.0076 32.4005 66.8756 31.0805 66.6116 30.1712C66.3623 29.2472 65.827 28.7852 65.0056 28.7852C64.1843 28.7852 63.649 29.2325 63.3996 30.1272C63.165 31.0072 63.0476 32.2539 63.0476 33.8672C63.0476 35.7445 63.1136 37.1745 63.2456 38.1572C63.3776 39.1399 63.583 39.8145 63.8616 40.1812C64.1403 40.5332 64.5216 40.7092 65.0056 40.7092ZM76.6362 43.3052C75.4189 43.3052 74.3556 43.0119 73.4462 42.4252C72.5369 41.8239 71.9356 40.9439 71.6422 39.7852L73.9962 38.7512C74.2456 39.4552 74.5756 39.9612 74.9862 40.2692C75.4116 40.5625 75.9102 40.7092 76.4822 40.7092C77.0396 40.7092 77.5016 40.5039 77.8682 40.0932C78.2349 39.6825 78.4182 39.0739 78.4182 38.2672C78.4182 37.2259 78.1102 36.5292 77.4942 36.1772C76.8929 35.8105 76.0349 35.6272 74.9202 35.6272V33.4712C75.8589 33.4712 76.6289 33.2365 77.2302 32.7672C77.8462 32.2979 78.1616 31.6012 78.1762 30.6772V30.6552C78.1762 30.0685 77.9929 29.6065 77.6262 29.2692C77.2596 28.9319 76.8269 28.7632 76.3282 28.7632C75.8882 28.7632 75.4776 28.9025 75.0962 29.1812C74.7149 29.4452 74.4289 29.8339 74.2382 30.3472L72.0382 29.0932C72.5222 28.0812 73.1602 27.3479 73.9522 26.8932C74.7442 26.4239 75.6829 26.1892 76.7682 26.1892C77.5456 26.1892 78.2789 26.3579 78.9682 26.6952C79.6576 27.0179 80.2149 27.5019 80.6402 28.1472C81.0802 28.7779 81.3002 29.5332 81.3002 30.4132C81.3002 31.3665 81.0656 32.1805 80.5962 32.8552C80.1269 33.5152 79.4376 33.9992 78.5282 34.3072C79.4522 34.6005 80.1782 35.1212 80.7062 35.8692C81.2489 36.6025 81.5202 37.5045 81.5202 38.5752C81.5202 39.5579 81.2929 40.4085 80.8382 41.1272C80.3836 41.8312 79.7822 42.3739 79.0342 42.7552C78.3009 43.1219 77.5016 43.3052 76.6362 43.3052Z"
            fill="white"
          />
          <motion.circle
            cx="950.548"
            cy="187.984"
            r="35.6415"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <motion.circle
            cx="950.548"
            cy="187.254"
            r="30.8297"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <motion.circle
            cx="950.548"
            cy="187.255"
            r="26.5788"
            fill="url(#paint1_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <path
            d="M944.794 195.563C942.887 195.563 941.567 194.727 940.834 193.055C940.1 191.368 939.734 189.337 939.734 186.961C939.734 184.599 940.093 182.59 940.812 180.933C941.545 179.275 942.872 178.447 944.794 178.447C946.715 178.447 948.042 179.275 948.776 180.933C949.524 182.59 949.898 184.592 949.898 186.939C949.898 189.315 949.524 191.346 948.776 193.033C948.042 194.719 946.715 195.563 944.794 195.563ZM944.794 192.967C945.263 192.967 945.637 192.798 945.916 192.461C946.209 192.123 946.429 191.478 946.576 190.525C946.722 189.571 946.796 188.193 946.796 186.389C946.796 184.658 946.664 183.338 946.4 182.429C946.15 181.505 945.615 181.043 944.794 181.043C943.972 181.043 943.437 181.49 943.188 182.385C942.953 183.265 942.836 184.511 942.836 186.125C942.836 188.002 942.902 189.432 943.034 190.415C943.166 191.397 943.371 192.072 943.65 192.439C943.928 192.791 944.31 192.967 944.794 192.967ZM956.974 195.387V191.119H951.452V188.655L956.842 178.755H960.076V188.655H962.144L961.88 191.119H960.076V195.123L956.974 195.387ZM954.026 188.655H956.974V182.869L954.026 188.655Z"
            fill="white"
          />

          <motion.text
            x={70.7604 + 55} // right side of circle
            y={35.7267 + 5} // vertical centering
            fill="white"
            fontSize="16"
            fontWeight="400"
            style={{
              opacity: smoothCircleOpacityThird,
            }}
          >
            <tspan x={70.7604 + 55} dy="0">
              Change that aids cultural preservation of Indian{" "}
            </tspan>
            <tspan x={70.7604 + 55} dy="22">
              identities and civilizational ethos.{" "}
            </tspan>
          </motion.text>

          <motion.text
            x={950.548 - 300} // place 300px to the left of circle
            y={187.984 + 5} // vertical centering
            fill="white"
            fontSize="16"
            fontWeight="400"
            textAnchor="start"
            style={{
              opacity: smoothCircleOpacityFourth,
            }}
          >
            <tspan x={730.548 - 300} dy={0 - 40}>
              Change being the only constant, Etaya’s incorporation{" "}
            </tspan>
            <tspan x={730.548 - 300} dy="22">
              was sought to aid the most efficient means to incorporate
            </tspan>
            <tspan x={730.548 - 300} dy="22">
              sustainable development in all spheres of economy
            </tspan>
            <tspan x={730.548 - 300} dy="22">
              and industries in tandem and harmony with the nature.{" "}
            </tspan>
          </motion.text>
          <defs>
            <radialGradient
              id="paint0_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(70.7604 34.9972) rotate(90) scale(26.5788)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(950.548 187.255) rotate(90) scale(26.5788)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          width="955"
          height="175"
          viewBox="0 0 955 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M954.5 2.33081C954.5 1.50238 953.828 0.830811 953 0.830811C952.171 0.830811 951.5 1.50238 951.5 2.33081H953H954.5ZM953 2.33081H951.5V15.0918H953H954.5V2.33081H953ZM873 95.0918V93.5918H81.1608V95.0918V96.5918H873V95.0918ZM81.1608 95.0918V93.5918C36.6131 93.5918 0.5 129.705 0.5 174.253H2H3.5C3.5 131.362 38.2699 96.5918 81.1608 96.5918V95.0918ZM953 15.0918H951.5C951.5 58.4461 916.354 93.5918 873 93.5918V95.0918V96.5918C918.011 96.5918 954.5 60.103 954.5 15.0918H953Z"
            stroke="white"
            strokeWidth="3"
            style={{
              pathLength: lineProgressThird,
            }}
          />
        </svg>
        <div className="absolute bottom-[50px] right-0">
          <svg
            width="621"
            height="101"
            viewBox="0 0 621 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1.99976 0.715088V19.1971C1.99976 63.3799 37.817 99.1971 81.9998 99.1971H630.664"
              stroke="#DD4D2B"
              stroke-width="3"
              style={{
                pathLength: lineProgressForth,
              }}
            />
          </svg>
        </div>
      </div>
      <AboutUsMbl />
    </div>
  );
};

export default AboutUs;
