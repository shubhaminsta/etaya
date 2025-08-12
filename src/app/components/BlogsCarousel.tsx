"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogsCarousel: React.FC = () => {
  const swiperRef = useRef(null);

  // Dummy blog data
  const data = {
    title: "Blogs",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Eu amet egestas a facilisis parturient consequat sit phasellus.. Et non habitant risus ut.",
    blogs: [
      {
        title: "How to Maintain Your Vehicle",
        description: "Tips and tricks for keeping your vehicle in top shape.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "5 Best Accessories for Cars",
        description:
          "Upgrade your driving experience with these must-have items.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Understanding Car Insurance",
        description:
          "A beginner's guide to choosing the right car insurance plan.",
        image: "https://via.placeholder.com/400x250",
      },
      {
        title: "Electric Vehicles in 2025",
        description: "What’s next for EV technology and adoption worldwide?",
        image: "https://via.placeholder.com/400x250",
      },
    ],
  };

  return (
    <section className=" py-16 w-full">
      <div className="max-w-[1040px] mx-auto relative">
        {/* Title */}

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button className="buzz-prev bg-orange-400 hover:bg-[#E9EAEB] transition-all duration-300 p-[10px] rounded-full">
            <IoMdArrowBack color="#0A2540" size={20} />
          </button>
          <button className="buzz-next bg-white hover:bg-[#E9EAEB] transition-all duration-300 p-[10px] rounded-full">
            <IoMdArrowForward color="#0A2540" size={20} />
          </button>
        </div>

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
          className="blogsSwiper"
        >
          {data.blogs.map((blog, index) => (
            <SwiperSlide key={`blog-card-${index}`}>
              <div
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                style={{ width: "300px", height: "380px" }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-black">{blog.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">
                    {blog.description}
                  </p>
                  <button className="mt-4 text-[#DD4D2B] font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogsCarousel;
