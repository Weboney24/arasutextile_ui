import React, { useEffect, useState } from "react";
import DefaultHeader from "../components/DefaultHeader";
import { FaComments, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getblogs } from "../api";
import _ from "lodash";

const BlogSingle = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogData = async () => {
    try {
      const result = await getblogs();
      const data = _.get(result, "data.data", []);
      setBlogPosts(data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="mb-[200px] py-3 w-full mx-auto">
      <DefaultHeader title="Stories" content="Explore insights, stories, and updates from our world." />

      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post._id} className="bg-white shadow-lg rounded-2xl overflow-hidden relative h-[420px] flex flex-col">
              <div className="absolute top-0 left-0 bg-primary text-white px-4 py-1 font-semibold z-10">{new Date(post.createdAt).toLocaleDateString()}</div>

              <div className="p-4 pt-12 flex flex-col justify-between h-full z-0">
                <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
                  <span className="flex items-center space-x-1">
                    <FaUser />
                    <span>Author</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FaComments />
                    <span>0 Comments</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-1">{post.short_description}</h2>

                <img src={post.blog_image} alt={post.blog_name} className="w-full !h-[200px] object-cover rounded-md mb-4" />

                <Link to={`/blogsdetails/${post._id}`} className="text-primary font-semibold mt-auto hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
