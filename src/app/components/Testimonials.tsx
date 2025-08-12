"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus.. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus.. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus.. Et non habitant risus ut.",
  },
  {
    name: "Lorem Ipsum",
    location: "Location",
    rating: "4.6 ratings",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus.. Et non habitant risus ut.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const secondPathLength = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
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
      [0.2 + index * 0.1, 0.4 + index * 0.1],
      [0, 1]
    );
  const getCardY = (index) =>
    useTransform(
      scrollYProgress,
      [0.2 + index * 0.1, 0.4 + index * 0.1],
      [50, 0]
    );

  const svgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex py-20 bg-[#393939] w-full max-w-[1440px] overflow-hidden"
    >
      <div>
        {/* Heading with Scroll-Based Animation */}
        <motion.div className="text-center mx-auto mb-8">
          <motion.h2
            className="text-5xl font-bold font-[Francois_One] text-[#DD4D2B]"
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
            className="text-white text-lg mt-4"
            style={{ opacity: paragraphOpacity, y: paragraphY }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis
            parturient consequat sit phasellus.. Et non habitant risus ut.
          </motion.p>
        </motion.div>

        {/* Cards with Staggered Scroll-Based Animation */}
        <div className="flex flex-wrap gap-8 max-w-3xl mx-auto relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white text-black relative h-[300px] w-[240px] rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
              style={{ opacity: getCardOpacity(index), y: getCardY(index) }}
              transition={{ duration: 0.5 }}
            >
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-6 -left-6"
              >
                <circle cx="27.5098" cy="27.4214" r="27" fill="#DD4D2B" />
              </svg>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.location}</p>
              <div className="flex items-center gap-2 mt-2">
                <svg
                  width="24"
                  height="23"
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
              <p className="text-gray-700 mt-4 text-[16px]">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        style={{ opacity: svgOpacity }}
        transition={{ duration: 0.5 }}
      >
        {/* First SVG Line Animation */}
        <motion.svg
          width="268"
          height="916"
          viewBox="0 0 268 916"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ pathLength }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.path
            d="M0 2.64111H166C221.228 2.64111 266 47.4126 266 102.641V915.801"
            stroke="#EE360B"
            strokeWidth="4"
            style={{ pathLength: secondPathLength }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      <div className="flex flex-col justify-start items-center">
        {/* Second SVG Line Animation */}
        <motion.svg
          width="5"
          height="219"
          viewBox="0 0 5 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ pathLength: secondPathLength }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.path
            d="M2.28467 0.809082V218.605"
            stroke="#EE360B"
            strokeWidth="4"
            style={{ pathLength: thirdPathLength }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Third SVG Animation */}
        <motion.svg
          width="403"
          height="458"
          viewBox="0 0 403 458"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: svgOpacity }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            d="M96.54 336.326C78.0571 297.97 78.8679 255.784 94.6729 220.172C105.716 195.245 124.194 173.509 148.532 158.587C160.512 151.254 168.139 138.517 168.793 124.522C204.999 117.574 240.301 118.402 274.741 126.989C274.406 139.413 280.745 151.12 291.46 157.469C316.067 172.049 336.412 194.467 348.293 222.859C349.231 225.1 350.1 227.373 350.935 229.663L350.934 229.663C376.173 300.118 340.537 378.955 268.798 405.599C202.601 430.211 127.185 399.904 96.54 336.326Z"
            fill="#F1542F"
            fillOpacity="0.53"
            stroke="#DD4D2B"
          />
          <motion.path
            d="M168.316 124.117C204.863 117.05 240.499 117.887 275.259 126.614C274.775 139.011 281.049 150.73 291.72 157.053C316.413 171.688 336.832 194.188 348.756 222.681C349.698 224.933 350.574 227.212 351.41 229.508C376.737 300.221 340.976 379.342 268.978 406.081C202.54 430.784 126.852 400.368 96.0951 336.557C77.5421 298.064 78.3561 255.724 94.2214 219.983C105.304 194.966 123.849 173.15 148.276 158.175C160.23 150.857 167.797 138.1 168.316 124.117Z"
            stroke="#DD4D2B"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M245.772 203.953L245.437 219.264C245.245 228.393 250.615 236.976 259.197 240.086C264.856 242.141 271.057 241.737 275.57 233.937C285.755 216.364 265.709 208.297 255.012 205.373C252.01 204.526 248.928 204.079 245.772 203.953Z"
            stroke="#EE360B"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M200.363 202.99L200.028 218.301C199.836 227.43 194.122 235.82 185.42 238.552C179.687 240.372 173.49 239.699 169.327 231.727C159.906 213.761 180.286 206.514 191.043 204.038C194.133 203.324 197.23 203.015 200.363 202.99Z"
            stroke="#EE360B"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <motion.path
            d="M202.063 122.537L201.309 158.486L200.94 175.506L200.386 202.443L200.362 202.99C200.777 202.982 201.153 202.99 201.56 202.985L223.063 203.452L244.582 203.868C244.96 203.88 245.382 203.91 245.772 203.953L245.796 203.406L246.603 163.632L246.676 160.542L247.458 123.466"
            stroke="#EE360B"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M179.193 42.4707C193.26 37.5347 207.693 35.0541 221.959 34.7435C236.226 34.4364 250.322 36.3915 263.772 40.3579C265.799 40.9521 267.809 41.6033 269.781 42.2622C274.907 44.0441 278.185 49.0011 278.007 54.4081L275.255 126.615C240.496 117.888 204.861 117.055 168.313 124.119L170.991 53.5135C171.173 48.5137 174.414 44.0986 179.193 42.4707Z"
            fill="white"
          />
          <path
            d="M242.038 373.454C165.287 342.02 122.414 263.036 133.494 184.533C119.947 196.672 108.856 211.983 101.487 229.94C75.3925 293.52 105.801 366.186 169.403 392.234C206.863 407.574 247.473 403.304 279.871 384.227C267.148 382.074 254.471 378.549 242.038 373.454Z"
            fill="#F1542F"
            fillOpacity="0.53"
          />
          <path
            d="M178.511 119.851L182.047 45.8811"
            stroke="#CECECE"
            strokeWidth="4"
            strokeMiterlimit="10"
          />
          <path
            d="M226.474 38.0093C228.875 38.7158 231.252 39.4823 233.586 40.2664C239.655 42.3731 243.527 48.2349 243.318 54.6347L240.817 120.346C252.016 121.525 263.137 123.407 274.157 126.174L276.909 53.967C277.087 48.5599 273.814 43.605 268.682 41.8211C266.709 41.1587 264.702 40.5145 262.675 39.9117C249.226 35.9539 235.127 33.9953 220.864 34.3009C218.307 34.3583 215.747 34.5078 213.182 34.7048C217.66 35.6294 222.099 36.719 226.474 38.0093Z"
            fill="#CECECE"
          />
          <path
            d="M170.225 367.195C142.228 357.122 122.267 334.777 114.23 308.374"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M115.684 251.244C111.597 262.582 109.913 274.225 110.361 285.575"
            stroke="white"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M179.193 42.4707C193.26 37.5347 207.693 35.0541 221.959 34.7435C236.226 34.4364 250.322 36.3915 263.772 40.3579C265.799 40.9521 267.809 41.6033 269.781 42.2622C274.907 44.0441 278.185 49.0011 278.007 54.4081L275.255 126.615C240.496 117.888 204.861 117.055 168.313 124.119L170.991 53.5135C171.173 48.5137 174.414 44.0986 179.193 42.4707Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M248.743 35.3743C233.02 32.9049 216.724 33.1064 200.572 36.3144L200.796 33.7943C201.474 26.2226 207.289 20.1307 214.815 19.036C221.467 18.0672 228.216 18.2024 235.062 19.368C242.893 20.7041 248.679 27.4312 248.743 35.3743Z"
            fill="#393939"
          />
          <path
            d="M178.818 45.2609L275.425 63.8965L274.839 79.2798L172.925 59.6196L173.115 54.8647C173.274 50.8752 175.45 47.2656 178.818 45.2609Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M171.194 105.807L240.96 119.256C217.903 116.855 194.445 117.954 170.549 122.563L171.194 105.807Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M216.843 37.0788C218.589 36.9806 220.266 36.9154 221.991 36.8672C235.671 36.5702 249.187 38.4418 262.079 42.2443C264.027 42.8179 265.954 43.4379 267.842 44.074C270.058 44.8126 271.866 46.1973 273.202 47.9777L216.843 37.0788Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M172.925 59.6194L274.842 79.2782L274.257 94.665L172.358 75.04L172.925 59.6194Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M172.353 75.0382L274.257 94.6653L273.639 110.07L171.772 90.4236L172.353 75.0382Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M171.777 90.4254L273.641 110.065L273.091 124.962C262.45 122.28 251.744 120.382 240.962 119.259L171.198 105.806L171.777 90.4254Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
          <path
            d="M178.817 45.2609C179.519 44.8515 180.228 44.559 180.983 44.2763C192.778 40.1382 204.841 37.7771 216.807 37.0933L216.842 37.0786L273.204 47.981C274.895 50.1254 275.844 52.8576 275.732 55.7237L275.425 63.8965L178.817 45.2609Z"
            stroke="#393939"
            strokeWidth="2"
            strokeMiterlimit="2"
          />
        </motion.svg>
      </div>
    </section>
  );
}
