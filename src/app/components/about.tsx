"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HandDrawSVG() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const firstPath = containerRef.current.querySelector(".first-path");
      const lastPath = containerRef.current.querySelector(".last-path");
      const diagramPath = containerRef.current.querySelector(".diagram-path");
      const diagramPath2 = containerRef.current.querySelector(".diagram-path2");
      const diagramPath3 = containerRef.current.querySelector(".diagram-path3");
      const diagramPath4 = containerRef.current.querySelector(".diagram-path4");
      const diagramPath5 = containerRef.current.querySelector(".diagram-path5");
      const text = containerRef.current.querySelector(".animated-text");

      // Reset function to clear all animations and reset text
      const resetAnimation = () => {
        gsap.killTweensOf("*");
        gsap.set(
          [
            firstPath,
            lastPath,
            diagramPath,
            diagramPath2,
            diagramPath3,
            diagramPath4,
            diagramPath5,
          ],
          { clearProps: "all" }
        );
        gsap.set(
          [
            ".outer-circle",
            ".middle-circle",
            ".inner-circle",
            ".outer-circle-2",
            ".middle-circle-2",
            ".inner-circle-2",
            ".outer-circle-3a",
            ".middle-circle-3a",
            ".inner-circle-3a",
            ".outer-circle-3b",
            ".middle-circle-3b",
            ".inner-circle-3b",
          ],
          { clearProps: "all" }
        );
        gsap.set(
          [".label-path", ".label-path-2", ".label-path-3a", ".label-path-3b"],
          {
            clearProps: "all",
          }
        );
        text.innerHTML = "about us";
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 10%", // Changed from "top 80%" to "bottom 10%"
        onEnter: () => {
          resetAnimation();

          const tl = gsap.timeline({ delay: 0.833 }); // Reduced from 2.5s to 2.5/3 ≈ 0.833s

          // First SVG path animation
          const firstLength = firstPath.getTotalLength();
          gsap.set(firstPath, {
            strokeDasharray: firstLength,
            strokeDashoffset: firstLength,
          });
          tl.to(firstPath, {
            strokeDashoffset: 0,
            duration: 0.667,
            ease: "power2.inOut",
          }); // Reduced from 2s to 2/3 ≈ 0.667s

          // Text animation (letter-by-letter)
          const letters = text.textContent.split("");
          text.textContent = "";
          letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            text.appendChild(span);
          });
          tl.to(
            text.querySelectorAll("span"),
            { opacity: 1, duration: 0.017, stagger: 0.017, ease: "none" }, // Reduced from 0.05s to 0.05/3 ≈ 0.017s
            "+=0.1" // Reduced from 0.3s to 0.3/3 = 0.1s
          );

          // Last SVG path animation
          const lastLength = lastPath.getTotalLength();
          gsap.set(lastPath, {
            strokeDasharray: lastLength,
            strokeDashoffset: lastLength,
          });
          tl.to(
            lastPath,
            { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
            "+=0.1"
          ); // Reduced from 1.5s to 1.5/3 = 0.5s

          // Third SVG (diagram-path) path animation
          const diagramLength = diagramPath.getTotalLength();
          gsap.set(diagramPath, {
            strokeDasharray: diagramLength,
            strokeDashoffset: diagramLength,
          });
          tl.to(
            diagramPath,
            { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" },
            "+=0.1"
          ); // Reduced from 3s to 3/3 = 1s

          // Third SVG circle animations
          gsap.set(".outer-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          ); // Reduced from 1s to 1/3 ≈ 0.333s
          gsap.set(".middle-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".middle-circle",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          ); // Reduced from 0.8s to 0.8/3 ≈ 0.267s
          gsap.set(".inner-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          ); // Reduced from 0.6s to 0.6/3 = 0.2s
          gsap.set(".label-path", { opacity: 0 });
          tl.to(
            ".label-path",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          ); // Reduced from 0.5s to 0.5/3 ≈ 0.167s

          // Fourth SVG (diagram-path2) path animation
          const diagramLength2 = diagramPath2.getTotalLength();
          gsap.set(diagramPath2, {
            strokeDasharray: diagramLength2,
            strokeDashoffset: diagramLength2,
          });
          tl.to(
            diagramPath2,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          ); // Reduced from 2s to 2/3 ≈ 0.667s

          // Fourth SVG circle animations
          gsap.set(".outer-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-2",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".middle-circle-2",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-2",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-2", { opacity: 0 });
          tl.to(
            ".label-path-2",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          // Fifth SVG (diagram-path3) path animation
          const diagramLength3 = diagramPath3.getTotalLength();
          gsap.set(diagramPath3, {
            strokeDasharray: diagramLength3,
            strokeDashoffset: diagramLength3,
          });
          tl.to(
            diagramPath3,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );

          // Fifth SVG circle animations
          gsap.set(".outer-circle-3a", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-3a",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-3a", {
            transformOrigin: "center",
            scale: 0,
          });
          tl.to(
            ".middle-circle-3a",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-3a", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-3a",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-3a", { opacity: 0 });
          tl.to(
            ".label-path-3a",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          gsap.set(".outer-circle-3b", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-3b",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-3b", {
            transformOrigin: "center",
            scale: 0,
          });
          tl.to(
            ".middle-circle-3b",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-3b", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-3b",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-3b", { opacity: 0 });
          tl.to(
            ".label-path-3b",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          // Sixth SVG (diagram-path4) path animation
          const diagramLength4 = diagramPath4.getTotalLength();
          gsap.set(diagramPath4, {
            strokeDasharray: diagramLength4,
            strokeDashoffset: diagramLength4,
          });
          tl.to(
            diagramPath4,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );

          // Seventh SVG (diagram-path5) path animation
          const diagramLength5 = diagramPath5.getTotalLength();
          gsap.set(diagramPath5, {
            strokeDasharray: diagramLength5,
            strokeDashoffset: diagramLength5,
          });
          tl.to(
            diagramPath5,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );
        },
        onEnterBack: () => {
          resetAnimation();

          const tl = gsap.timeline({ delay: 0.167 }); // Reduced from 0.5s to 0.5/3 ≈ 0.167s

          // First SVG path animation
          const firstLength = firstPath.getTotalLength();
          gsap.set(firstPath, {
            strokeDasharray: firstLength,
            strokeDashoffset: firstLength,
          });
          tl.to(firstPath, {
            strokeDashoffset: 0,
            duration: 0.667,
            ease: "power2.inOut",
          });

          // Text animation
          const letters = text.textContent.split("");
          text.textContent = "";
          letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            text.appendChild(span);
          });
          tl.to(
            text.querySelectorAll("span"),
            { opacity: 1, duration: 0.017, stagger: 0.017, ease: "none" },
            "+=0.1"
          );

          // Last SVG path animation
          const lastLength = lastPath.getTotalLength();
          gsap.set(lastPath, {
            strokeDasharray: lastLength,
            strokeDashoffset: lastLength,
          });
          tl.to(
            lastPath,
            { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
            "+=0.1"
          );

          // Third SVG (diagram-path) path animation
          const diagramLength = diagramPath.getTotalLength();
          gsap.set(diagramPath, {
            strokeDasharray: diagramLength,
            strokeDashoffset: diagramLength,
          });
          tl.to(
            diagramPath,
            { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" },
            "+=0.1"
          );

          // Third SVG circle animations
          gsap.set(".outer-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".middle-circle",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path", { opacity: 0 });
          tl.to(
            ".label-path",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          // Fourth SVG (diagram-path2) path animation
          const diagramLength2 = diagramPath2.getTotalLength();
          gsap.set(diagramPath2, {
            strokeDasharray: diagramLength2,
            strokeDashoffset: diagramLength2,
          });
          tl.to(
            diagramPath2,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );

          // Fourth SVG circle animations
          gsap.set(".outer-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-2",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".middle-circle-2",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-2", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-2",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-2", { opacity: 0 });
          tl.to(
            ".label-path-2",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          // Fifth SVG (diagram-path3) path animation
          const diagramLength3 = diagramPath3.getTotalLength();
          gsap.set(diagramPath3, {
            strokeDasharray: diagramLength3,
            strokeDashoffset: diagramLength3,
          });
          tl.to(
            diagramPath3,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );

          // Fifth SVG circle animations
          gsap.set(".outer-circle-3a", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-3a",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-3a", {
            transformOrigin: "center",
            scale: 0,
          });
          tl.to(
            ".middle-circle-3a",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-3a", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-3a",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-3a", { opacity: 0 });
          tl.to(
            ".label-path-3a",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          gsap.set(".outer-circle-3b", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".outer-circle-3b",
            { scale: 1, duration: 0.333, ease: "power2.out" },
            "+=0.1"
          );
          gsap.set(".middle-circle-3b", {
            transformOrigin: "center",
            scale: 0,
          });
          tl.to(
            ".middle-circle-3b",
            { scale: 1, duration: 0.267, ease: "power2.out" },
            "-=0.167"
          );
          gsap.set(".inner-circle-3b", { transformOrigin: "center", scale: 0 });
          tl.to(
            ".inner-circle-3b",
            { scale: 1, duration: 0.2, ease: "power2.out" },
            "-=0.133"
          );
          gsap.set(".label-path-3b", { opacity: 0 });
          tl.to(
            ".label-path-3b",
            { opacity: 1, duration: 0.167, ease: "power2.out" },
            "-=0.1"
          );

          // Sixth SVG (diagram-path4) path animation
          const diagramLength4 = diagramPath4.getTotalLength();
          gsap.set(diagramPath4, {
            strokeDasharray: diagramLength4,
            strokeDashoffset: diagramLength4,
          });
          tl.to(
            diagramPath4,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );

          // Seventh SVG (diagram-path5) path animation
          const diagramLength5 = diagramPath5.getTotalLength();
          gsap.set(diagramPath5, {
            strokeDasharray: diagramLength5,
            strokeDashoffset: diagramLength5,
          });
          tl.to(
            diagramPath5,
            { strokeDashoffset: 0, duration: 0.667, ease: "power2.inOut" },
            "+=0.1"
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex bg-black flex-col items-center gap-4 py-12"
    >
      {/* First SVG */}
      <svg
        width="642"
        height="121"
        viewBox="0 0 642 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="first-path"
          d="M640.074 0.189087V38.6063C640.074 82.7891 604.196 118.606 560.013 118.606C357.385 118.606 222.006 118.606 0 118.606"
          stroke="#DD4D2B"
          strokeWidth="3"
        />
      </svg>

      {/* Text */}
      <h1 className="animated-text text-3xl font-bold">about us</h1>

      {/* Second SVG */}
      <svg
        width="178"
        height="4"
        viewBox="0 0 178 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="last-path"
          d="M177.64 1.60632H-2.24023"
          stroke="#DD4D2B"
          strokeWidth="3"
        />
      </svg>

      {/* Third SVG */}
      <svg
        width="1243"
        height="381"
        viewBox="0 0 1243 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="outer-circle"
          cx="86.2299"
          cy="283.371"
          r="35.6415"
          fill="#EC967F"
        />
        <circle
          className="middle-circle"
          cx="86.2301"
          cy="282.642"
          r="30.8297"
          fill="#E6795D"
        />
        <circle
          className="inner-circle"
          cx="86.2301"
          cy="282.642"
          r="26.5788"
          fill="url(#paint0_radial_1_3)"
        />
        <path
          className="label-path"
          d="M82.2835 291.504C80.3768 291.504 79.0568 290.668 78.3235 288.996C77.5901 287.309 77.2235 285.278 77.2235 282.902C77.2235 280.54 77.5828 278.531 78.3015 276.874C79.0348 275.216 80.3621 274.388 82.2835 274.388C84.2048 274.388 85.5321 275.216 86.2655 276.874C87.0135 278.531 87.3875 280.533 87.3875 282.88C87.3875 285.256 87.0135 287.287 86.2655 288.974C85.5321 290.66 84.2048 291.504 82.2835 291.504ZM82.2835 288.908C82.7528 288.908 83.1268 288.739 83.4055 288.402C83.6988 288.064 83.9188 287.419 84.0655 286.466C84.2121 285.512 84.2855 284.134 84.2855 282.33C84.2855 280.599 84.1535 279.279 83.8895 278.37C83.6401 277.446 83.1048 276.984 82.2835 276.984C81.4621 276.984 80.9268 277.431 80.6775 278.326C80.4428 279.206 80.3255 280.452 80.3255 282.066C80.3255 283.943 80.3915 285.373 80.5235 286.356C80.6555 287.338 80.8608 288.013 81.1395 288.38C81.4181 288.732 81.7995 288.908 82.2835 288.908ZM90.1081 291.196V288.49H92.2201V278.722L89.9541 279.206V276.896L93.7161 274.696H95.3001V288.49H97.4561L97.3241 291.196H90.1081Z"
          fill="white"
        />
        <path
          className="diagram-path"
          d="M304.388 372.363C304.388 376.782 307.97 380.363 312.388 380.363C316.806 380.363 320.388 376.782 320.388 372.363C320.388 367.945 316.806 364.363 312.388 364.363C307.97 364.363 304.388 367.945 304.388 372.363ZM1243.58 0.109009H720.418V3.10901H1243.58V0.109009ZM638.918 81.609V93.6304H641.918V81.609H638.918ZM560.418 172.13H82.2915V175.13H560.418V172.13ZM82.2915 373.863H312.388V370.863H82.2915V373.863ZM0.791504 253.63V281.833H3.7915V253.63H0.791504ZM0.791504 281.833V292.363H3.7915V281.833H0.791504ZM2.2915 283.333H59.4024V280.333H2.2915V283.333ZM82.2915 370.863C38.9372 370.863 3.7915 335.718 3.7915 292.363H0.791504C0.791504 337.375 37.2803 373.863 82.2915 373.863V370.863ZM82.2915 172.13C37.2803 172.13 0.791504 208.619 0.791504 253.63H3.7915C3.7915 210.276 38.9372 175.13 82.2915 175.13V172.13ZM638.918 93.6304C638.918 136.985 603.773 172.13 560.418 172.13V175.13C605.43 175.13 641.918 138.642 641.918 93.6304H638.918ZM720.418 0.109009C675.407 0.109009 638.918 36.5978 638.918 81.609H641.918C641.918 38.2547 677.064 3.10901 720.418 3.10901V0.109009Z"
          stroke="#F9F6F0"
          strokeWidth="3"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(86.2301 282.642) rotate(90) scale(26.5788)"
          >
            <stop stop-color="#E6795D" />
            <stop offset="1" stop-color="#EE360B" />
          </radialGradient>
        </defs>
      </svg>

      {/* Fourth SVG */}
      <svg
        width="1050"
        height="249"
        viewBox="0 0 1050 249"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="diagram-path2"
          d="M331 8.01196C331 12.4302 334.582 16.012 339 16.012C343.418 16.012 347 12.4302 347 8.01196C347 3.59368 343.418 0.0119629 339 0.0119629C334.582 0.0119629 331 3.59368 331 8.01196ZM0 240.924C0 245.342 3.58172 248.924 8 248.924C12.4183 248.924 16 245.342 16 240.924C16 236.506 12.4183 232.924 8 232.924C3.58172 232.924 0 236.506 0 240.924ZM967.227 82.907C967.227 87.3253 970.808 90.907 975.227 90.907C979.645 90.907 983.227 87.3253 983.227 82.907C983.227 78.4887 979.645 74.907 975.227 74.907C970.808 74.907 967.227 78.4887 967.227 82.907ZM339 9.51196H973.105V6.51196H339V9.51196ZM973.105 156.302H88V159.302H973.105V156.302ZM6.5 237.802V240.924H9.5V237.802H6.5ZM1048 81.407H975.227V84.407H1048V81.407ZM88 156.302C42.9888 156.302 6.5 192.791 6.5 237.802H9.5C9.5 194.448 44.6456 159.302 88 159.302V156.302ZM973.105 159.302C1015.3 159.302 1049.5 125.099 1049.5 82.907H1046.5C1046.5 123.442 1013.64 156.302 973.105 156.302V159.302ZM973.105 9.51196C1013.64 9.51196 1046.5 42.372 1046.5 82.907H1049.5C1049.5 40.7152 1015.3 6.51196 973.105 6.51196V9.51196Z"
          stroke="white"
          strokeWidth="3"
        />
        <circle
          className="outer-circle-2"
          cx="956.548"
          cy="83.7656"
          r="35.6415"
          fill="#EC967F"
        />
        <circle
          className="middle-circle-2"
          cx="956.548"
          cy="83.0361"
          r="30.8297"
          fill="#E6795D"
        />
        <circle
          className="inner-circle-2"
          cx="956.548"
          cy="83.0362"
          r="26.5788"
          fill="url(#paint1_radial_1_3)"
        />
        <path
          className="label-path-2"
          d="M950.794 91.3441C948.887 91.3441 947.567 90.5081 946.834 88.8361C946.1 87.1495 945.734 85.1181 945.734 82.7421C945.734 80.3808 946.093 78.3715 946.812 76.7141C947.545 75.0568 948.872 74.2281 950.794 74.2281C952.715 74.2281 954.042 75.0568 954.776 76.7141C955.524 78.3715 955.898 80.3735 955.898 82.7201C955.898 85.0961 955.524 87.1275 954.776 88.8141C954.042 90.5008 952.715 91.3441 950.794 91.3441ZM950.794 88.7481C951.263 88.7481 951.637 88.5795 951.916 88.2421C952.209 87.9048 952.429 87.2595 952.576 86.3061C952.722 85.3528 952.796 83.9741 952.796 82.1701C952.796 80.4395 952.664 79.1195 952.4 78.2101C952.15 77.2861 951.615 76.8241 950.794 76.8241C949.972 76.8241 949.437 77.2715 949.188 78.1661C948.953 79.0461 948.836 80.2928 948.836 81.9061C948.836 83.7835 948.902 85.2135 949.034 86.1961C949.166 87.1788 949.371 87.8535 949.65 88.2201C949.928 88.5721 950.31 88.7481 950.794 88.7481ZM958.2 88.6381C958.582 88.1395 959.212 87.3768 960.092 86.3501C961.046 85.2648 961.808 84.3408 962.38 83.5781C962.967 82.8008 963.458 81.9941 963.854 81.1581C964.265 80.3075 964.47 79.4788 964.47 78.6721C964.47 78.2175 964.324 77.7995 964.03 77.4181C963.752 77.0221 963.334 76.8241 962.776 76.8241C962.219 76.8241 961.728 77.0955 961.302 77.6381C960.877 78.1661 960.606 78.8041 960.488 79.5521L957.848 78.6941C957.995 77.9021 958.288 77.1688 958.728 76.4941C959.168 75.8048 959.74 75.2548 960.444 74.8441C961.148 74.4335 961.948 74.2281 962.842 74.2281C963.766 74.2281 964.588 74.4188 965.306 74.8001C966.025 75.1815 966.582 75.7168 966.978 76.4061C967.389 77.0808 967.594 77.8508 967.594 78.7161C967.594 80.3001 967.052 81.8841 965.966 83.4681C964.881 85.0521 963.48 86.6728 961.764 88.3301H967.462L967.198 91.0361H958.2V88.6381Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint1_radial_1_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(956.548 83.0362) rotate(90) scale(26.5788)"
          >
            <stop stop-color="#E6795D" />
            <stop offset="1" stop-color="#EE360B" />
          </radialGradient>
        </defs>
      </svg>

      {/* Fifth SVG */}
      <svg
        width="987"
        height="224"
        viewBox="0 0 987 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="diagram-path3"
          d="M948.554 187.975V187.975C948.554 143.792 912.737 107.72 868.554 107.72H38.0012C18.1183 107.72 2 91.602 2 71.7191V71.7191C2 51.8362 18.1183 35.7179 38.0012 35.7179H50.6498"
          stroke="white"
          strokeWidth="3"
        />
        <circle
          className="outer-circle-3a"
          cx="70.7601"
          cy="35.7179"
          r="35.6415"
          fill="#EC967F"
        />
        <circle
          className="middle-circle-3a"
          cx="70.7603"
          cy="34.9884"
          r="30.8297"
          fill="#E6795D"
        />
        <circle
          className="inner-circle-3a"
          cx="70.7604"
          cy="34.9884"
          r="26.5788"
          fill="url(#paint2_radial_1_3)"
        />
        <path
          className="label-path-3a"
          d="M65.0056 43.2964C63.099 43.2964 61.779 42.4604 61.0456 40.7884C60.3123 39.1017 59.9456 37.0704 59.9456 34.6944C59.9456 32.3331 60.305 30.3237 61.0236 28.6664C61.757 27.0091 63.0843 26.1804 65.0056 26.1804C66.927 26.1804 68.2543 27.0091 68.9876 28.6664C69.7356 30.3237 70.1096 32.3257 70.1096 34.6724C70.1096 37.0484 69.7356 39.0797 68.9876 40.7664C68.2543 42.4531 66.927 43.2964 65.0056 43.2964ZM65.0056 40.7004C65.475 40.7004 65.849 40.5317 66.1276 40.1944C66.421 39.8571 66.641 39.2117 66.7876 38.2584C66.9343 37.3051 67.0076 35.9264 67.0076 34.1224C67.0076 32.3917 66.8756 31.0717 66.6116 30.1624C66.3623 29.2384 65.827 28.7764 65.0056 28.7764C64.1843 28.7764 63.649 29.2237 63.3996 30.1184C63.165 30.9984 63.0476 32.2451 63.0476 33.8584C63.0476 35.7357 63.1136 37.1657 63.2456 38.1484C63.3776 39.1311 63.583 39.8057 63.8616 40.1724C64.1403 40.5244 64.5216 40.7004 65.0056 40.7004ZM76.6362 43.2964C75.4189 43.2964 74.3556 43.0031 73.4462 42.4164C72.5369 41.8151 71.9356 40.9351 71.6422 39.7764L73.9962 38.7424C74.2456 39.4464 74.5756 39.9524 74.9862 40.2604C75.4116 40.5537 75.9102 40.7004 76.4822 40.7004C77.0396 40.7004 77.5016 40.4951 77.8682 40.0844C78.2349 39.6737 78.4182 39.0651 78.4182 38.2584C78.4182 37.2171 78.1102 36.5204 77.4942 36.1684C76.8929 35.8017 76.0349 35.6184 74.9202 35.6184V33.4624C75.8589 33.4624 76.6289 33.2277 77.2302 32.7584C77.8462 32.2891 78.1616 31.5924 78.1762 30.6684V30.6464C78.1762 30.0597 77.9929 29.5977 77.6262 29.2604C77.2596 28.9231 76.8269 28.7544 76.3282 28.7544C75.8882 28.7544 75.4776 28.8937 75.0962 29.1724C74.7149 29.4364 74.4289 29.8251 74.2382 30.3384L72.0382 29.0844C72.5222 28.0724 73.1602 27.3391 73.9522 26.8844C74.7442 26.4151 75.6829 26.1804 76.7682 26.1804C77.5456 26.1804 78.2789 26.3491 78.9682 26.6864C79.6576 27.0091 80.2149 27.4931 80.6402 28.1384C81.0802 28.7691 81.3002 29.5244 81.3002 30.4044C81.3002 31.3577 81.0656 32.1717 80.5962 32.8464C80.1269 33.5064 79.4376 33.9904 78.5282 34.2984C79.4522 34.5917 80.1782 35.1124 80.7062 35.8604C81.2489 36.5937 81.5202 37.4957 81.5202 38.5664C81.5202 39.5491 81.2929 40.3997 80.8382 41.1184C80.3836 41.8224 79.7822 42.3651 79.0342 42.7464C78.3009 43.1131 77.5016 43.2964 76.6362 43.2964Z"
          fill="white"
        />
        <circle
          className="outer-circle-3b"
          cx="950.548"
          cy="187.975"
          r="35.6415"
          fill="#EC967F"
        />
        <circle
          className="middle-circle-3b"
          cx="950.548"
          cy="187.246"
          r="30.8297"
          fill="#E6795D"
        />
        <circle
          className="inner-circle-3b"
          cx="950.548"
          cy="187.246"
          r="26.5788"
          fill="url(#paint3_radial_1_3)"
        />
        <path
          className="label-path-3b"
          d="M944.794 195.554C942.887 195.554 941.567 194.718 940.834 193.046C940.1 191.359 939.734 189.328 939.734 186.952C939.734 184.59 940.093 182.581 940.812 180.924C941.545 179.266 942.872 178.438 944.794 178.438C946.715 178.438 948.042 179.266 948.776 180.924C949.524 182.581 949.898 184.583 949.898 186.93C949.898 189.306 949.524 191.337 948.776 193.024C948.042 194.71 946.715 195.554 944.794 195.554ZM944.794 192.958C945.263 192.958 945.637 192.789 945.916 192.452C946.209 192.114 946.429 191.469 946.576 190.516C946.722 189.562 946.796 188.184 946.796 186.38C946.796 184.649 946.664 183.329 946.4 182.42C946.15 181.496 945.615 181.034 944.794 181.034C943.972 181.034 943.437 181.481 943.188 182.376C942.953 183.256 942.836 184.502 942.836 186.116C942.836 187.993 942.902 189.423 943.034 190.406C943.166 191.388 943.371 192.063 943.65 192.43C943.928 192.782 944.31 192.958 944.794 192.958ZM956.974 195.378V191.11H951.452V188.646L956.842 178.746H960.076V188.646H962.144L961.88 191.11H960.076V195.114L956.974 195.378ZM954.026 188.646H956.974V182.86L954.026 188.646Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint2_radial_1_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(70.7604 34.9884) rotate(90) scale(26.5788)"
          >
            <stop stop-color="#E6795D" />
            <stop offset="1" stop-color="#EE360B" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_1_3"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(950.548 187.246) rotate(90) scale(26.5788)"
          >
            <stop stop-color="#E6795D" />
            <stop offset="1" stop-color="#EE360B" />
          </radialGradient>
        </defs>
      </svg>

      {/* Sixth SVG */}
      <svg
        width="961"
        height="181"
        viewBox="0 0 961 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="diagram-path4"
          d="M945 8.32202C945 12.7403 948.582 16.322 953 16.322C957.418 16.322 961 12.7403 961 8.32202C961 3.90374 957.418 0.322021 953 0.322021C948.582 0.322021 945 3.90374 945 8.32202ZM951.5 8.32202V21.083H954.5V8.32202H951.5ZM873 99.583H81.1608V102.583H873V99.583ZM81.1608 99.583C36.6131 99.583 0.5 135.696 0.5 180.244H3.5C3.5 137.353 38.2699 102.583 81.1608 102.583V99.583ZM951.5 21.083C951.5 64.4374 916.354 99.583 873 99.583V102.583C918.011 102.583 954.5 66.0942 954.5 21.083H951.5Z"
          stroke="white"
          strokeWidth="3"
        />
      </svg>

      {/* Seventh SVG */}
      <svg
        width="621"
        height="101"
        viewBox="0 0 621 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="diagram-path5"
          d="M1.99976 0.706299V19.1883C1.99976 63.3711 37.817 99.1884 81.9998 99.1884H630.664"
          stroke="#DD4D2B"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const AboutUs = () => {
//   const containerRef = useRef(null);
//   const [startDrawing, setStartDrawing] = useState(false);

//   // Scroll progress tracking
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Transform scroll progress to animation values
//   const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
//   const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

//   // Path length animation for drawing effect, starts at 0.4 scroll progress
//   const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

//   // Trigger drawing when scrollYProgress reaches 0.4
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (value) => {
//       if (value >= 0.4) {
//         setStartDrawing(true);
//       }
//     });
//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-black w-full min-h-screen flex flex-col items-center justify-center py-20"
//     >
//       <motion.div
//         style={{ opacity, scale, y }}
//         transition={{ duration: 0.5 }}
//         className="space-y-12"
//       >
//         <motion.svg
//           initial={{ opacity: 0, scale: 0.8 }}
//           style={{ opacity, scale }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           width="1243"
//           height="381"
//           viewBox="0 0 1243 381"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="86.2299" cy="283.371" r="35.6415" fill="#EC967F" />
//           <circle cx="86.2301" cy="282.642" r="30.8297" fill="#E6795D" />
//           <circle
//             cx="86.2301"
//             cy="282.642"
//             r="26.5788"
//             fill="url(#paint0_radial_1_3)"
//           />
//           <motion.path
//             d="M82.2835 291.504C80.3768 291.504 79.0568 290.668 78.3235 288.996C77.5901 287.309 77.2235 285.278 77.2235 282.902C77.2235 280.54 77.5828 278.531 78.3015 276.874C79.0348 275.216 80.3621 274.388 82.2835 274.388C84.2048 274.388 85.5321 275.216 86.2655 276.874C87.0135 278.531 87.3875 280.533 87.3875 282.88C87.3875 285.256 87.0135 287.287 86.2655 288.974C85.5321 290.66 84.2048 291.504 82.2835 291.504ZM82.2835 288.908C82.7528 288.908 83.1268 288.739 83.4055 288.402C83.6988 288.064 83.9188 287.419 84.0655 286.466C84.2121 285.512 84.2855 284.134 84.2855 282.33C84.2855 280.599 84.1535 279.279 83.8895 278.37C83.6401 277.446 83.1048 276.984 82.2835 276.984C81.4621 276.984 80.9268 277.431 80.6775 278.326C80.4428 279.206 80.3255 280.452 80.3255 282.066C80.3255 283.943 80.3915 285.373 80.5235 286.356C80.6555 287.338 80.8608 288.013 81.1395 288.38C81.4181 288.732 81.7995 288.908 82.2835 288.908ZM90.1081 291.196V288.49H92.2201V278.722L89.9541 279.206V276.896L93.7161 274.696H95.3001V288.49H97.4561L97.3241 291.196H90.1081Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             style={{
//               pathLength: startDrawing ? pathLength : 0,
//               strokeDasharray: 1,
//             }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//           />
//           <motion.path
//             d="M304.388 372.363C304.388 376.782 307.97 380.363 312.388 380.363C316.806 380.363 320.388 376.782 320.388 372.363C320.388 367.945 316.806 364.363 312.388 364.363C307.97 364.363 304.388 367.945 304.388 372.363ZM1243.58 0.109009H720.418V3.10901H1243.58V0.109009ZM638.918 81.609V93.6304H641.918V81.609H638.918ZM560.418 172.13H82.2915V175.13H560.418V172.13ZM82.2915 373.863H312.388V370.863H82.2915V373.863ZM0.791504 253.63V281.833H3.7915V253.63H0.791504ZM0.791504 281.833V292.363H3.7915V281.833H0.791504ZM2.2915 283.333H59.4024V280.333H2.2915V283.333ZM82.2915 370.863C38.9372 370.863 3.7915 335.718 3.7915 292.363H0.791504C0.791504 337.375 37.2803 373.863 82.2915 373.863V370.863ZM82.2915 172.13C37.2803 172.13 0.791504 208.619 0.791504 253.63H3.7915C3.7915 210.276 38.9372 175.13 82.2915 175.13V172.13ZM638.918 93.6304C638.918 136.985 603.773 172.13 560.418 172.13V175.13C605.43 175.13 641.918 138.642 641.918 93.6304H638.918ZM720.418 0.109009C675.407 0.109009 638.918 36.5978 638.918 81.609H641.918C641.918 38.2547 677.064 3.10901 720.418 3.10901V0.109009Z"
//             fill="none"
//             stroke="#F9F6F0"
//             strokeWidth="2"
//             style={{
//               pathLength: startDrawing ? pathLength : 0,
//               strokeDasharray: 1,
//             }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
//           />
//           <defs>
//             <radialGradient
//               id="paint0_radial_1_3"
//               cx="0"
//               cy="0"
//               r="1"
//               gradientUnits="userSpaceOnUse"
//               gradientTransform="translate(86.2301 282.642) rotate(90) scale(26.5788)"
//             >
//               <stop stop-color="#E6795D" />
//               <stop offset="1" stop-color="#EE360B" />
//             </radialGradient>
//           </defs>
//         </motion.svg>

//         <motion.svg
//           initial={{ opacity: 0, scale: 0.8 }}
//           style={{ opacity, scale }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           width="1050"
//           height="249"
//           viewBox="0 0 1050 249"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.path
//             d="M331 8.01196C331 12.4302 334.582 16.012 339 16.012C343.418 16.012 347 12.4302 347 8.01196C347 3.59368 343.418 0.0119629 339 0.0119629C334.582 0.0119629 331 3.59368 331 8.01196Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
//           />
//           <motion.path
//             d="M0 240.924C0 245.342 3.58172 248.924 8 248.924C12.4183 248.924 16 245.342 16 240.924C16 236.506 12.4183 232.924 8 232.924C3.58172 232.924 0 236.506 0 240.924Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
//           />
//           <motion.path
//             d="M967.227 82.907C967.227 87.3253 970.808 90.907 975.227 90.907C979.645 90.907 983.227 87.3253 983.227 82.907C983.227 78.4887 979.645 74.907 975.227 74.907C970.808 74.907 967.227 78.4887 967.227 82.907Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 1.0 }}
//           />
//           <motion.path
//             d="M339 9.51196H973.105V6.51196H339V9.51196Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
//           />
//           <motion.path
//             d="M973.105 156.302H88V159.302H973.105V156.302Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 1.4 }}
//           />
//           <motion.path
//             d="M6.5 237.802V240.924H9.5V237.802H6.5Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 1.6 }}
//           />
//           <motion.path
//             d="M1048 81.407H975.227V84.407H1048V81.407Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 1.8 }}
//           />
//           <motion.path
//             d="M88 156.302C42.9888 156.302 6.5 192.791 6.5 237.802H9.5C9.5 194.448 44.6456 159.302 88 159.302V156.302Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
//           />
//           <motion.path
//             d="M973.105 159.302C1015.3 159.302 1049.5 125.099 1049.5 82.907H1046.5C1046.5 123.442 1013.64 156.302 973.105 156.302V159.302Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 2.2 }}
//           />
//           <motion.path
//             d="M973.105 9.51196C1013.64 9.51196 1046.5 42.372 1046.5 82.907H1049.5C1049.5 40.7152 1015.3 6.51196 973.105 6.51196V9.51196Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 2.4 }}
//           />
//           <circle cx="956.548" cy="83.7656" r="35.6415" fill="#EC967F" />
//           <circle cx="956.548" cy="83.0361" r="30.8297" fill="#E6795D" />
//           <circle
//             cx="956.548"
//             cy="83.0362"
//             r="26.5788"
//             fill="url(#paint0_radial_1_3)"
//           />
//           <motion.path
//             d="M950.794 91.3441C948.887 91.3441 947.567 90.5081 946.834 88.8361C946.1 87.1495 945.734 85.1181 945.734 82.7421C945.734 80.3808 946.093 78.3715 946.812 76.7141C947.545 75.0568 948.872 74.2281 950.794 74.2281C952.715 74.2281 954.042 75.0568 954.776 76.7141C955.524 78.3715 955.898 80.3735 955.898 82.7201C955.898 85.0961 955.524 87.1275 954.776 88.8141C954.042 90.5008 952.715 91.3441 950.794 91.3441ZM950.794 88.7481C951.263 88.7481 951.637 88.5795 951.916 88.2421C952.209 87.9048 952.429 87.2595 952.576 86.3061C952.722 85.3528 952.796 83.9741 952.796 82.1701C952.796 80.4395 952.664 79.1195 952.4 78.2101C952.15 77.2861 951.615 76.8241 950.794 76.8241C949.972 76.8241 949.437 77.2715 949.188 78.1661C948.953 79.0461 948.836 80.2928 948.836 81.9061C948.836 83.7835 948.902 85.2135 949.034 86.1961C949.166 87.1788 949.371 87.8535 949.65 88.2201C949.928 88.5721 950.31 88.7481 950.794 88.7481ZM958.2 88.6381C958.582 88.1395 959.212 87.3768 960.092 86.3501C961.046 85.2648 961.808 84.3408 962.38 83.5781C962.967 82.8008 963.458 81.9941 963.854 81.1581C964.265 80.3075 964.47 79.4788 964.47 78.6721C964.47 78.2175 964.324 77.7995 964.03 77.4181C963.752 77.0221 963.334 76.8241 962.776 76.8241C962.219 76.8241 961.728 77.0955 961.302 77.6381C960.877 78.1661 960.606 78.8041 960.488 79.5521L957.848 78.6941C957.995 77.9021 958.288 77.1688 958.728 76.4941C959.168 75.8048 959.74 75.2548 960.444 74.8441C961.148 74.4335 961.948 74.2281 962.842 74.2281C963.766 74.2281 964.588 74.4188 965.306 74.8001C966.025 75.1815 966.582 75.7168 966.978 76.4061C967.389 77.0808 967.594 77.8508 967.594 78.7161C967.594 80.3001 967.052 81.8841 965.966 83.4681C964.881 85.0521 963.48 86.6728 961.764 88.3301H967.462L967.198 91.0361H958.2V88.6381Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut", delay: 2.6 }}
//           />
//           <defs>
//             <radialGradient
//               id="paint0_radial_1_3"
//               cx="0"
//               cy="0"
//               r="1"
//               gradientUnits="userSpaceOnUse"
//               gradientTransform="translate(956.548 83.0362) rotate(90) scale(26.5788)"
//             >
//               <stop stop-color="#E6795D" />
//               <stop offset="1" stop-color="#EE360B" />
//             </radialGradient>
//           </defs>
//         </motion.svg>

//         <motion.svg
//           initial={{ opacity: 0, scale: 0.8 }}
//           style={{ opacity, scale }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           width="987"
//           height="224"
//           viewBox="0 0 987 224"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.path
//             d="M948.554 187.975V187.975C948.554 143.792 912.737 107.72 868.554 107.72H38.0012C18.1183 107.72 2 91.602 2 71.7191V71.7191C2 51.8362 18.1183 35.7179 38.0012 35.7179H50.6498"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
//           />
//           <circle cx="70.7601" cy="35.7179" r="35.6415" fill="#EC967F" />
//           <circle cx="70.7603" cy="34.9884" r="30.8297" fill="#E6795D" />
//           <circle
//             cx="70.7604"
//             cy="34.9884"
//             r="26.5788"
//             fill="url(#paint0_radial_1_3)"
//           />
//           <motion.path
//             d="M65.0056 43.2964C63.099 43.2964 61.779 42.4604 61.0456 40.7884C60.3123 39.1017 59.9456 37.0704 59.9456 34.6944C59.9456 32.3331 60.305 30.3237 61.0236 28.6664C61.757 27.0091 63.0843 26.1804 65.0056 26.1804C66.927 26.1804 68.2543 27.0091 68.9876 28.6664C69.7356 30.3237 70.1096 32.3257 70.1096 34.6724C70.1096 37.0484 69.7356 39.0797 68.9876 40.7664C68.2543 42.4531 66.927 43.2964 65.0056 43.2964ZM65.0056 40.7004C65.475 40.7004 65.849 40.5317 66.1276 40.1944C66.421 39.8571 66.641 39.2117 66.7876 38.2584C66.9343 37.3051 67.0076 35.9264 67.0076 34.1224C67.0076 32.3917 66.8756 31.0717 66.6116 30.1624C66.3623 29.2384 65.827 28.7764 65.0056 28.7764C64.1843 28.7764 63.649 29.2237 63.3996 30.1184C63.165 30.9984 63.0476 32.2451 63.0476 33.8584C63.0476 35.7357 63.1136 37.1657 63.2456 38.1484C63.3776 39.1311 63.583 39.8057 63.8616 40.1724C64.1403 40.5244 64.5216 40.7004 65.0056 40.7004ZM76.6362 43.2964C75.4189 43.2964 74.3556 43.0031 73.4462 42.4164C72.5369 41.8151 71.9356 40.9351 71.6422 39.7764L73.9962 38.7424C74.2456 39.4464 74.5756 39.9524 74.9862 40.2604C75.4116 40.5537 75.9102 40.7004 76.4822 40.7004C77.0396 40.7004 77.5016 40.4951 77.8682 40.0844C78.2349 39.6737 78.4182 39.0651 78.4182 38.2584C78.4182 37.2171 78.1102 36.5204 77.4942 36.1684C76.8929 35.8017 76.0349 35.6184 74.9202 35.6184V33.4624C75.8589 33.4624 76.6289 33.2277 77.2302 32.7584C77.8462 32.2891 78.1616 31.5924 78.1762 30.6684V30.6464C78.1762 30.0597 77.9929 29.5977 77.6262 29.2604C77.2596 28.9231 76.8269 28.7544 76.3282 28.7544C75.8882 28.7544 75.4776 28.8937 75.0962 29.1724C74.7149 29.4364 74.4289 29.8251 74.2382 30.3384L72.0382 29.0844C72.5222 28.0724 73.1602 27.3391 73.9522 26.8844C74.7442 26.4151 75.6829 26.1804 76.7682 26.1804C77.5456 26.1804 78.2789 26.3491 78.9682 26.6864C79.6576 27.0091 80.2149 27.4931 80.6402 28.1384C81.0802 28.7691 81.3002 29.5244 81.3002 30.4044C81.3002 31.3577 81.0656 32.1717 80.5962 32.8464C80.1269 33.5064 79.4376 33.9904 78.5282 34.2984C79.4522 34.5917 80.1782 35.1124 80.7062 35.8604C81.2489 36.5937 81.5202 37.4957 81.5202 38.5664C81.5202 39.5491 81.2929 40.3997 80.8382 41.1184C80.3836 41.8224 79.7822 42.3651 79.0342 42.7464C78.3009 43.1131 77.5016 43.2964 76.6362 43.2964Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
//           />
//           <circle cx="950.548" cy="187.975" r="35.6415" fill="#EC967F" />
//           <circle cx="950.548" cy="187.246" r="30.8297" fill="#E6795D" />
//           <circle
//             cx="950.548"
//             cy="187.246"
//             r="26.5788"
//             fill="url(#paint1_radial_1_3)"
//           />
//           <motion.path
//             d="M944.794 195.554C942.887 195.554 941.567 194.718 940.834 193.046C940.1 191.359 939.734 189.328 939.734 186.952C939.734 184.59 940.093 182.581 940.812 180.924C941.545 179.266 942.872 178.438 944.794 178.438C946.715 178.438 948.042 179.266 948.776 180.924C949.524 182.581 949.898 184.583 949.898 186.93C949.898 189.306 949.524 191.337 948.776 193.024C948.042 194.71 946.715 195.554 944.794 195.554ZM944.794 192.958C945.263 192.958 945.637 192.789 945.916 192.452C946.209 192.114 946.429 191.469 946.576 190.516C946.722 189.562 946.796 188.184 946.796 186.38C946.796 184.649 946.664 183.329 946.4 182.42C946.15 181.496 945.615 181.034 944.794 181.034C943.972 181.034 943.437 181.481 943.188 182.376C942.953 183.256 942.836 184.502 942.836 186.116C942.836 187.993 942.902 189.423 943.034 190.406C943.166 191.388 943.371 192.063 943.65 192.43C943.928 192.782 944.31 192.958 944.794 192.958ZM956.974 195.378V191.11H951.452V188.646L956.842 178.746H960.076V188.646H962.144L961.88 191.11H960.076V195.114L956.974 195.378ZM954.026 188.646H956.974V182.86L954.026 188.646Z"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeDasharray="1"
//             style={{ pathLength: startDrawing ? pathLength : 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
//           />
//           <defs>
//             <radialGradient
//               id="paint0_radial_1_3"
//               cx="0"
//               cy="0"
//               r="1"
//               gradientUnits="userSpaceOnUse"
//               gradientTransform="translate(70.7604 34.9884) rotate(90) scale(26.5788)"
//             >
//               <stop stop-color="#E6795D" />
//               <stop offset="1" stop-color="#EE360B" />
//             </radialGradient>
//             <radialGradient
//               id="paint1_radial_1_3"
//               cx="0"
//               cy="0"
//               r="1"
//               gradientUnits="userSpaceOnUse"
//               gradientTransform="translate(950.548 187.246) rotate(90) scale(26.5788)"
//             >
//               <stop stop-color="#E6795D" />
//               <stop offset="1" stop-color="#EE360B" />
//             </radialGradient>
//           </defs>
//         </motion.svg>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutUs;
