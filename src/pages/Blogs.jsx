import React, { useEffect, useState } from "react";
import DefaultHeader from "../components/DefaultHeader";
import { FaUser, FaComments } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="mb-[100px] py-10 w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE_HELPER.BG_BLOG})` }}>
      <DefaultHeader title="Stories" content="Explore insights, stories, and updates from our world." />

      <div className="mt-4 w-[90%] md:w-[80%] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogData.map((post, index) => (
            <SwiperSlide key={index} className="py-10 px-3">
              <div className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Date Tag */}
                <div className="absolute z-10 bg-primary text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>

                {/* Image */}
                <div className="overflow-hidden relative h-48 md:h-56">
                  <img src={post.blog_image || "/default.jpg"} alt={post.blog_name || "Blog Image"} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-gray-500 text-xs md:text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <FaUser /> Admin
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments /> 0 Comments
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{post.blog_name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.short_description}</p>

                  <Link to={`/blogsdetails/${post._id}`} className="mt-auto text-primary font-semibold hover:underline">
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
