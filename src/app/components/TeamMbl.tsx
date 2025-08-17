import React from "react";
import TeamCarousel from "@/app/components/TeamCarousel";

const teamData = {
  title: "Our Team",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Eget vitae in molestie arcu mattis eros sodales duis. Lobortis amet viverra sodales suscipit dictum accumsan.",
  members: [
    {
      name: "Alice Johnson",
      role: "Lead Designer with 8 years of experience in UI/UX design.",
    },
    {
      name: "Michael Smith",
      role: "Full Stack Developer specializing in modern web apps.",
    },
    {
      name: "Sophia Lee",
      role: "Project Manager who keeps everything on track and moving.",
    },
    {
      name: "James Brown",
      role: "Marketing Expert with a knack for brand storytelling.",
    },
  ],
};

const TeamMbl = () => {
  return (
    <div className="xl:hidden">
      <div className="relative">
        {/* Gradient Rectangle */}
        <div className=" bg-gradient-to-b from-black to-[#7C3AED]" />

        {/* Our Vision Heading */}
        <h2 className=" font-[400] text-[45px] leading-[52px] font-[Francois_One] text-[#DD4D2B]">
          Our Team
        </h2>

        {/* Paragraph */}
        <p className=" font-[400] text-[16px] leading-[24px] tracking-[0.5px] font-[Open_Sans] text-black">
          Lorem ipsum dolor sit amet consectetur. Eget vitae in molestie arcu
          mattis eros sodales duis.. Lobortis amet viverra sodales suscipit
          dictum accumsan..
        </p>
      </div>
      <div className="w-[350px] bg-amber-500 md:w-[625px] lg:w-[924px] mx-auto">
        <TeamCarousel data={teamData} />
      </div>{" "}
    </div>
  );
};

export default TeamMbl;
