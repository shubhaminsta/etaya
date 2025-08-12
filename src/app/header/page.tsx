"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between  fixed z-50 top-0 left-0 right-0 items-center h-[120px] ">
      <div className="w-[123.51px]  h-[41.62px] ">
        <Image
          src="/etaya_innovations_pvt_ltd_logo.png"
          height={41.62}
          width={123.51}
          alt="Etaya Innovations Logo"
        />
      </div>
      <div className="flex bg-amber-950 gap-6">
        <Link href="/">
          <span
            className={`w-[42px] h-[20px] font-['Open_Sans'] font-bold text-[14px] leading-[20px] tracking-[0.1px] 
            flex-none order-0 flex-grow-0
            ${
              pathname === "/"
                ? "text-[#DD4D2B]"
                : "text-gray-600 hover:text-[#DD4D2B]"
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
                : "text-gray-600 hover:text-[#DD4D2B]"
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
