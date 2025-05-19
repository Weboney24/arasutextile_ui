import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import { home_collections } from "../helper/datahelper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Collections = () => {
  return (
    <div className="mb-20 ">
      <DefaultHeader title="Collections" content="Crafting Fashion & Stitching Style" />

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000, // Delay between slides in ms
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="py-6"
      >
        {home_collections.map((res, index) => (
          <SwiperSlide key={index}>
            <div className="relative group w-[400px] h-[300px] mx-auto overflow-hidden border-4 border-white">
              <img src={res.image} alt="Images" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div className="absolute bottom-[-100%] left-0 w-[80%] mx-auto ml-7 bg-white text-center py-4 px-2 transition-all duration-500 group-hover:bottom-0 z-20">
                <p className="text-lg font-bold text-primary">{res.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Collections;
