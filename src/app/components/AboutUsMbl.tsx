"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

const AboutUsMbl = () => {
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
  console.log("====================================");
  console.log(displayedText, showText, "setShowText");
  console.log("====================================");

  // Line animations for all SVGs
  const lineProgressFirst = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const lineProgressThird = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const lineProgressForth = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
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
    <div
      ref={ref}
      className="xl:hidden bg-black w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center  relative justify-center max-w-[390px]">
        <div className="flex justify-end pr-[15%]  absolute top-0  w-full ">
          {/* Typewriter Text */}
          {showText && (
            <p className="font-[Francois_One] mt-[80px] not-italic font-normal text-[40px]  leading-[45px]  tracking-[-0.25px] text-[#DD4D2B]">
              {displayedText}
              {showCursor && <span className="animate-pulse"></span>}
            </p>
          )}

          <svg
            width="118"
            height="104"
            viewBox="0 0 118 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M116.24 0.740173V78.1183C116.24 91.3731 105.495 102.118 92.2401 102.118H0.387207"
              stroke="#DD4D2B"
              stroke-width="2"
              style={{ pathLength }}
              onAnimationComplete={() => setShowText(true)} // Fallback trigger
            />
            <motion.path
              d="M116.24 0.740173V78.1183C116.24 91.3731 105.495 102.118 92.2401 102.118H0.387207"
              stroke="#DD4D2B"
              stroke-width="2"
              style={{ opacity: 0.2 }}
            />
          </svg>
        </div>
        <svg
          width="315"
          height="488"
          viewBox="0 0 315 488"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1.37402 486.771V444.849C1.37402 431.595 12.1192 420.849 25.374 420.849H157.59H289.805C303.06 420.849 313.805 410.104 313.805 396.849V347.494L313.567 299.363C313.501 286.155 302.776 275.482 289.567 275.482H25.374C12.1192 275.482 1.37402 264.737 1.37402 251.482V1.27625"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: lineProgressFirst,
              pathOffset: linePathOffset,
            }}
          />
          <motion.path
            d="M1.37402 486.771V444.849C1.37402 431.595 12.1192 420.849 25.374 420.849H157.59H289.805C303.06 420.849 313.805 410.104 313.805 396.849V347.494L313.567 299.363C313.501 286.155 302.776 275.482 289.567 275.482H25.374C12.1192 275.482 1.37402 264.737 1.37402 251.482V1.27625"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ opacity: 0.2 }}
          />
          <motion.circle
            cx="40.8863"
            cy="219.324"
            r="30.172"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <motion.circle
            cx="40.8862"
            cy="218.706"
            r="26.0986"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <motion.circle
            cx="40.8862"
            cy="218.706"
            r="22.5"
            fill="url(#paint0_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityFirst,
              scale: smoothCircleScaleFirst,
            }}
          />
          <path
            d="M36.8182 225.548C35.4316 225.548 34.4716 224.94 33.9382 223.724C33.4049 222.497 33.1382 221.02 33.1382 219.292C33.1382 217.574 33.3996 216.113 33.9222 214.908C34.4556 213.702 35.4209 213.1 36.8182 213.1C38.2156 213.1 39.1809 213.702 39.7142 214.908C40.2582 216.113 40.5302 217.569 40.5302 219.276C40.5302 221.004 40.2582 222.481 39.7142 223.708C39.1809 224.934 38.2156 225.548 36.8182 225.548ZM36.8182 223.66C37.1596 223.66 37.4316 223.537 37.6342 223.292C37.8476 223.046 38.0076 222.577 38.1142 221.884C38.2209 221.19 38.2742 220.188 38.2742 218.876C38.2742 217.617 38.1782 216.657 37.9862 215.996C37.8049 215.324 37.4156 214.988 36.8182 214.988C36.2209 214.988 35.8316 215.313 35.6502 215.964C35.4796 216.604 35.3942 217.51 35.3942 218.684C35.3942 220.049 35.4422 221.089 35.5382 221.804C35.6342 222.518 35.7836 223.009 35.9862 223.276C36.1889 223.532 36.4662 223.66 36.8182 223.66ZM42.6589 225.324V223.356H44.1949V216.252L42.5469 216.604V214.924L45.2829 213.324H46.4349V223.356H48.0029L47.9069 225.324H42.6589Z"
            fill="white"
          />
          <motion.text
            x="40.8863 + 40"
            y="219.324 + 5"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            style={{
              opacity: smoothCircleOpacityFirst,
            }}
          >
            <tspan x="90.8863 + 40" dy="0">
              Etaya aims to pave the way for
            </tspan>
            <tspan x="90.8863 + 40" dy="16">
              Definitive, Digitized,Sustainable
            </tspan>
            <tspan x="90.8863 + 40" dy="16">
              Innovation.
            </tspan>
          </motion.text>
          <motion.circle
            cx="261.828"
            cy="349.277"
            r="30.172"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <motion.circle
            cx="261.828"
            cy="348.659"
            r="26.0986"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <motion.circle
            cx="261.828"
            cy="348.659"
            r="22.5"
            fill="url(#paint1_radial_1_3)"
            style={{
              opacity: smoothCircleOpacitySecond,
              scale: smoothCircleScaleSecond,
            }}
          />
          <path
            d="M257.76 355.501C256.373 355.501 255.413 354.893 254.88 353.677C254.347 352.45 254.08 350.973 254.08 349.245C254.08 347.527 254.341 346.066 254.864 344.861C255.397 343.655 256.363 343.053 257.76 343.053C259.157 343.053 260.123 343.655 260.656 344.861C261.2 346.066 261.472 347.522 261.472 349.229C261.472 350.957 261.2 352.434 260.656 353.661C260.123 354.887 259.157 355.501 257.76 355.501ZM257.76 353.613C258.101 353.613 258.373 353.49 258.576 353.245C258.789 352.999 258.949 352.53 259.056 351.837C259.163 351.143 259.216 350.141 259.216 348.829C259.216 347.57 259.12 346.61 258.928 345.949C258.747 345.277 258.357 344.941 257.76 344.941C257.163 344.941 256.773 345.266 256.592 345.917C256.421 346.557 256.336 347.463 256.336 348.637C256.336 350.002 256.384 351.042 256.48 351.757C256.576 352.471 256.725 352.962 256.928 353.229C257.131 353.485 257.408 353.613 257.76 353.613ZM263.297 353.533C263.574 353.17 264.033 352.615 264.673 351.869C265.366 351.079 265.921 350.407 266.337 349.853C266.763 349.287 267.121 348.701 267.409 348.093C267.707 347.474 267.857 346.871 267.857 346.285C267.857 345.954 267.75 345.65 267.537 345.373C267.334 345.085 267.03 344.941 266.625 344.941C266.219 344.941 265.862 345.138 265.553 345.533C265.243 345.917 265.046 346.381 264.961 346.925L263.041 346.301C263.147 345.725 263.361 345.191 263.681 344.701C264.001 344.199 264.417 343.799 264.929 343.501C265.441 343.202 266.022 343.053 266.673 343.053C267.345 343.053 267.942 343.191 268.465 343.469C268.987 343.746 269.393 344.135 269.681 344.637C269.979 345.127 270.129 345.687 270.129 346.317C270.129 347.469 269.734 348.621 268.945 349.773C268.155 350.925 267.137 352.103 265.889 353.309H270.033L269.841 355.277H263.297V353.533Z"
            fill="white"
          />
          <motion.text
            x="261.828 - 220"
            y="349.277 + 5"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            style={{
              opacity: smoothCircleOpacitySecond,
            }}
          >
            <tspan x="41.828 " dy="0">
              Catering to all industries,
            </tspan>
            <tspan x="41.828" dy="16">
              it is our motto to become
            </tspan>
            <tspan x="41.828" dy="16">
              the Precursor to Change.
            </tspan>
          </motion.text>
          <defs>
            <radialGradient
              id="paint0_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(40.8862 218.706) rotate(90) scale(22.5)"
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
              gradientTransform="translate(261.828 348.659) rotate(90) scale(22.5)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          width="389"
          height="216"
          viewBox="0 0 389 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M362.021 184.992V128.737C362.021 115.482 351.276 104.737 338.021 104.737H25.374C12.1192 104.737 1.37402 93.9921 1.37402 80.7373V56.7349C1.37402 43.48 12.1192 32.7349 25.374 32.7349H50.0238"
            stroke="white"
            strokeWidth="2"
            style={{
              pathLength: lineProgressSecond,
              pathOffset: linePathOffsetSecond,
            }}
          />
          <motion.path
            d="M362.021 184.992V128.737C362.021 115.482 351.276 104.737 338.021 104.737H25.374C12.1192 104.737 1.37402 93.9921 1.37402 80.7373V56.7349C1.37402 43.48 12.1192 32.7349 25.374 32.7349H50.0238"
            stroke="white"
            strokeWidth="2"
            style={{ opacity: 0.2 }}
          />
          <motion.circle
            cx="51.9981"
            cy="30.5605"
            r="30.172"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <motion.circle
            cx="51.998"
            cy="29.9429"
            r="26.0986"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <motion.circle
            cx="51.998"
            cy="29.943"
            r="22.5"
            fill="url(#paint0_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityThird,
              scale: smoothCircleScaleThird,
            }}
          />
          <path
            d="M47.93 36.7845C46.5434 36.7845 45.5834 36.1765 45.05 34.9605C44.5167 33.7339 44.25 32.2565 44.25 30.5285C44.25 28.8112 44.5114 27.3499 45.034 26.1445C45.5674 24.9392 46.5327 24.3365 47.93 24.3365C49.3274 24.3365 50.2927 24.9392 50.826 26.1445C51.37 27.3499 51.642 28.8059 51.642 30.5125C51.642 32.2405 51.37 33.7179 50.826 34.9445C50.2927 36.1712 49.3274 36.7845 47.93 36.7845ZM47.93 34.8965C48.2714 34.8965 48.5434 34.7739 48.746 34.5285C48.9594 34.2832 49.1194 33.8139 49.226 33.1205C49.3327 32.4272 49.386 31.4245 49.386 30.1125C49.386 28.8539 49.29 27.8939 49.098 27.2325C48.9167 26.5605 48.5274 26.2245 47.93 26.2245C47.3327 26.2245 46.9434 26.5499 46.762 27.2005C46.5914 27.8405 46.506 28.7472 46.506 29.9205C46.506 31.2859 46.554 32.3259 46.65 33.0405C46.746 33.7552 46.8954 34.2459 47.098 34.5125C47.3007 34.7685 47.578 34.8965 47.93 34.8965ZM56.5387 36.7845C55.6533 36.7845 54.88 36.5712 54.2187 36.1445C53.5573 35.7072 53.12 35.0672 52.9067 34.2245L54.6187 33.4725C54.8 33.9845 55.04 34.3525 55.3387 34.5765C55.648 34.7899 56.0107 34.8965 56.4267 34.8965C56.832 34.8965 57.168 34.7472 57.4347 34.4485C57.7013 34.1499 57.8347 33.7072 57.8347 33.1205C57.8347 32.3632 57.6107 31.8565 57.1627 31.6005C56.7253 31.3339 56.1013 31.2005 55.2907 31.2005V29.6325C55.9733 29.6325 56.5333 29.4619 56.9707 29.1205C57.4187 28.7792 57.648 28.2725 57.6587 27.6005V27.5845C57.6587 27.1579 57.5253 26.8219 57.2587 26.5765C56.992 26.3312 56.6773 26.2085 56.3147 26.2085C55.9947 26.2085 55.696 26.3099 55.4187 26.5125C55.1413 26.7045 54.9333 26.9872 54.7947 27.3605L53.1947 26.4485C53.5467 25.7125 54.0107 25.1792 54.5867 24.8485C55.1627 24.5072 55.8453 24.3365 56.6347 24.3365C57.2 24.3365 57.7333 24.4592 58.2347 24.7045C58.736 24.9392 59.1413 25.2912 59.4507 25.7605C59.7707 26.2192 59.9307 26.7685 59.9307 27.4085C59.9307 28.1019 59.76 28.6939 59.4187 29.1845C59.0773 29.6645 58.576 30.0165 57.9147 30.2405C58.5867 30.4539 59.1147 30.8325 59.4987 31.3765C59.8933 31.9099 60.0907 32.5659 60.0907 33.3445C60.0907 34.0592 59.9253 34.6779 59.5947 35.2005C59.264 35.7125 58.8267 36.1072 58.2827 36.3845C57.7493 36.6512 57.168 36.7845 56.5387 36.7845Z"
            fill="white"
          />
          <motion.text
            x="51.9981 + 40"
            y="30.5605 + 5"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            style={{
              opacity: smoothCircleOpacityThird,
            }}
          >
            <tspan x="90.8863 + 40" dy="0">
              Change that aids cultural
            </tspan>
            <tspan x="90.8863 + 40" dy="16">
              preservation of Indian{" "}
            </tspan>
            <tspan x="90.8863 + 40" dy="16">
              identities and civilizational
            </tspan>
            <tspan x="90.8863 + 40" dy="16">
              ethos.{" "}
            </tspan>
          </motion.text>
          <motion.circle
            cx="358.046"
            cy="184.992"
            r="30.172"
            fill="#EC967F"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <motion.circle
            cx="358.046"
            cy="184.375"
            r="26.0986"
            fill="#E6795D"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <motion.circle
            cx="358.046"
            cy="184.375"
            r="22.5"
            fill="url(#paint1_radial_1_3)"
            style={{
              opacity: smoothCircleOpacityFourth,
              scale: smoothCircleScaleFourth,
            }}
          />
          <path
            d="M353.978 191.216C352.592 191.216 351.632 190.608 351.098 189.392C350.565 188.166 350.298 186.688 350.298 184.96C350.298 183.243 350.56 181.782 351.082 180.576C351.616 179.371 352.581 178.768 353.978 178.768C355.376 178.768 356.341 179.371 356.874 180.576C357.418 181.782 357.69 183.238 357.69 184.944C357.69 186.672 357.418 188.15 356.874 189.376C356.341 190.603 355.376 191.216 353.978 191.216ZM353.978 189.328C354.32 189.328 354.592 189.206 354.794 188.96C355.008 188.715 355.168 188.246 355.274 187.552C355.381 186.859 355.434 185.856 355.434 184.544C355.434 183.286 355.338 182.326 355.146 181.664C354.965 180.992 354.576 180.656 353.978 180.656C353.381 180.656 352.992 180.982 352.81 181.632C352.64 182.272 352.554 183.179 352.554 184.352C352.554 185.718 352.602 186.758 352.698 187.472C352.794 188.187 352.944 188.678 353.146 188.944C353.349 189.2 353.626 189.328 353.978 189.328ZM362.987 191.088V187.984H358.971V186.192L362.891 178.992H365.243V186.192H366.747L366.555 187.984H365.243V190.896L362.987 191.088ZM360.843 186.192H362.987V181.984L360.843 186.192Z"
            fill="white"
          />
          <motion.text
            x="358.046 - 220"
            y="184.992 + 5"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            style={{
              opacity: smoothCircleOpacityFourth,
            }}
          >
            <tspan x="161.828 " dy="0">
              Catering to all industries,
            </tspan>
            <tspan x="161.828 " dy="16">
              our motto is to be the
            </tspan>
            <tspan x="161.828 " dy="16">
              Precursor to Change
            </tspan>
          </motion.text>
          <defs>
            <radialGradient
              id="paint0_radial_1_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(51.998 29.943) rotate(90) scale(22.5)"
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
              gradientTransform="translate(358.046 184.375) rotate(90) scale(22.5)"
            >
              <stop stop-color="#E6795D" />
              <stop offset="1" stop-color="#EE360B" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          width="366"
          height="229"
          viewBox="0 0 366 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M364.046 1.16296V86.6879C364.046 99.9427 353.301 110.688 340.046 110.688H25C11.7451 110.688 1 121.433 1 134.688V227.673"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: lineProgressThird,
            }}
          />
          <motion.path
            d="M364.046 1.16296V86.6879C364.046 99.9427 353.301 110.688 340.046 110.688H25C11.7451 110.688 1 121.433 1 134.688V227.673"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ opacity: 0.2 }}
          />
        </svg>
        <div className="absolute bottom-[66px] left-[40%] w-full  ">
          <svg
            width="233"
            height="107"
            viewBox="0 0 233 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1.41016 0.945923V81.6115C1.41016 94.8664 12.1553 105.612 25.4102 105.612H233.985"
              stroke="#DD4D2B"
              stroke-width="2"
              style={{ pathLength: lineProgressForth }}
            />
            <path
              d="M1.41016 0.945923V81.6115C1.41016 94.8664 12.1553 105.612 25.4102 105.612H233.985"
              stroke="#DD4D2B"
              stroke-width="2"
              style={{ opacity: 0.2 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMbl;
