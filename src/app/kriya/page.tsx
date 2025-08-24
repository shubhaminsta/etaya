"use client";

import React from "react";
import KriyaHero from "@/app/components/KriyaHero";
import KriyaAbout from "@/app/components/KriyaAbout";
import KriyaStatement from "@/app/components/KriyaStatementMbl";
import Footer from "@/app/components/KriyaFooter";
const page = () => {
  return (
    <div
      className="
bg-[#F9F6F0]       
         w-full
        flex flex-col justify-center items-center
      "
    >
      <KriyaHero />
      <KriyaAbout />
      <KriyaStatement />
      <Footer />
    </div>
  );
};

export default page;
