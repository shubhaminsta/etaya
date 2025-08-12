"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const Vision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgressFirst = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const lineProgressSecond = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.36], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest); // value between 0 and 1
  });

  const pipeRadius = 40; // pipe radius in px
  const strokeWidth = pipeRadius * 2; // pipe thickness (diameter)

  return (
    <div
      ref={ref}
      className="w-[1440px] bg-gradient-to-b flex from-[#F6C6B7] to-[#F9F6F0] px-6 text-center min-h-screen justify-center"
    >
      <div
        className="relative bg-amber-400 w-[500px] flex flex-col justify-center"
        style={{ height: 420, width: 500 }}
      >
        <svg
          width={strokeWidth} // width equals pipe thickness
          height="419"
          viewBox={`0 0 ${strokeWidth} 419`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-0"
        >
          {/* Fixed pipe background */}
          <path
            d={`M3 0 L3 418.821`}
            stroke="#DD4D2B"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Animated progress pipe on top */}
          <motion.path
            d={`M${pipeRadius} 0 L${pipeRadius} 418.821`}
            stroke="green"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: lineProgressFirst }}
            transition={{ duration: 2, ease: "easeInOut" }}
            // style={{ originY: 0, originX: 0.5 }}
          />
        </svg>

        {/* Content below */}
        <div style={{ marginTop: 440, paddingLeft: 20, maxWidth: 300 }}>
          <h2 className="text-4xl font-bold text-[#DD4D2B] mb-4">Our Vision</h2>
          <p className="text-lg text-black leading-relaxed">
            It is our Vision to make India the epicenter for research &
            development. For far too long India, has taken a Servicing Stance
            when it comes to delivering innovation. We wish to drive a Creative
            Stance in the development process. Mission: It is our Mission to use
            our expertise to generate, drive and deliver innovative brilliance
            out of India, that best suits India’s changing civilizational,
            industrial, scientific, economic and development needs.
          </p>
        </div>
      </div>
      <div className="w-[547px]">
        <div>
          <div>
            <svg
              width="547"
              height="926"
              viewBox="0 0 547 926"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_3"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="547"
                height="603"
              >
                <path
                  d="M546.83 454.998L361.235 0.426514L0.169738 147.844L185.765 602.416L546.83 454.998Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_3)">
                <g filter="url(#filter0_d_1_3)">
                  <path
                    d="M301.045 432.01C271.585 437.441 242.915 436.518 215.005 429.252C215.478 419.281 210.514 409.805 201.971 404.642C182.2 392.694 165.926 374.445 156.53 351.432C155.788 349.614 155.102 347.772 154.445 345.919C134.557 288.84 163.891 225.419 222.015 204.406C275.652 184.993 336.346 209.999 360.649 261.563C375.307 292.67 374.355 326.736 361.341 355.385C352.247 375.439 337.171 392.864 317.41 404.744C307.739 410.549 301.56 420.761 301.045 432.01Z"
                    fill="url(#paint0_radial_1_3)"
                  />
                  <path
                    d="M301.04 431.999C271.581 437.43 242.91 436.507 215 429.241C215.476 419.268 210.51 409.794 201.967 404.631C182.198 392.681 165.924 374.432 156.528 351.42C155.786 349.601 155.098 347.761 154.441 345.908C134.555 288.827 163.886 225.408 222.011 204.395C275.647 184.982 336.341 209.988 360.645 261.552C375.305 292.658 374.353 326.723 361.336 355.373C352.243 375.427 337.167 392.853 317.405 404.733C307.735 410.537 301.556 420.75 301.04 431.999Z"
                    stroke="#DD4D2B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M239.269 367.212L239.646 354.893C239.865 347.548 235.603 340.603 228.719 338.041C224.18 336.347 219.187 336.629 215.501 342.874C207.182 356.944 223.257 363.577 231.844 366.004C234.254 366.707 236.731 367.088 239.269 367.212Z"
                    stroke="#EE360B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M275.804 368.305L276.181 355.986C276.4 348.641 281.057 341.93 288.078 339.792C292.704 338.368 297.686 338.952 300.981 345.397C308.436 359.92 291.985 365.61 283.311 367.527C280.82 368.08 278.326 368.306 275.804 368.305Z"
                    stroke="#EE360B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M273.872 433.034L274.731 404.111L275.147 390.417L275.782 368.745L275.804 368.305C275.471 368.308 275.168 368.299 274.841 368.301L257.54 367.774L240.226 367.288C239.923 367.276 239.583 367.249 239.269 367.212L239.247 367.652L238.318 399.653L238.238 402.138L237.349 431.969"
                    stroke="#EE360B"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M291.716 497.624C280.361 501.498 268.729 503.393 257.248 503.543C245.765 503.69 234.435 502.018 223.64 498.732C222.012 498.24 220.4 497.701 218.817 497.157C214.705 495.688 212.102 491.676 212.283 487.326L215.003 429.239C242.913 436.506 271.582 437.426 301.043 431.997L298.394 488.795C298.211 492.817 295.573 496.347 291.716 497.624Z"
                    fill="white"
                  />
                  <path
                    d="M243.461 230.838C305.003 256.671 338.951 320.53 329.485 383.624C340.472 373.951 349.504 361.708 355.56 347.31C377.003 296.329 353.042 237.641 302.043 216.234C272.006 203.628 239.297 206.78 213.092 221.904C223.316 223.726 233.493 226.651 243.461 230.838Z"
                    fill="#DD4D2B"
                  />
                  <path
                    d="M292.806 435.359L289.442 494.859"
                    stroke="#CECECE"
                    stroke-width="4"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M253.637 500.883C251.71 500.297 249.803 499.664 247.93 499.017C243.061 497.279 239.986 492.535 240.199 487.386L242.672 434.525C233.668 433.498 224.732 431.906 215.884 429.602L213.163 487.688C212.982 492.038 215.582 496.048 219.698 497.52C221.282 498.067 222.892 498.599 224.519 499.098C235.314 502.377 246.646 504.052 258.126 503.906C260.184 503.878 262.245 503.775 264.31 503.635C260.713 502.859 257.149 501.952 253.637 500.883Z"
                    fill="#CECECE"
                  />
                  <path
                    d="M301.206 236.378C323.665 244.68 339.571 262.8 345.854 284.104"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M344.284 330.066C347.652 320.971 349.089 311.614 348.808 302.477"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M291.716 497.624C280.361 501.497 268.729 503.393 257.248 503.543C245.765 503.69 234.435 502.018 223.64 498.732C222.012 498.24 220.4 497.701 218.817 497.157C214.705 495.688 212.102 491.676 212.283 487.326L215.003 429.239C242.913 436.506 271.582 437.426 301.043 431.997L298.394 488.795C298.211 492.817 295.573 496.347 291.716 497.624Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M235.699 502.847C248.334 504.945 261.449 504.897 274.469 502.428L274.271 504.455C273.672 510.543 268.95 515.404 262.886 516.233C257.527 516.966 252.096 516.809 246.596 515.824C240.303 514.694 235.695 509.24 235.699 502.847Z"
                    fill="#393939"
                  />
                  <path
                    d="M292.037 495.381L214.427 479.709L215.006 467.334L296.879 483.868L296.693 487.693C296.537 490.902 294.762 493.792 292.037 495.381Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M298.596 446.712L242.548 435.402C261.086 437.495 279.971 436.776 299.232 433.234L298.596 446.712Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M261.381 501.699C259.975 501.766 258.625 501.806 257.236 501.833C246.226 501.976 235.363 500.375 225.015 497.225C223.451 496.75 221.905 496.238 220.39 495.713C218.612 495.103 217.167 493.976 216.104 492.534L261.381 501.699Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M296.879 483.868L215.003 467.335L215.582 454.957L297.443 471.463L296.879 483.868Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M297.447 471.464L215.582 454.957L216.188 442.564L298.023 459.088L297.447 471.464Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M298.019 459.086L216.186 442.568L216.733 430.585C225.277 432.817 233.879 434.42 242.547 435.399L298.593 446.713L298.019 459.086Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                  <path
                    d="M292.037 495.381C291.47 495.706 290.897 495.936 290.288 496.158C280.768 499.406 271.044 501.221 261.409 501.688L261.381 501.699L216.103 492.531C214.757 490.794 214.012 488.589 214.122 486.283L214.427 479.708L292.037 495.381Z"
                    stroke="#393939"
                    stroke-width="2"
                    stroke-miterlimit="2"
                  />
                </g>
              </g>
              <motion.path
                d="M255.858 517.105L255.858 925.776"
                stroke="#DD4D2B"
                stroke-width="3"
                initial={{ pathLength: 0 }}
                style={{ pathLength: lineProgressSecond }}
              />
              <defs>
                <filter
                  id="filter0_d_1_3"
                  x="143.235"
                  y="195.832"
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
                  gradientTransform="translate(263.164 317.489) rotate(157.791) scale(111.552 120.343)"
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
  );
};

export default Vision;
