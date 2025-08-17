"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlogsCarousel from "@/app/components/BlogsCarousel";
import BlogsMbl from "@/app/components/BlogsMbl";

export default function Blogs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress for animations
  const linePathLength = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.36], [0, 1]);
  //   const textTranslateX = useTransform(scrollYProgress, [0.4, 0.6], [200, 0]); // Increased for gate-like effect
  const carouselOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-[#DD4D2B] w-full  ">
      <div className="hidden xl:block max-w-[1440px] w-full relative overflow-hidden">
        {" "}
        <div className="flex w-full bg-yellow-200 flex-col md:flex-row items-center">
          <div className="  absolute top-[230px] left-[200px] mx-auto text-left">
            {/* Animated Heading */}
            <motion.h2
              className="text-white font-[Francois_One] text-5xl sm:text-6xl leading-[80px]"
              style={{ opacity: textOpacity }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              Blogs
            </motion.h2>

            {/* Animated Paragraph */}
            <motion.p
              className="mt-4 text-[#EBEBEB] text-base sm:text-lg leading-6 tracking-wide max-w-4xl"
              style={{ opacity: textOpacity }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet consectetur. Eu amet egestas a
              facilisis parturient consequat sit phasellus. Et non habitant
              risus ut.
            </motion.p>
          </div>

          {/* SVG Line Animation */}
          <motion.svg
            width="548"
            height="285"
            viewBox="0 0 548 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-[350px]"
          >
            <motion.path
              d="M546 0.772949L545.641 182.686C545.532 237.837 500.792 282.488 445.641 282.488H0.946289"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength: linePathLength, pathOffset: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            />
            <motion.path
              d="M546 0.772949L545.641 182.686C545.532 237.837 500.792 282.488 445.641 282.488H0.946289"
              stroke="white"
              strokeWidth="4"
              style={{
                opacity: 0.2,
              }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            />
          </motion.svg>

          {/* Bulb SVG - Always Visible */}
          <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <svg
              width="492"
              height="391"
              viewBox="0 0 492 391"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[0px] right-0"
            >
              <mask
                id="mask0_167_8"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="492"
                height="391"
              >
                <path
                  d="M491.702 0.275391H0.702393V390.275H491.702V0.275391Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_167_8)">
                <g opacity="0.25">
                  <path
                    d="M220.943 309.867C323.046 309.867 405.946 316.875 405.946 325.507C405.946 334.138 323.046 341.147 220.943 341.147C118.84 341.147 35.9407 334.138 35.9407 325.507C35.9407 316.875 118.84 309.867 220.943 309.867Z"
                    fill="#F6C6B7"
                  />
                </g>
                <g opacity="0.4">
                  <path
                    d="M236.997 318.11C329.33 318.11 404.297 321.722 404.297 326.171C404.297 330.62 329.33 334.232 236.997 334.232C144.664 334.232 69.6965 330.62 69.6965 326.171C69.6965 321.722 144.664 318.11 236.997 318.11Z"
                    fill="#F6C6B7"
                  />
                </g>
                <g opacity="0.4">
                  <path
                    d="M276.2 318.11C345.287 318.11 401.381 321.722 401.381 326.171C401.381 330.62 345.287 334.232 276.2 334.232C207.112 334.232 151.019 330.62 151.019 326.171C151.019 321.722 207.112 318.11 276.2 318.11Z"
                    fill="#DD4D2B"
                  />
                  <path
                    d="M276.199 318.557C310.737 318.557 342.022 319.46 364.669 320.918C375.994 321.648 385.15 322.516 391.469 323.477C394.632 323.958 397.066 324.46 398.701 324.974C399.522 325.232 400.115 325.485 400.494 325.725C400.899 325.981 400.933 326.139 400.934 326.17C400.934 326.2 400.901 326.359 400.494 326.617C400.115 326.857 399.522 327.11 398.701 327.368C397.066 327.882 394.632 328.384 391.469 328.865C385.15 329.826 375.994 330.694 364.669 331.423C342.022 332.882 310.737 333.785 276.199 333.785C241.663 333.785 210.378 332.882 187.731 331.423C176.405 330.694 167.249 329.826 160.93 328.865C157.768 328.384 155.334 327.882 153.698 327.368C152.878 327.11 152.284 326.857 151.905 326.617C151.498 326.359 151.466 326.2 151.466 326.17C151.466 326.139 151.5 325.981 151.905 325.725C152.284 325.485 152.878 325.232 153.698 324.974C155.334 324.46 157.768 323.958 160.93 323.477C167.249 322.516 176.405 321.648 187.731 320.918C210.378 319.46 241.663 318.557 276.199 318.557Z"
                    stroke="#F1542F"
                    strokeOpacity="0.53"
                    strokeWidth="0.894341"
                  />
                </g>
                <path
                  d="M377.514 219.136C371.408 248.463 359.716 274.657 342.439 297.75C333.386 293.543 322.737 294.556 314.728 300.514C296.193 314.302 273.146 322.471 248.289 322.471C246.325 322.471 244.361 322.409 242.397 322.317C182.035 319.154 134.408 268.024 136.924 206.269C139.226 149.274 185.319 102.535 242.244 99.5256C276.583 97.7138 307.762 111.471 329.366 134.349C344.495 150.348 354.928 170.893 358.457 193.678C360.176 204.826 367.295 214.407 377.514 219.136Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  d="M294.175 251.834L282.912 246.829C276.195 243.85 268.155 245.171 263.18 250.575C259.897 254.138 258.27 258.867 262.659 264.64C272.54 277.66 284.757 265.285 290.25 258.253C291.812 256.287 293.101 254.138 294.175 251.834Z"
                  stroke="#EE360B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M308.996 218.423L297.734 213.418C291.016 210.439 286.564 203.591 287.239 196.282C287.668 191.461 290.093 187.07 297.304 186.456C313.569 185.043 312.617 202.424 311.114 211.179C310.684 213.694 309.95 216.09 308.996 218.423Z"
                  stroke="#EE360B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M368.193 244.679L341.741 232.952L329.22 227.39L309.396 218.611L308.997 218.423C308.874 218.733 308.752 219.01 308.629 219.314L301.601 235.132L294.608 250.978C294.482 251.254 294.328 251.558 294.175 251.834L294.574 252.022L323.85 264.978L326.121 265.991L353.402 278.09"
                  stroke="#EE360B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M434.735 252.575C434.029 264.551 431.387 276.036 427.186 286.723C422.982 297.409 417.151 307.267 410.028 316.019C408.957 317.339 407.85 318.629 406.748 319.888C403.833 323.14 399.134 324.034 395.176 322.222L342.427 297.747C359.704 274.654 371.393 248.46 377.503 219.133L429.085 243.055C432.74 244.744 435.011 248.521 434.735 252.575Z"
                  fill="white"
                />
                <path
                  d="M169.503 196.405C216.682 149.194 288.635 141.904 343.471 174.516C338.668 160.688 330.748 147.698 319.706 136.649C280.614 97.5264 217.222 97.5264 178.127 136.649C155.102 159.693 145.656 191.166 149.753 221.144C155.304 212.368 161.859 204.052 169.503 196.405Z"
                  fill="#F9F6F0"
                />
                <path
                  d="M377.503 228.029L431.317 253.634"
                  stroke="#CECECE"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                />
                <path
                  d="M423.36 289.059C422.09 290.623 420.782 292.149 419.475 293.638C416.026 297.489 410.471 298.542 405.785 296.399L357.781 274.129C353.426 282.076 348.575 289.747 343.097 297.068L395.846 321.543C399.804 323.355 404.5 322.464 407.418 319.209C408.523 317.95 409.624 316.66 410.701 315.343C417.818 306.588 423.652 296.73 427.856 286.047C428.608 284.131 429.292 282.184 429.943 280.218C427.865 283.256 425.677 286.213 423.36 289.059Z"
                  fill="#CECECE"
                />
                <path
                  d="M196.458 145.039C212.634 127.384 235.422 119.508 257.52 121.743"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M299.48 140.571C292.332 134.015 284.213 129.147 275.648 125.954"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M434.735 252.575C434.029 264.551 431.387 276.036 427.186 286.723C422.982 297.409 417.151 307.267 410.028 316.019C408.957 317.339 407.85 318.629 406.748 319.888C403.833 323.14 399.134 324.034 395.176 322.222L342.427 297.747C359.704 274.654 371.393 248.46 377.503 219.133L429.085 243.055C432.74 244.744 435.011 248.521 434.735 252.575Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M418.398 306.41C425.115 295.505 430.028 283.345 432.664 270.358L434.466 271.307C439.876 274.163 442.592 280.372 441.067 286.299C439.719 291.538 437.522 296.506 434.53 301.226C431.105 306.625 424.314 308.83 418.398 306.41Z"
                  fill="#393939"
                />
                <path
                  d="M432.781 251.429L388.934 317.358L377.697 312.143L423.952 242.594L427.423 244.213C430.335 245.57 432.339 248.306 432.781 251.429Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M390.201 226.961L358.544 274.574C367.489 258.204 373.961 240.448 377.963 221.276L390.201 226.961Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M427.042 282.199C426.573 283.526 426.1 284.791 425.6 286.087C421.571 296.334 415.982 305.787 409.154 314.176C408.123 315.444 407.065 316.682 406.006 317.886C404.769 319.301 403.18 320.213 401.443 320.653L427.042 282.199Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M423.95 242.594L377.695 312.146L366.454 306.932L412.679 237.383L423.95 242.594Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M412.684 237.38L366.456 306.932L355.212 301.687L401.443 232.168L412.684 237.38Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M401.44 232.172L355.215 301.69L344.327 296.654C349.624 289.588 354.359 282.23 358.542 274.574L390.202 226.963L401.44 232.172Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
                <path
                  d="M432.781 251.429C432.867 252.077 432.864 252.694 432.839 253.342C432.247 263.384 430.252 273.073 427.043 282.169V282.199L401.44 320.653C399.323 321.242 396.999 321.098 394.907 320.124L388.935 317.358L432.781 251.429Z"
                  stroke="#393939"
                  strokeWidth="2"
                  strokeMiterlimit="2"
                />
              </g>
            </svg>
          </motion.div>
        </div>
        {/* Animated Carousel */}
        <motion.div
          className="mt-[300px]"
          style={{ opacity: carouselOpacity }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <BlogsCarousel />
        </motion.div>
      </div>
      <BlogsMbl />
    </section>
  );
}
