// "use client";

"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface FeatureItems {
  src: string;
  alt: string;
  title: string;
  description: string;
  url: string; // Added for "More" button link
}

interface FeatureSectionData {
  title: string;
  subtitle: string;
  feature: FeatureItems[];
}

interface FeatureCarouselProps {
  data: FeatureSectionData;
  page: string;
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <div className="feature-section-container relative   ">
      <div className="max-w-[1040px] mx-auto   relative">
        <div className="absolute -top-[50px] right-0 flex justify-between items-end ">
          {/* Scroll Buttons - top right */}
          <div className="flex  w-full   gap-2 justify-end">
            <button
              id="prev"
              className="buzz-prev bg-[#DD4D2B] cursor-pointer transition-all duration-300 p-[10px] rounded-full"
            >
              <IoMdArrowBack color="white" size={20} />
            </button>
            <button
              id="next"
              className="buzz-next bg-[#DD4D2B]  cursor-pointer   transition-all duration-300 p-[10px] rounded-full"
            >
              <IoMdArrowForward color="white" size={20} />
            </button>
          </div>
        </div>
        {/* Header */}

        {/* Carousel */}
        <div className="mt-6 lg:mt-10">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
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
              0: {
                slidesPerView: 1.25,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="gffFeaturesSwiper"
          >
            {data.feature.map((item, index) => (
              <SwiperSlide key={`feature-card-${index}`}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side image - 60% width */}
                  <div className="md:w-[60%] bg-[#7C3AED] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={594}
                      height={356}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Right side content */}
                  <div className="md:w-[40%] w-full p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[#FFFFFF] font-montserratBold text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="font-['Open_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px]">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#DD4D2B] rounded-[24px] px-6 py-2 text-white font-['Open_Sans'] font-normal text-[16px] leading-[24px] tracking-[0.5px]"
                      >
                        More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
// import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface FeatureItems {
//   src: string;
//   alt: string;
//   title: string;
//   description: string;
// }

// interface FeatureSectionData {
//   title: string;
//   subtitle: string;
//   feature: FeatureItems[];
// }

// interface FeatureCarouselProps {
//   data: FeatureSectionData;
//   page: string;
// }

// const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ data, page }) => {
//   const swiperRef = useRef(null);

//   return (
//     <div
//       className={`${
//         page === "pitches"
//           ? "pitches-cards-container"
//           : "feature-section-container"
//       }`}
//     >
//       <div
//         className={`max-w-[1440px] my-0 mx-auto ${
//           page === "pitches"
//             ? "pl-[26px] lg:px-22 pt-10 lg:pt-[92px] pb-[18px] lg:pb-[90px]"
//             : "pl-6 lg:px-[88px] pt-10 lg:pt-[100px] pb-9 lg:pb-16"
//         }`}
//       >
//         <div className="flex justify-between pr-6 lg:pr-0">
//           <div className={`${page === "pitches" ? "max-w-[820px]" : ""}`}>
//             <h2 className="font-montserratBold text-[1.5rem] lg:text-[2.5rem] leading-[120%] tracking-[-0.48px] lg:tracking-[-0.8px] text-[#FFF] ">
//               {data.title}
//             </h2>
//             <p className="font-firaSansRegular max-w-[686px] w-full text-[1rem] lg:text-[1.125rem] leading-[150%] tracking-[-0.36px] text-[#FFF] mt-2">
//               {data.subtitle}
//             </p>
//           </div>
//           <div className="flex gap-0.5 items-end">
//             <button
//               id="prev"
//               className="bg-white hover:bg-[#E9EAEB] transition-all duration-300 p-[15px] cursor-pointer opacity-100 buzz-prev lg:block hidden"
//             >
//               <IoMdArrowBack color="#0A2540" size={24} />
//             </button>
//             <button
//               id="next"
//               className="bg-white hover:bg-[#E9EAEB] transition-all duration-300 p-[15px] cursor-pointer opacity-100 buzz-next lg:block hidden "
//             >
//               <IoMdArrowForward color="#0A2540" size={24} />
//             </button>
//           </div>
//         </div>
//         <div className="mt-6 lg:mt-10 475px:mr-4 lg:mr-0">
//           <Swiper
//             ref={swiperRef}
//             pagination={true}
//             slidesPerView={4}
//             navigation={{
//               nextEl: ".buzz-next",
//               prevEl: ".buzz-prev",
//             }}
//             autoplay={{
//               delay: 1800,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               1280: {
//                 slidesPerView: page === "pitches" ? 4 : 3,
//                 spaceBetween: 25,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 slidesPerGroup: 1,
//                 spaceBetween: 16,
//               },
//               720: {
//                 slidesPerView: 3,
//                 slidesPerGroup: 1,
//                 spaceBetween: 16,
//               },
//               475: {
//                 slidesPerView: 2,
//                 slidesPerGroup: 1,
//                 spaceBetween: 16,
//               },
//               375: {
//                 slidesPerView: 1.6,
//                 slidesPerGroup: 1,
//                 spaceBetween: 16,
//               },
//               320: {
//                 slidesPerView: 1.2,
//                 slidesPerGroup: 1,
//                 spaceBetween: 16,
//               },
//             }}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="gffFeaturesSwiper"
//           >
//             {data &&
//               data.feature.map((item, index) => (
//                 <SwiperSlide key={`feature-card-${index}`}>
//                   <div
//                     key={`feature-card-${index}`}
//                     className={`w-full ${
//                       page === "pitches"
//                         ? "min-h-[480px] xs:min-h-[460px] lg:min-h-[398px] xl:min-h-[398px]"
//                         : "!min-h-[680px] xs:!min-h-[625px] lg:!min-h-[545px] xl:!min-h-[418px]"
//                     } h-full bg-[#fff] p-8 flex flex-col gap-4`}
//                   >
//                     <Image
//                       src={item.src}
//                       alt={item.alt}
//                       width={48}
//                       height={48}
//                     />
//                     <h3
//                       className={`text-[#111] font-montserratBold ${
//                         page === "pitches"
//                           ? "text-[1.375rem] leading-[130%]"
//                           : "text-[1.25rem] lg:text-[1.5rem] leading-[120%]"
//                       }`}
//                     >
//                       {item.title}
//                     </h3>
//                     <p className="text-[#111] font-firaSansRegular text-[1rem] leading-[150%]">
//                       {item.description}
//                     </p>
//                   </div>
//                 </SwiperSlide>
//               ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCarousel;
