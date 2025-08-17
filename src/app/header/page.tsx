"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between  fixed z-50 top-0 left-0 right-0 items-center h-[80px] px-[10%] ">
      <div className="  h-[50px] w-[150px]">
        <Image
          src="/etaya_innovations_pvt_ltd_logo.png"
          height={49.62}
          width={123.51}
          alt="Etaya Innovations Logo"
          className="  object-contain h-[40px] w-[123px] "
        />
      </div>
      <div className="flex  gap-[24px]">
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
    </div>
  );
};

export default Page;
