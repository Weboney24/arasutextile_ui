import React, { useEffect, useState } from "react";
import DefaultHeader from "../components/DefaultHeader";
import { FaUser, FaComments } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { getblogs } from "../api";
import _ from "lodash";
import { Link } from "react-router-dom";
import { IMAGE_HELPER } from "../helper/imagehelper";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const result = await getblogs();
      const data = _.get(result, "data.data", []);
      setBlogData(data);
    } catch (err) {
      console.log("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="mb-[200px] py-3 w-full mx-auto h-[650px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE_HELPER.BG_BLOG})` }}>
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
          {blogData.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mb-5 shadow-lg rounded-2xl overflow-hidden relative w-full h-[420px]">
                {/* Date Tag */}
                <div className="absolute top-0 left-0 bg-primary text-white px-4 py-1 font-semibold">{new Date(post.createdAt).toLocaleDateString()}</div>

                {/* Card Content */}
                <div className="p-4 pt-12 flex flex-col justify-between h-full">
                  {/* Author & Comments */}
                  <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center space-x-1">
                      <FaUser />
                      <span>Admin</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaComments />
                      <span>0 Comments</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 line-clamp-1">{post.short_description}</h2>

                  {/* Image */}
                  <img src={post.blog_image} alt={post.blog_name} className="w-full h-48 object-cover rounded-md mb-4" />

                  {/* Read More */}
                  <Link to={`/blogsdetails/${post._id}`} className="text-primary font-semibold mt-auto hover:underline">
                    Read More →
                  </Link>
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
