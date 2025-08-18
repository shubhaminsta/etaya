"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Overlay animation variants
  const overlayVariants = {
    open: {
      opacity: 0.5,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="flex justify-between fixed z-50 top-0 left-0 right-0 items-center h-[80px] px-[10%] ">
        <div className="h-[50px] w-[150px]">
          <Image
            src="/etaya_innovations_pvt_ltd_logo.png"
            height={49.62}
            width={123.51}
            alt="Etaya Innovations Logo"
            className="object-contain h-[40px] w-[123px]"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-[24px]">
          <Link href="/">
            <span
              className={`w-[42px] h-[20px] font-['Open_Sans'] font-bold text-[14px] leading-[20px] tracking-[0.1px] 
              flex-none order-0 flex-grow-0
              ${
                pathname === "/"
                  ? "text-[#DD4D2B]"
                  : "text-[#000000] hover:text-[#DD4D2B]"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`w-[42px] h-[20px] font-['Open_Sans'] font-bold text-[14px] leading-[20px] tracking-[0.1px] 
              flex-none order-0 flex-grow-0
              ${
                pathname === "/about"
                  ? "text-[#DD4D2B]"
                  : "text-[#000000] hover:text-[#DD4D2B]"
              }`}
            >
              About
            </span>
          </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden z-50 cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-40 mt-4"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 mt-[80px] bg-[#DD4D2B] z-50 shadow-lg"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col gap-6 p-6 mt-2">
                {/* <div>cance</div> */}
                <Link href="/" onClick={toggleSidebar}>
                  <span
                    className={`text-[16px] font-['Open_Sans'] font-bold tracking-[0.1px] 
                    ${
                      pathname === "/"
                        ? "text-white"
                        : "text-[#000000] hover:white"
                    }`}
                  >
                    Home
                  </span>
                </Link>
                <Link href="/about" onClick={toggleSidebar}>
                  <span
                    className={`text-[16px] font-['Open_Sans'] font-bold tracking-[0.1px] 
                    ${
                      pathname === "/about"
                        ? "text-white"
                        : "text-[#000000] hover:white"
                    }`}
                  >
                    About
                  </span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;
