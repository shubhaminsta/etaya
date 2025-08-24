"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus. Et non habitant risus ut.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null); // Ref for the bulb SVG
  const [isBulbOn, setIsBulbOn] = useState(false); // State for bulb on/off

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const secondPathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const thirdPathLength = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Scroll-based transforms for text
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const paragraphOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const paragraphY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  // Scroll-based transforms for cards (staggered)
  const getCardOpacity = (index) =>
    useTransform(
      scrollYProgress,
      [0.2 + index * 0.1, 0.3 + index * 0.1],
      [0.4, 1]
    );
  const getCardY = (index) =>
    useTransform(
      scrollYProgress,
      [0.2 + index * 0.1, 0.4 + index * 0.1],
      [50, 0]
    );

  const svgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Intersection Observer to detect when bulb SVG enters/exits viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBulbOn(true); // Turn bulb "on" when it enters the viewport
        } else {
          setIsBulbOn(false); // Turn bulb "off" when it exits the viewport
        }
      },
      {
        threshold: 0.7, // Trigger when 70% of the SVG is visible
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black w-full overflow-hidden"
    >
      {/* Mobile and Tablet View */}
      <div className="xl:hidden flex flex-col items-center w-full px-4 py-8">
        {/* Bulb SVG at the top */}
        <motion.div
          style={{ opacity: svgOpacity }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <svg
            ref={svgRef}
            width="300"
            height="500"
            viewBox="0 0 403 656"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[300px]"
          >
            <motion.path
              d="M224.285 0.809082V218.605"
              stroke="#EE360B"
              strokeWidth="4"
              style={{ pathLength: thirdPathLength }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <path
              d="M224.285 0.809082V218.605"
              stroke="#EE360B"
              strokeWidth="4"
              style={{ opacity: 0.2 }}
            />
            <motion.path
              d="M96.54 534.326C78.0571 495.97 78.8679 453.784 94.6729 418.172C105.716 393.245 124.194 371.509 148.532 356.587C160.512 349.254 168.139 336.517 168.793 322.522C204.999 315.574 240.301 316.402 274.741 324.989C274.406 337.413 280.745 349.12 291.46 355.469C316.067 370.049 336.412 392.467 348.293 420.859C349.231 423.1 350.1 425.373 350.935 427.663L350.934 427.663C376.173 498.118 340.537 576.955 268.798 603.599C202.601 628.211 127.185 597.904 96.54 534.326Z"
              fill={isBulbOn ? "#F1542F" : "#606060"}
              fillOpacity={isBulbOn ? 0.53 : 0.2}
              stroke="#DD4D2B"
              animate={{
                fill: isBulbOn ? "#F1542F" : "#606060",
                fillOpacity: isBulbOn ? 0.53 : 0.2,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M168.316 322.117C204.863 315.05 240.499 315.887 275.259 324.614C274.775 337.011 281.049 348.73 291.72 355.053C316.413 369.688 336.832 392.188 348.756 420.681C349.698 422.933 350.574 425.212 351.41 427.508C376.737 498.221 340.976 577.342 268.978 604.081C202.54 628.784 126.852 598.368 96.0951 534.557C77.5421 496.064 78.3561 453.724 94.2214 417.983C105.304 392.966 123.849 371.15 148.276 356.175C160.23 348.857 167.797 336.1 168.316 322.117Z"
              fill={isBulbOn ? "#F1542F" : "#606060"}
              fillOpacity={isBulbOn ? 0.53 : 0.2}
              stroke="#DD4D2B"
              strokeWidth="2"
              strokeMiterlimit="10"
              animate={{
                fill: isBulbOn ? "#F1542F" : "#606060",
                fillOpacity: isBulbOn ? 0.53 : 0.2,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <path
              d="M245.772 401.953L245.437 417.264C245.245 426.393 250.615 434.976 259.197 438.086C264.856 440.141 271.057 439.737 275.57 431.937C285.755 414.364 265.709 406.297 255.012 403.373C252.01 402.526 248.928 402.079 245.772 401.953Z"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M200.363 400.99L200.028 416.301C199.836 425.43 194.122 433.82 185.42 436.552C179.687 438.372 173.49 437.699 169.327 429.727C159.906 411.761 180.286 404.514 191.043 402.038C194.133 401.324 197.23 401.015 200.363 400.99Z"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M202.063 320.537L201.309 356.486L200.94 373.506L200.386 400.443L200.362 400.99C200.777 400.982 201.153 400.99 201.56 400.985L223.063 401.452L244.582 401.868C244.96 401.88 245.382 401.91 245.772 401.953L245.796 401.406L246.603 361.632L246.676 358.542L247.458 321.466"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <motion.path
              d="M179.193 240.471C193.26 235.535 207.693 233.054 221.959 232.744C236.226 232.436 250.322 234.391 263.772 238.358C265.799 238.952 267.809 239.603 269.781 240.262C274.907 242.044 278.185 247.001 278.007 252.408L275.255 324.615C240.496 315.888 204.861 315.055 168.313 322.119L170.991 251.514C171.173 246.514 174.414 242.099 179.193 240.471Z"
              fill={isBulbOn ? "white" : "#A0A0A0"}
              animate={{ fill: isBulbOn ? "white" : "#A0A0A0" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M242.038 571.454C165.287 540.02 122.414 461.036 133.494 382.533C119.947 394.672 108.856 409.983 101.487 427.94C75.3925 491.52 105.801 564.186 169.403 590.234C206.863 605.574 247.473 601.304 279.871 582.227C267.148 580.074 254.471 576.549 242.038 571.454Z"
              fill={isBulbOn ? "#F1542F" : "#606060"}
              fillOpacity={isBulbOn ? 0.53 : 0.2}
              animate={{
                fill: isBulbOn ? "#F1542F" : "#606060",
                fillOpacity: isBulbOn ? 0.53 : 0.2,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <path
              d="M178.511 317.851L182.047 243.881"
              stroke="#CECECE"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
            <motion.path
              d="M226.474 236.009C228.875 236.716 231.252 237.482 233.586 238.266C239.655 240.373 243.527 246.235 243.318 252.635L240.817 318.346C252.016 319.525 263.137 321.407 274.157 324.174L276.909 251.967C277.087 246.56 273.814 241.605 268.682 239.821C266.709 239.159 264.702 238.515 262.675 237.912C249.226 233.954 235.127 231.995 220.864 232.301C218.307 232.358 215.747 232.508 213.182 232.705C217.66 233.629 222.099 234.719 226.474 236.009Z"
              fill={isBulbOn ? "#CECECE" : "#808080"}
              animate={{ fill: isBulbOn ? "#CECECE" : "#808080" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <path
              d="M170.225 565.195C142.228 555.122 122.267 532.777 114.23 506.374"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M115.684 449.244C111.597 460.582 109.913 472.225 110.361 483.575"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M179.193 240.471C193.26 235.535 207.693 233.054 221.959 232.744C236.226 232.436 250.322 234.391 263.772 238.358C265.799 238.952 267.809 239.603 269.781 240.262C274.907 242.044 278.185 247.001 278.007 252.408L275.255 324.615C240.496 315.888 204.861 315.055 168.313 322.119L170.991 251.514C171.173 246.514 174.414 242.099 179.193 240.471Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M248.743 233.374C233.02 230.905 216.724 231.106 200.572 234.314L200.796 231.794C201.474 224.223 207.289 218.131 214.815 217.036C221.467 216.067 228.216 216.202 235.062 217.368C242.893 218.704 248.679 225.431 248.743 233.374Z"
              fill="#393939"
            />
            <path
              d="M178.818 243.261L275.425 261.896L274.839 277.28L172.925 257.62L173.115 252.865C173.274 248.875 175.45 245.266 178.818 243.261Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M171.194 303.807L240.96 317.256C217.903 314.855 194.445 315.954 170.549 320.563L171.194 303.807Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M216.843 235.079C218.589 234.981 220.266 234.915 221.991 234.867C235.671 234.57 249.187 236.442 262.079 240.244C264.027 240.818 265.954 241.438 267.842 242.074C270.058 242.813 271.866 244.197 273.202 245.978L216.843 235.079Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M172.925 257.619L274.842 277.278L274.257 292.665L172.358 273.04L172.925 257.619Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M172.353 273.038L274.257 292.665L273.639 308.07L171.772 288.424L172.353 273.038Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M171.777 288.425L273.641 308.065L273.091 322.962C262.45 320.28 251.744 318.382 240.962 317.259L171.198 303.806L171.777 288.425Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M178.817 243.261C179.519 242.852 180.228 242.559 180.983 242.276C192.778 238.138 204.841 235.777 216.807 235.093L216.842 235.079L273.204 245.981C274.895 248.125 275.844 250.858 275.732 253.724L275.425 261.896L178.817 243.261Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
          </svg>
        </motion.div>

        {/* Heading and Paragraph */}
        <motion.div className="w-full max-w-md mb-8 text-center">
          <motion.h2
            className="font-[Francois_One] text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] text-[#DD4D2B] font-normal"
            style={{
              opacity: headingOpacity,
              y: headingY,
              scale: headingScale,
            }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="font-[Open_Sans] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.5px] text-white mt-4"
            style={{ opacity: paragraphOpacity, y: paragraphY }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis
            parturient consequat sit phasellus. Et non habitant risus ut.
          </motion.p>
        </motion.div>

        {/* Testimonials Cards */}
        <div className="flex justify-center flex-wrap gap-6 w-full max-w-lg">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              style={{ opacity: getCardOpacity(index), y: getCardY(index) }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-4 -left-4"
              >
                <circle cx="27.5098" cy="27.4214" r="27" fill="#DD4D2B" />
              </svg>
              <div className="bg-white text-black relative w-[163px] sm:w-[220px] rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
                <h3 className="text-lg sm:text-xl font-semibold">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.location}</p>
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0264 0.310059L14.7205 8.60185H23.439L16.3856 13.7265L19.0798 22.0183L12.0264 16.8937L4.97294 22.0183L7.66711 13.7265L0.613689 8.60185H9.3322L12.0264 0.310059Z"
                      fill="#DD4D2B"
                    />
                  </svg>
                  <span className="text-sm">{t.rating}</span>
                </div>
                <p className="text-gray-700 mt-4 text-[14px] sm:text-[16px]">
                  {t.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
