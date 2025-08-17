"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import VisionMbl from "@/app/components/VisionMbl";

const Vision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgressFirst = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.36], [0, 1]);
  // Add opacity transforms for circles
  const circleOpacity1 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const circleOpacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const circleOpacity3 = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest); // value between 0 and 1
  });

  const pipeRadius = 3; // pipe radius in px
  const strokeWidth = pipeRadius * 1; // pipe thickness (diameter)

  return (
    <div
      ref={ref}
      className="w-full bg-gradient-to-b flex from-[#F6C6B7] to-[#F9F6F0] justify-center"
    >
      <div className=" max-w-[1440px] px-[200px] justify-between hidden xl:flex w-full">
        <div className="relative flex flex-col justify-start">
          <svg
            width="4"
            height="419"
            viewBox="0 0 4 419"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative left-0 top-0"
          >
            <motion.path
              d="M2 0L2 418.821"
              stroke="#DD4D2B"
              stroke-width="3"
              initial={{ pathLength: 0 }}
              style={{ pathLength: lineProgressFirst }}
            />
            <path
              d="M2 0L2 418.821"
              stroke="#DD4D2B"
              stroke-width="3"
              style={{ opacity: 0.2 }}
            />
          </svg>

          {/* Content below */}
          <div className="flex flex-col items-start justify-center w-[596px]">
            <h2 className="text-4xl font-bold text-[#DD4D2B] mb-4">
              Our Vision
            </h2>
            <motion.p
              className="font-['Open_Sans'] text-black font-normal text-[16px] leading-relaxed tracking-normal"
              style={{ opacity: textOpacity }}
            >
              It is our Vision to make India the epicenter for research &
              development. For far too long India, has taken a Servicing Stance
              when it comes to delivering innovation. We wish to drive a
              Creative Stance in the development process. Mission: It is our
              Mission to use our expertise to generate, drive and deliver
              innovative brilliance out of India, that best suits India’s
              changing civilizational, industrial, scientific, economic and
              development needs.
            </motion.p>
          </div>
        </div>
        <div className="w-[547px]">
          <div>
            <div className=" flex flex-col items-center">
              <svg
                width="547"
                height="923"
                viewBox="0 0 547 923"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="261.38"
                  cy="305.064"
                  r="161.458"
                  fill="#F6C6B7"
                  style={{ opacity: circleOpacity1 }}
                />
                <motion.circle
                  cx="261.38"
                  cy="305.064"
                  r="145.253"
                  fill="#EC967F"
                  style={{ opacity: circleOpacity2 }}
                />
                <motion.circle
                  cx="261.38"
                  cy="305.064"
                  r="130.24"
                  fill="#E6795D"
                  style={{ opacity: circleOpacity3 }}
                />
                <g clip-path="url(#clip0_1_3)">
                  <mask
                    id="mask0_1_3"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="547"
                    height="602"
                  >
                    <path
                      d="M546.66 454.572L361.065 0L6.06775e-05 147.418L185.595 601.989L546.66 454.572Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1_3)">
                    <g filter="url(#filter0_d_1_3)">
                      <path
                        d="M300.875 431.583C271.416 437.015 242.745 436.092 214.835 428.826C215.308 418.854 210.345 409.379 201.802 404.215C182.03 392.267 165.756 374.018 156.361 351.006C155.618 349.187 154.933 347.346 154.276 345.493C134.387 288.413 163.721 224.993 221.846 203.98C275.482 184.566 336.176 209.572 360.48 261.137C375.137 292.244 374.186 326.309 361.171 354.958C352.078 375.012 337.002 392.437 317.24 404.317C307.57 410.122 301.391 420.335 300.875 431.583Z"
                        fill="url(#paint0_radial_1_3)"
                      />
                      <path
                        d="M300.87 431.572C271.411 437.004 242.74 436.08 214.83 428.814C215.306 418.842 210.34 409.367 201.797 404.204C182.028 392.255 165.755 374.006 156.359 350.993C155.616 349.175 154.928 347.335 154.271 345.481C134.386 288.401 163.716 224.982 221.841 203.968C275.478 184.555 336.171 209.561 360.475 261.126C375.135 292.231 374.184 326.297 361.167 354.947C352.073 375.001 336.997 392.426 317.236 404.306C307.565 410.111 301.386 420.324 300.87 431.572Z"
                        stroke="#DD4D2B"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M239.1 366.785L239.477 354.466C239.695 347.121 235.434 340.177 228.55 337.614C224.011 335.921 219.017 336.203 215.331 342.448C207.012 356.518 223.087 363.15 231.674 365.577C234.084 366.281 236.561 366.661 239.1 366.785Z"
                        stroke="#EE360B"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M275.635 367.878L276.012 355.56C276.23 348.214 280.887 341.504 287.909 339.366C292.535 337.941 297.516 338.526 300.811 344.97C308.267 359.494 291.815 365.183 283.142 367.1C280.651 367.653 278.156 367.88 275.635 367.878Z"
                        stroke="#EE360B"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M273.703 432.607L274.561 403.684L274.977 389.991L275.612 368.319L275.635 367.878C275.301 367.882 274.999 367.873 274.671 367.874L257.37 367.347L240.057 366.862C239.753 366.85 239.414 366.823 239.1 366.785L239.077 367.225L238.149 399.226L238.069 401.712L237.179 431.542"
                        stroke="#EE360B"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M291.546 497.197C280.191 501.071 268.56 502.966 257.078 503.116C245.595 503.263 234.265 501.591 223.47 498.305C221.843 497.813 220.23 497.275 218.648 496.731C214.535 495.261 211.932 491.249 212.113 486.899L214.833 428.813C242.743 436.079 271.413 436.999 300.873 431.571L298.224 488.369C298.042 492.391 295.403 495.921 291.546 497.197Z"
                        fill="white"
                      />
                      <path
                        d="M243.292 230.411C304.834 256.244 338.781 320.103 329.315 383.198C340.302 373.525 349.334 361.282 355.39 346.883C376.833 295.902 352.872 237.214 301.874 215.807C271.836 203.201 239.128 206.353 212.922 221.477C223.146 223.299 233.323 226.225 243.292 230.411Z"
                        fill="#DD4D2B"
                      />
                      <path
                        d="M292.637 434.933L289.273 494.432"
                        stroke="#CECECE"
                        stroke-width="4"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M253.468 500.456C251.54 499.871 249.633 499.237 247.76 498.59C242.891 496.852 239.816 492.108 240.03 486.959L242.502 434.099C233.498 433.071 224.562 431.479 215.714 429.175L212.994 487.262C212.813 491.611 215.412 495.622 219.529 497.093C221.112 497.64 222.722 498.172 224.349 498.672C235.145 501.951 246.476 503.626 257.956 503.48C260.014 503.451 262.075 503.349 264.141 503.208C260.544 502.433 256.979 501.525 253.468 500.456Z"
                        fill="#CECECE"
                      />
                      <path
                        d="M301.036 235.951C323.495 244.253 339.401 262.373 345.685 283.677"
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M344.114 329.64C347.482 320.545 348.919 311.187 348.639 302.051"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M291.546 497.197C280.191 501.071 268.56 502.966 257.078 503.116C245.595 503.263 234.265 501.591 223.47 498.305C221.843 497.813 220.23 497.275 218.648 496.731C214.535 495.261 211.932 491.249 212.113 486.899L214.833 428.813C242.743 436.079 271.413 436.999 300.873 431.571L298.224 488.369C298.042 492.391 295.403 495.921 291.546 497.197Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M235.529 502.421C248.164 504.518 261.279 504.47 274.299 502.002L274.101 504.028C273.502 510.116 268.78 514.978 262.717 515.806C257.357 516.539 251.927 516.383 246.426 515.397C240.133 514.267 235.525 508.813 235.529 502.421Z"
                        fill="#393939"
                      />
                      <path
                        d="M291.868 494.955L214.257 479.282L214.837 466.907L296.71 483.442L296.523 487.267C296.368 490.476 294.592 493.365 291.868 494.955Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M298.426 446.286L242.379 434.975C260.916 437.069 279.801 436.349 299.063 432.807L298.426 446.286Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M261.211 501.272C259.805 501.339 258.456 501.38 257.067 501.406C246.056 501.55 235.193 499.949 224.845 496.799C223.281 496.324 221.735 495.811 220.221 495.286C218.443 494.676 216.997 493.549 215.934 492.107L261.211 501.272Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M296.71 483.441L214.834 466.908L215.412 454.53L297.274 471.036L296.71 483.441Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M297.278 471.038L215.412 454.53L216.018 442.138L297.853 458.661L297.278 471.038Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M297.849 458.66L216.016 442.142L216.563 430.158C225.107 432.391 233.709 433.994 242.378 434.972L298.423 446.287L297.849 458.66Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                      <path
                        d="M291.868 494.955C291.3 495.279 290.728 495.51 290.118 495.732C280.598 498.979 270.874 500.795 261.24 501.261L261.211 501.273L215.933 492.105C214.587 490.367 213.842 488.162 213.953 485.856L214.257 479.282L291.868 494.955Z"
                        stroke="#393939"
                        stroke-width="2"
                        stroke-miterlimit="2"
                      />
                    </g>
                  </g>
                </g>
                {/* hwloo */}
                <motion.path
                  d="M256.858 514.105L256.858 922.776"
                  stroke="#DD4D2B"
                  stroke-width="3"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: lineProgressSecond }}
                />
                <path
                  d="M256.858 514.105L256.858 922.776"
                  stroke="#DD4D2B"
                  stroke-width="3"
                  style={{ opacity: 0.2 }}
                />
                <defs>
                  <filter
                    id="filter0_d_1_3"
                    x="143.065"
                    y="195.405"
                    width="239.135"
                    height="333.858"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="3" dy="6" />
                    <feGaussianBlur stdDeviation="3.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_1_3"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(262.994 317.063) rotate(157.791) scale(111.552 120.343)"
                  >
                    <stop stop-color="#F5603C" stop-opacity="0.87" />
                    <stop offset="1" stop-color="#EE360B" />
                  </radialGradient>
                  <clipPath id="clip0_1_3">
                    <rect
                      width="491"
                      height="390"
                      fill="white"
                      transform="translate(361.065) rotate(67.7905)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <VisionMbl />
    </div>
  );
};

export default Vision;
