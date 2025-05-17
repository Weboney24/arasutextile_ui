import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import { FaUser, FaComments } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { blogPosts } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";

const Blogs = () => {
  return (
    <div className="mb-[200px] py-3  w-full mx-auto h-[550px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE_HELPER.BG_BLOG})` }}>
      <DefaultHeader title="Stories" content="Explore insights, stories, and updates from our world." />

      <div className="mt-6 !mb-[20px] w-[80%] mx-auto px-4 md:px-16">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-white mb-5 shadow-lg rounded-lg overflow-hidden relative w-full h-[300px]">
                <div className="absolute top-0 left-0 bg-primary text-white px-4 py-1 font-semibold">{post.date}</div>
                <div className="p-4 pt-12 flex flex-col justify-between h-full">
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center space-x-1">
                      <FaUser />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaComments />
                      <span>{post.comments} Comments</span>
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug !mb-4 !line-clamp-1">{post.title}</h2>
                  <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md mb-2" />
                  <a href="#" className="text-primary font-semibold inline-block mt-2 hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
