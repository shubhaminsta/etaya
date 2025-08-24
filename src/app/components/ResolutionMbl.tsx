import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ResolutionMbl = () => {
  // Add a ref to track the component's scroll position
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Start when component enters viewport, end when it exits
  });

  // Animation for the line (pathLength from 0 to 1)
  const lineProgress = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  // Animations for circles (opacity and scale, staggered)
  const circleOpacity1 = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    { stiffness: 100, damping: 20 }
  );
  const circleScale1 = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.5, 1]),
    { stiffness: 100, damping: 20 }
  );
  const circleOpacity2 = useSpring(
    useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
    { stiffness: 100, damping: 20 }
  );
  const circleScale2 = useSpring(
    useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1]),
    { stiffness: 100, damping: 20 }
  );
  const circleOpacity3 = useSpring(
    useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
    { stiffness: 100, damping: 20 }
  );
  const circleScale3 = useSpring(
    useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1]),
    { stiffness: 100, damping: 20 }
  );

  return (
    <div className="xl:hidden w-full h-[910px]">
      <div className="relative " ref={ref}>
        <div className="relative right-[10px] flex flex-col items-center w-full   h-[367px]">
          <svg
            width="257"
            height="342"
            viewBox="0 0 257 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M138.875 0V61.9248"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ pathLength: lineProgress }}
            />
            <motion.path
              d="M138.875 0V61.9248"
              stroke="#DD4D2B"
              strokeWidth="3"
              style={{ opacity: 0.2 }}
            />
            <motion.circle
              cx="134.121"
              cy="218.575"
              r="122.5"
              transform="rotate(180 134.121 218.575)"
              fill="#F6C6B7"
              style={{ opacity: circleOpacity1, scale: circleScale1 }}
            />
            <motion.ellipse
              cx="133.621"
              cy="218.575"
              rx="110"
              ry="110.5"
              transform="rotate(180 133.621 218.575)"
              fill="#EC967F"
              style={{ opacity: circleOpacity2, scale: circleScale2 }}
            />
            <motion.ellipse
              cx="133.621"
              cy="218.575"
              rx="99"
              ry="98.5"
              transform="rotate(180 133.621 218.575)"
              fill="#E6795D"
              style={{ opacity: circleOpacity3, scale: circleScale3 }}
            />
            <path
              d="M102.747 124.474C125.13 120.347 146.913 121.048 168.12 126.569C167.76 134.145 171.531 141.345 178.022 145.268C193.044 154.346 205.409 168.212 212.548 185.696C213.112 187.078 213.633 188.477 214.132 189.885C229.243 233.254 206.956 281.44 162.793 297.406C122.04 312.156 75.925 293.157 57.4592 253.979C46.3225 230.344 47.0455 204.461 56.9338 182.693C63.843 167.456 75.2977 154.217 90.3123 145.19C97.66 140.78 102.355 133.02 102.747 124.474Z"
              fill="url(#paint0_radial_1_3)"
            />
            <path
              d="M102.75 124.482C125.133 120.356 146.917 121.057 168.123 126.578C167.762 134.155 171.535 141.354 178.026 145.277C193.046 154.356 205.411 168.221 212.55 185.706C213.114 187.088 213.637 188.486 214.136 189.894C229.245 233.264 206.959 281.449 162.797 297.415C122.044 312.165 75.9288 293.166 57.463 253.987C46.3241 230.353 47.0471 204.47 56.9376 182.702C63.8468 167.465 75.3015 154.225 90.3161 145.199C97.6638 140.789 102.359 133.029 102.75 124.482Z"
              stroke="#DD4D2B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M149.683 173.708L149.397 183.068C149.231 188.648 152.469 193.925 157.699 195.872C161.148 197.158 164.942 196.944 167.743 192.199C174.064 181.509 161.85 176.47 155.325 174.625C153.494 174.091 151.612 173.802 149.683 173.708Z"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M121.924 172.877L121.638 182.237C121.472 187.817 117.934 192.916 112.599 194.541C109.084 195.623 105.299 195.179 102.795 190.282C97.1306 179.247 109.63 174.925 116.22 173.468C118.113 173.048 120.009 172.876 121.924 172.877Z"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M123.392 123.696L122.74 145.672L122.424 156.076L121.941 172.543L121.924 172.877C122.178 172.874 122.407 172.881 122.656 172.88L135.802 173.281L148.956 173.649C149.187 173.658 149.445 173.679 149.683 173.708L149.701 173.373L150.406 149.059L150.467 147.17L151.143 124.505"
              stroke="#EE360B"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M109.835 74.6205C118.462 71.6774 127.3 70.2375 136.024 70.1235C144.748 70.0116 153.357 71.282 161.559 73.7786C162.795 74.1528 164.021 74.5616 165.223 74.975C168.347 76.0917 170.325 79.1399 170.188 82.4449L168.121 126.579C146.915 121.058 125.132 120.359 102.748 124.484L104.761 81.3286C104.899 78.2726 106.904 75.5904 109.835 74.6205Z"
              fill="white"
            />
            <path
              d="M146.499 277.323C99.7393 257.696 73.9464 209.176 81.1382 161.237C72.7905 168.586 65.9279 177.889 61.3268 188.829C45.0342 227.563 63.2401 272.154 101.988 288.419C124.811 297.998 149.663 295.603 169.573 284.111C161.805 282.727 154.073 280.504 146.499 277.323Z"
              fill="#DD4D2B"
            />
            <path
              d="M109.006 121.929L111.562 76.7212"
              stroke="#CECECE"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
            <path
              d="M138.767 72.1444C140.231 72.5892 141.68 73.0704 143.104 73.5623C146.803 74.8826 149.139 78.4872 148.977 82.3991L147.099 122.563C153.94 123.343 160.729 124.553 167.452 126.303L169.519 82.1695C169.656 78.8645 167.682 75.8176 164.554 74.6996C163.351 74.284 162.127 73.8795 160.891 73.5002C152.689 71.0087 144.079 69.7362 135.357 69.8472C133.793 69.8687 132.227 69.9464 130.657 70.0533C133.391 70.6424 136.099 71.3322 138.767 72.1444Z"
              fill="#CECECE"
            />
            <path
              d="M102.625 273.114C85.5607 266.806 73.4752 253.038 68.7012 236.852"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M69.8942 201.93C67.335 208.84 66.2433 215.95 66.4565 222.892"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M109.835 74.6205C118.462 71.6774 127.3 70.2375 136.024 70.1235C144.748 70.0116 153.357 71.282 161.559 73.7786C162.795 74.1528 164.021 74.5616 165.223 74.975C168.347 76.0917 170.325 79.1399 170.188 82.4449L168.121 126.579C146.915 121.058 125.132 120.359 102.748 124.484L104.761 81.3286C104.899 78.2726 106.904 75.5904 109.835 74.6205Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M152.397 70.6518C142.797 69.0583 132.832 69.0949 122.939 70.9704L123.089 69.4307C123.545 64.8048 127.132 61.1111 131.739 60.4818C135.811 59.9248 139.938 60.0434 144.117 60.7926C148.898 61.6511 152.399 65.7949 152.397 70.6518Z"
              fill="#393939"
            />
            <path
              d="M109.59 76.3245L168.559 88.2325L168.118 97.635L105.911 85.0722L106.053 82.166C106.171 79.7277 107.52 77.5323 109.59 76.3245Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M104.607 113.303L147.192 121.897C133.107 120.306 118.758 120.853 104.124 123.544L104.607 113.303Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M132.883 71.5244C133.951 71.4737 134.977 71.4427 136.032 71.4224C144.398 71.3136 152.651 72.5299 160.514 74.9233C161.702 75.2844 162.877 75.6737 164.028 76.0727C165.379 76.5361 166.477 77.3923 167.284 78.488L132.883 71.5244Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M105.911 85.0723L168.12 97.6342L167.681 107.039L105.483 94.4976L105.911 85.0723Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M105.48 94.4963L167.681 107.039L167.221 116.454L105.042 103.9L105.48 94.4963Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M105.046 103.902L167.222 116.452L166.807 125.557C160.315 123.86 153.779 122.643 147.193 121.899L104.609 113.302L105.046 103.902Z"
              stroke="#393939"
              strokeWidth="2"
              strokeMiterlimit="2"
            />
            <path
              d="M109.591 76.3244C110.022 76.0778 110.457 75.9027 110.92 75.7339C118.153 73.2666 125.541 71.8871 132.861 71.5327L132.883 71.5239L167.285 78.4897C168.308 79.8098 168.874 81.4853 168.79 83.2371L168.559 88.2324L109.591 76.3244Z"
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
                gradientTransform="translate(131.528 211.486) rotate(-22.2095) scale(84.7569 91.4359)"
              >
                <stop stopColor="#F5603C" stopOpacity="0.87" />
                <stop offset="1" stopColor="#EE360B" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[350px] mt-[100px] h-[300px]  sm:max-w-[600px] md:max-w-[720px] mx-auto ">
          {" "}
          <h2 className="font-[400] text-center text-[45px] leading-[52px] font-[Francois_One] text-[#DD4D2B]">
            Our Resolution
          </h2>
          {/* Paragraph */}
          <p className="font-[400] text-[14px] text-center leading-[20px] tracking-[0.25px] font-[Open_Sans] text-black">
            Lorem ipsum dolor sit amet consectetur. Eget vitae in molestie arcu
            mattis eros sodales duis. Lobortis amet viverra sodales suscipit
            dictum accumsan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResolutionMbl;
