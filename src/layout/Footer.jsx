import React, { useEffect, useState } from "react";
import { about, bottom_menu, footer_collection, PRODUCT_COLLECTIONS_CATEGORIES } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Divider } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getblogs } from "../api";
import _ from "lodash";
import "@fontsource/poppins";

const Footer = () => {
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
    <footer className="bg-rose text-primary  font-primary ">
      {/* Top Contact Section */}
      <div className="flex w-[80%] mx-auto -mt-15 z-10 relative gap-5">
        {/* Logo Box */}
        <div className="bg-primary border-2 border-white px-4 py-0 rounded-lg flex items-center justify-center w-[300px] shadow-lg">
          <h1 className="text-white text-center font-extrabold text-[46px] leading-none tracking-wider font-logo !mt-[20px]">
            Sri Arasu
            <br />
            Tex
          </h1>
        </div>

        {/* Contact Info Box */}
        <div className="!bg-white   flex-1 p-6 rounded-lg lg:flex items-center justify-between lg:!shadow-lg   font-bold hidden   ">
          {/* Address */}
          <div className="flex items-center gap-5 flex-1 ml-8">
            <FaMapMarkerAlt className="text-primary text-5xl mt-1" />
            <div className="text-gray-700 text-sm">19, Kamarajapuram west, 1st Street ,sengunthapuram 4th cross,Karur - 639002.</div>
          </div>

          {/* Divider */}
          <Divider type="vertical" className="!border-primary !h-[50px] ml-3" />

          {/* Phone */}
          <div className="flex items-center gap-3 flex-1 ml-6">
            <FaPhoneAlt className="text-primary text-xl mt-1" />
            <div className="text-gray-700 text-sm">
              Phone
              <br />
              0091-4324-233551
              <br />
              +91 9677773551
            </div>
          </div>

          {/* Divider */}
          <Divider type="vertical" className="!border-primary !h-[50px]" />

          {/* Email */}
          <div className="flex items-center gap-3 flex-1 ml-6">
            <FaEnvelope className="text-primary text-xl mt-1" />
            <div className="text-gray-700 text-sm">
              Send Mail
              <br />
              vijayan@sriarasutex.in
              <br />
              sales@sriarasutex.in
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="w-[80%] mx-auto grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-[50px] pt-20 ">
        {/* ABOUT US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{about.title}</h3>
          <p className="mb-4 text-sm">{about.description}</p>
          <div className="flex gap-3">
            {about.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={social.id || index} className="bg-white p-1">
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-[20px] font-bold text-primary" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="lg:ml-10">
          <h3 className="text-lg font-semibold mb-4 ">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {bottom_menu.map((item, idx) => (
              <li key={idx}>
                <Link to={item.link} className="cursor-pointer hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLLECTIONS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">COLLECTIONS</h3>
          <ul className="space-y-2 text-sm">
            {PRODUCT_COLLECTIONS_CATEGORIES.slice(0, 5).map((res, index) => (
              <li key={index}>
                <Link to="/collections" state={{ cat_id: res.category_name }} className="hover:underline cursor-pointer">
                  {res.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* BLOGS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">BLOGS</h3>
          {blogPosts.slice(0, 3).map((res, index) => {
            return (
              <ul className="space-y-2 text-sm" key={index}>
                <li className="cursor-pointer hover:underline">{res.blog_name}</li>
              </ul>
            );
          })}
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">STAY IN STYLE WITH US</h3>
          <p className="mb-4 text-sm">Subscribe to our newsletter for the latest fabric trends, offers, and exclusive textile collections.</p>
          <button className="w-full py-2 bg-white !text-primary font-semibold rounded transition">Join our fabric family</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-6 mt-10 border-t border-gray-700 text-sm">
        © 2025 Desgined & Developed by <span className="text-yellow-400 font-semibold">Weboney</span>
      </div>
    </footer>
  );
};

export default Footer;
