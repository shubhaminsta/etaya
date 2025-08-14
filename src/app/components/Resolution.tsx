"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Resolution = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.46], [0, 1]);
  // Add opacity transforms for circles
  const circleOpacity1 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const circleOpacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const circleOpacity3 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      // className="relative flex items-start w-full   min-h-screen overflow-hidden"
      className="relative flex w-full  bg-gradient-to-b from-[#F9F6F0] to-[#F5A08A] overflow-hidden"
    >
      <div className="flex justify-center items-center  w-full max-w-[1440px]">
        <div className="w-full flex  justify-center items-start">
          {/* Heading: Our Resolution */}
          <div className="w-[380px]">
            <motion.h1
              className="font-francois text-[72px] text-[#DD4D2B] leading-[80px] font-normal"
              style={{ opacity: textOpacity }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              Our Resolution
            </motion.h1>
            {/* Body Large paragraph (the lorem ipsum) */}
            <motion.p
              className="font-sans text-[16px] leading-[24px] tracking-[0.5px] text-black"
              style={{ opacity: textOpacity }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              Lorem ipsum dolor sit amet consectetur. Eget vitae in molestie
              arcu mattis eros sodales duis. Lobortis amet viverra sodales
              suscipit dictum accumsan.
            </motion.p>
          </div>
        </div>
        {/* <svg
          width="4"
          height="245"
          viewBox="0 0 4 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-[15%] z-10"
        >
          <motion.path
            d="M1.87476 0.651367V244.046"
            stroke="#DD4D2B"
            stroke-width="5"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgress }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg> */}
        <div className=" relative w-full h-[1024px]">
          <svg
            width="504"
            height="787"
            viewBox="0 0 504 787"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-[14.25%] z-10 "
          >
            <motion.path
              d="M226.875 0.651367V244.046"
              stroke="#DD4D2B"
              stroke-width="3"
              initial={{ pathLength: 0 }}
              style={{ pathLength: lineProgress }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <path
              d="M226.875 0.651367V244.046"
              stroke="#DD4D2B"
              stroke-width="3"
              style={{ opacity: 0.2 }}
            />
            <motion.circle
              cx="220.88"
              cy="505.459"
              r="199.407"
              fill="#F6C6B7"
              style={{ opacity: circleOpacity3 }}
            />
            <motion.circle
              cx="220.88"
              cy="505.459"
              r="179.393"
              fill="#EC967F"
              style={{ opacity: circleOpacity2 }}
            />
            <motion.circle
              cx="220.88"
              cy="505.459"
              r="160.852"
              fill="#E6795D"
              style={{ opacity: circleOpacity1 }}
            />
            <mask
              id="mask0_1_3"
              // style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="-1"
              y="140"
              width="684"
              height="751"
            >
              <path
                d="M-0.00027294 327.58L235.533 890.42L682.596 703.336L447.062 140.496L-0.00027294 327.58Z"
                fill="white"
              />
            </mask>
            <path
              d="M168.659 353.488C205.206 346.42 240.842 347.257 275.601 355.984C275.121 368.38 281.391 380.1 292.062 386.424C316.759 401.057 337.178 423.557 349.102 452.05C350.044 454.302 350.916 456.582 351.753 458.878C377.083 529.589 341.319 608.712 269.321 635.452C202.882 660.154 127.195 629.738 96.4376 565.927C77.888 527.433 78.702 485.093 94.5638 449.354C105.647 424.336 124.191 402.521 148.618 387.545C160.572 380.228 168.14 367.47 168.659 353.488Z"
              fill="url(#paint0_radial_1_3)"
            />
            <path
              d="M168.664 353.502C205.211 346.434 240.847 347.271 275.607 355.998C275.123 368.395 281.396 380.114 292.068 386.438C316.761 401.072 337.18 423.572 349.104 452.066C350.046 454.317 350.922 456.596 351.758 458.892C377.085 529.605 341.324 608.726 269.326 635.465C202.888 660.168 127.2 629.752 96.443 565.941C77.89 527.448 78.704 485.109 94.5693 449.368C105.652 424.35 124.197 402.535 148.624 387.559C160.578 380.242 168.145 367.484 168.664 353.502Z"
              stroke="#DD4D2B"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M246.12 433.337L245.785 448.648C245.593 457.778 250.963 466.361 259.545 469.47C265.204 471.526 271.405 471.121 275.918 463.322C286.103 445.748 266.056 437.681 255.36 434.758C252.358 433.91 249.276 433.464 246.12 433.337Z"
              stroke="#EE360B"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M200.711 432.374L200.376 447.685C200.184 456.815 194.47 465.204 185.768 467.936C180.035 469.756 173.838 469.084 169.675 461.112C160.253 443.145 180.634 435.898 191.391 433.422C194.48 432.708 197.578 432.4 200.711 432.374Z"
              stroke="#EE360B"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M202.411 351.922L201.657 387.87L201.288 404.891L200.734 431.827L200.71 432.374C201.125 432.366 201.501 432.374 201.908 432.369L223.411 432.837L244.93 433.252C245.308 433.264 245.73 433.294 246.12 433.337L246.143 432.79L246.951 393.016L247.024 389.927L247.806 352.85"
              stroke="#EE360B"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M179.541 271.855C193.608 266.919 208.041 264.438 222.307 264.128C236.574 263.821 250.67 265.776 264.119 269.742C266.147 270.336 268.157 270.988 270.129 271.647C275.255 273.428 278.533 278.385 278.355 283.792L275.603 356C240.843 347.272 205.209 346.439 168.661 353.503L171.339 282.898C171.521 277.898 174.762 273.483 179.541 271.855Z"
              fill="white"
            />
            <path
              d="M242.386 602.839C165.635 571.404 122.762 492.421 133.842 413.918C120.294 426.056 109.204 441.367 101.835 459.324C75.7404 522.904 106.149 595.57 169.751 621.619C207.211 636.958 247.82 632.688 280.219 613.611C267.495 611.458 254.818 607.933 242.386 602.839Z"
              fill="#DD4D2B"
            />
            <path
              d="M178.859 349.235L182.395 275.265"
              stroke="#CECECE"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M226.822 267.394C229.223 268.1 231.6 268.867 233.934 269.651C240.003 271.757 243.875 277.619 243.666 284.019L241.165 349.73C252.364 350.909 263.485 352.791 274.505 355.558L277.257 283.351C277.435 277.944 274.162 272.989 269.03 271.205C267.057 270.543 265.05 269.899 263.023 269.296C249.573 265.338 235.475 263.38 221.212 263.685C218.655 263.743 216.094 263.892 213.529 264.089C218.008 265.014 222.447 266.103 226.822 267.394Z"
              fill="#CECECE"
            />
            <path
              d="M170.573 596.579C142.576 586.506 122.615 564.162 114.577 537.758"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M116.032 480.628C111.945 491.966 110.261 503.609 110.708 514.959"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M179.541 271.855C193.608 266.919 208.041 264.438 222.307 264.128C236.574 263.821 250.67 265.776 264.119 269.742C266.147 270.336 268.157 270.988 270.129 271.646C275.255 273.428 278.533 278.385 278.355 283.792L275.603 356C240.843 347.272 205.209 346.439 168.661 353.503L171.338 282.898C171.521 277.898 174.762 273.483 179.541 271.855Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M249.091 264.759C233.368 262.289 217.072 262.491 200.92 265.699L201.144 263.179C201.822 255.607 207.637 249.515 215.163 248.42C221.815 247.451 228.564 247.587 235.41 248.752C243.241 250.088 249.026 256.816 249.091 264.759Z"
              fill="#393939"
            />
            <path
              d="M179.166 274.645L275.773 293.281L275.187 308.664L173.273 289.004L173.463 284.249C173.622 280.259 175.797 276.65 179.166 274.645Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M171.542 335.192L241.308 348.64C218.251 346.239 194.793 347.338 170.897 351.947L171.542 335.192Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M217.191 266.463C218.937 266.365 220.614 266.3 222.339 266.251C236.019 265.955 249.534 267.826 262.427 271.629C264.375 272.202 266.302 272.822 268.19 273.458C270.406 274.197 272.214 275.582 273.55 277.362L217.191 266.463Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M173.273 289.004L275.19 308.662L274.605 324.049L172.706 304.424L173.273 289.004Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M172.701 304.422L274.605 324.05L273.987 339.455L172.12 319.808L172.701 304.422Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M172.125 319.81L273.989 339.449L273.439 354.346C262.798 351.664 252.092 349.766 241.31 348.644L171.546 335.19L172.125 319.81Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <path
              d="M179.165 274.645C179.867 274.236 180.576 273.943 181.33 273.661C193.126 269.522 205.189 267.161 217.155 266.478L217.19 266.463L273.551 277.365C275.243 279.51 276.192 282.242 276.08 285.108L275.773 293.281L179.165 274.645Z"
              stroke="#393939"
              stroke-width="2"
              stroke-miterlimit="2"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_3"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(216.968 495.38) rotate(-22.708) scale(138.619 149.542)"
              >
                <stop stop-color="#F5603C" stop-opacity="0.87" />
                <stop offset="1" stop-color="#EE360B" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Resolution;
