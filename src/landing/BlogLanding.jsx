import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader";
import { getblogs } from "../api";
import _ from "lodash";

const BlogLanding = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const result = await getblogs();
        const blogs = _.get(result, "data.data", []);
        const matchedBlog = blogs.find((item) => item._id === id);
        setBlog(matchedBlog);
        setAllBlogs(blogs.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center py-20">Loading blog...</p>;
  }

  return (
    <div className="mb-20">
      <DefaultHeader title="Blog Detail" content="Explore the full story behind this blog." />

      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
        {/* Blog Content */}
        <div className="lg:col-span-2">
          <img src={blog.blog_image} alt={blog.blog_name} className="w-full !h-[500px] object-cover object-center rounded-lg mb-6 shadow" />

          <div className="text-gray-500 text-sm mb-4">
            <span className="mr-4">{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-4">{blog.blog_name}</h1>

          <p className="text-gray-700 mb-6">{blog.short_description}</p>

          {/* Additional Images Grid */}
          {blog.additional_images?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {blog.additional_images.map((img, idx) => (
                <img key={idx} src={img} alt={`additional-${idx}`} className="w-full h-48 object-cover rounded-lg shadow" />
              ))}
            </div>
          )}

          {/* Blog Description */}
          <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: blog.blog_description?.[0] }} />
        </div>

        {/* Sidebar Recent Posts (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <h2 className="text-lg font-bold !text-white mb-4 !bg-primary border-b !py-2 !ml-2 px-3 font-primary">Recent Posts</h2>
            <div className="space-y-4">
              {allBlogs.slice(0, 5).map((item) => (
                <Link to={`/blogsdetails/${item._id}`} key={item._id} className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition">
                  <img src={item.blog_image} alt={item.blog_name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</p>
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.blog_name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;
