"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TeamMember {
  name: string;
  role: string;
}

interface TeamSectionData {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

interface TeamCarouselProps {
  data: TeamSectionData;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <section className="team-section-container  ">
      {/* <section className="team-section-container bg-[#F9F6F0] py-16"> */}
      <div className="max-w-[1040px] mx-auto relative">
        {/* Title */}
        {/* <div className="text-center mb-10">
          <h2 className="text-[72px] leading-[80px] font-[400] font-[Francois One] text-[#DD4D2B]">
            {data.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-6 tracking-[0.5px] text-black">
            {data.subtitle}
          </p>
        </div> */}

        {/* Scroll Buttons */}
        {/* <div className="flex justify-end gap-2 mb-4">
          <button
            id="prev"
            className="buzz-prev bg-orange-400 hover:bg-[#E9EAEB] transition-all duration-300 p-[10px] rounded-full"
          >
            <IoMdArrowBack color="#0A2540" size={20} />
          </button>
          <button
            id="next"
            className="buzz-next bg-white hover:bg-[#E9EAEB] transition-all duration-300 p-[10px] rounded-full"
          >
            <IoMdArrowForward color="#0A2540" size={20} />
          </button>
        </div> */}

        {/* Carousel */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1.25}
          spaceBetween={20}
          navigation={{
            nextEl: ".buzz-next",
            prevEl: ".buzz-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="teamSwiper"
        >
          {data.members.map((member, index) => (
            <SwiperSlide key={`team-card-${index}`}>
              <div
                className="bg-[#DD4D2B] flex flex-col items-center p-6 rounded-lg text-white"
                style={{ width: "243px", height: "350px" }}
              >
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mt-2 text-sm text-center">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamCarousel;
