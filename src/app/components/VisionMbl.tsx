"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const VisionMbl = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll progress transformations
  const lineProgressFirst = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.36], [0, 1]);

  // Circle animations: scale and opacity based on scroll progress
  const circleScale1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const circleOpacity1 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const circleScale2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const circleOpacity2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const circleScale3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const circleOpacity3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest); // value between 0 and 1
  });

  const pipeRadius = 3; // pipe radius in px
  const strokeWidth = pipeRadius * 1; // pipe thickness (diameter)

  return (
    <div
      ref={ref}
      className="xl:hidden flex flex-col items-center justify-center w-full h-full px-[5%]"
    >
      <div className="w-full">
        <div className="relative">
          {/* Our Vision */}
          <motion.h2
            className="font-[400] text-[45px] leading-[52px] font-[Francois_One] text-[#DD4D2B]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Vision
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="font-[400] text-[16px] leading-[24px] tracking-[0.5px] font-[Open_Sans] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            It is our Vision to make India the epicenter for research &
            development. For far too long India, has taken a Servicing Stance
            when it comes to delivering innovation. We wish to drive a Creative
            Stance in the development process. <br />
            <br />
            <strong>Mission:</strong> It is our Mission to use our expertise to
            generate, drive and deliver innovative brilliance out of India, that
            best suits India’s changing civilizational, industrial, scientific,
            economic and development needs.
          </motion.p>
        </div>
        <div className="w-full  flex justify-center items-center mt-[50px]">
          <div className="w-full overflow-hidden">
            <div className="relative ">
              <div className="flex flex-col items-center">
                <svg
                  width="257"
                  height="409"
                  viewBox="0 0 257 409"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M118.379 281.673L118.379 408.673"
                    stroke="#DD4D2B"
                    strokeWidth="3"
                    style={{ pathLength: lineProgressFirst }}
                  />
                  <motion.path
                    d="M118.379 281.673L118.379 408.673"
                    stroke="#DD4D2B"
                    strokeWidth="3"
                    style={{ opacity: 0.2 }}
                  />
                  {/* Animated Circle 1 */}
                  <motion.circle
                    cx="122.879"
                    cy="123.173"
                    r="122.5"
                    fill="#F6C6B7"
                    style={{
                      scale: circleScale1,
                      opacity: circleOpacity1,
                      originX: 0.5,
                      originY: 0.5,
                    }}
                  />
                  {/* Animated Circle 2 */}
                  <motion.ellipse
                    cx="123.379"
                    cy="123.173"
                    rx="110"
                    ry="110.5"
                    fill="#EC967F"
                    style={{
                      scale: circleScale2,
                      opacity: circleOpacity2,
                      originX: 0.5,
                      originY: 0.5,
                    }}
                  />
                  {/* Animated Circle 3 */}
                  <motion.ellipse
                    cx="123.379"
                    cy="123.173"
                    rx="99"
                    ry="98.5"
                    fill="#E6795D"
                    style={{
                      scale: circleScale3,
                      opacity: circleOpacity3,
                      originX: 0.5,
                      originY: 0.5,
                    }}
                  />
                  <path
                    d="M154.253 217.275C131.87 221.402 110.086 220.701 88.8804 215.18C89.2398 207.604 85.4687 200.404 78.9778 196.481C63.9555 187.403 51.5907 173.537 44.4519 156.053C43.8878 154.671 43.3669 153.272 42.8677 151.864C27.7566 108.495 50.0443 60.3085 94.2072 44.3426C134.96 29.5926 181.075 48.5921 199.541 87.7705C210.677 111.405 209.955 137.288 200.066 159.056C193.157 174.293 181.702 187.532 166.688 196.559C159.34 200.969 154.645 208.729 154.253 217.275Z"
                    fill="url(#paint0_radial_1_3)"
                  />
                  <path
                    d="M154.25 217.266C131.867 221.393 110.083 220.692 88.8766 215.171C89.2382 207.594 85.4649 200.395 78.974 196.472C63.9539 187.393 51.5891 173.528 44.4502 156.043C43.8862 154.661 43.3632 153.263 42.8639 151.855C27.755 108.485 50.0405 60.2996 94.2034 44.3337C134.956 29.5837 181.071 48.5832 199.537 87.7616C210.676 111.396 209.953 137.278 200.062 159.047C193.153 174.284 181.699 187.523 166.684 196.55C159.336 200.96 154.641 208.72 154.25 217.266Z"
                    stroke="#DD4D2B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M107.316 168.041L107.603 158.682C107.769 153.101 104.531 147.825 99.3002 145.878C95.8514 144.591 92.0577 144.805 89.257 149.55C82.936 160.24 95.1499 165.28 101.674 167.124C103.505 167.658 105.388 167.947 107.316 168.041Z"
                    stroke="#EE360B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M135.075 168.872L135.362 159.512C135.528 153.932 139.066 148.833 144.401 147.208C147.916 146.126 151.701 146.57 154.204 151.467C159.869 162.502 147.369 166.824 140.779 168.281C138.887 168.701 136.991 168.873 135.075 168.872Z"
                    stroke="#EE360B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M133.607 218.053L134.26 196.077L134.576 185.673L135.058 169.206L135.075 168.872C134.822 168.875 134.592 168.868 134.343 168.869L121.198 168.468L108.043 168.1C107.813 168.091 107.555 168.07 107.316 168.041L107.299 168.376L106.593 192.69L106.533 194.579L105.857 217.244"
                    stroke="#EE360B"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M147.165 267.128C138.538 270.071 129.7 271.511 120.976 271.625C112.252 271.737 103.643 270.467 95.4413 267.97C94.2049 267.596 92.9794 267.187 91.7774 266.774C88.6525 265.657 86.6746 262.609 86.8122 259.304L88.879 215.17C110.085 220.691 131.868 221.39 154.252 217.265L152.239 260.42C152.101 263.476 150.096 266.158 147.165 267.128Z"
                    fill="white"
                  />
                  <path
                    d="M110.501 64.4251C157.261 84.053 183.054 132.573 175.862 180.512C184.21 173.162 191.072 163.86 195.673 152.92C211.966 114.185 193.76 69.5941 155.012 53.3291C132.189 43.751 107.337 46.1458 87.4269 57.6371C95.1949 59.0215 102.927 61.244 110.501 64.4251Z"
                    fill="#DD4D2B"
                  />
                  <path
                    d="M147.994 219.82L145.438 265.027"
                    stroke="#CECECE"
                    strokeWidth="4"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M118.233 269.604C116.769 269.16 115.32 268.678 113.896 268.187C110.197 266.866 107.861 263.262 108.023 259.35L109.901 219.186C103.06 218.406 96.2709 217.196 89.5479 215.445L87.4811 259.579C87.3436 262.884 89.3184 265.931 92.4463 267.049C93.6493 267.465 94.8729 267.869 96.109 268.249C104.311 270.74 112.921 272.013 121.643 271.902C123.207 271.88 124.773 271.802 126.342 271.696C123.609 271.106 120.901 270.417 118.233 269.604Z"
                    fill="#CECECE"
                  />
                  <path
                    d="M154.375 68.6342C171.439 74.9421 183.525 88.7099 188.299 104.896"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M187.106 139.819C189.665 132.908 190.757 125.799 190.543 118.857"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M147.165 267.128C138.538 270.071 129.7 271.511 120.976 271.625C112.252 271.737 103.643 270.467 95.4413 267.97C94.2049 267.596 92.9794 267.187 91.7774 266.774C88.6525 265.657 86.6746 262.609 86.8122 259.304L88.879 215.17C110.085 220.691 131.868 221.39 154.252 217.265L152.239 260.42C152.101 263.476 150.096 266.158 147.165 267.128Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M104.603 271.097C114.203 272.69 124.168 272.654 134.061 270.778L133.911 272.318C133.455 276.944 129.868 280.638 125.261 281.267C121.189 281.824 117.062 281.705 112.883 280.956C108.102 280.098 104.601 275.954 104.603 271.097Z"
                    fill="#393939"
                  />
                  <path
                    d="M147.41 265.425L88.4412 253.516L88.8817 244.114L151.089 256.677L150.947 259.583C150.829 262.021 149.48 264.217 147.41 265.425Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M152.393 228.446L109.808 219.852C123.893 221.443 138.242 220.896 152.876 218.205L152.393 228.446Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M124.117 270.224C123.049 270.275 122.023 270.306 120.968 270.326C112.602 270.435 104.349 269.219 96.4861 266.825C95.2978 266.464 94.1232 266.075 92.9724 265.676C91.6214 265.213 90.5233 264.356 89.7155 263.261L124.117 270.224Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M151.089 256.676L88.8796 244.115L89.3192 234.71L151.517 247.251L151.089 256.676Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M151.52 247.252L89.319 234.71L89.7792 225.294L151.958 237.848L151.52 247.252Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M151.954 237.847L89.7778 225.297L90.1934 216.192C96.6851 217.888 103.221 219.106 109.807 219.85L152.39 228.446L151.954 237.847Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <path
                    d="M147.409 265.424C146.978 265.671 146.543 265.846 146.08 266.015C138.847 268.482 131.459 269.861 124.139 270.216L124.117 270.225L89.7148 263.259C88.6919 261.939 88.1263 260.263 88.21 258.511L88.4411 253.516L147.409 265.424Z"
                    stroke="#393939"
                    strokeWidth="2"
                    strokeMiterlimit="2"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_1_3"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(125.472 130.263) rotate(157.791) scale(84.7569 91.4359)"
                    >
                      <stop stop-color="#F5603C" stop-opacity="0.87" />
                      <stop offset="1" stop-color="#EE360B" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMbl;
