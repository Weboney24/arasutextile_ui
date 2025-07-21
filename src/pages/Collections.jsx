import React, { useRef } from "react";
import DefaultHeader from "../components/DefaultHeader";
import { home_collections } from "../helper/datahelper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Collections = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mb-20 relative">
      <DefaultHeader title="Collections" content="Crafting Fashion & Stitching Style" />

      {/* Navigation Buttons */}
      <button onClick={() => swiperRef.current?.slidePrev()} className="absolute left-2 !mt-[150px] -translate-y-1/2 z-30 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/80">
        <FaChevronLeft size={24} />
      </button>

      <button onClick={() => swiperRef.current?.slideNext()} className="absolute right-2 !mt-[150px] -translate-y-1/2 z-30 bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary/80">
        <FaChevronRight size={24} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
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
