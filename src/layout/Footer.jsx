import React, { useEffect, useState } from "react";
import { about, bottom_menu, PRODUCT_COLLECTIONS_CATEGORIES } from "../helper/datahelper";
import { Button, Divider, Input, message, Modal } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getblogs, sendmail } from "../api";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message.warning("Please enter a valid email address.");
      return;
    }

    try {
      const res = await sendmail({ email: email });
      message.success("Thank you for subscribing!", res);
      setEmail("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Subscription failed:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="bg-rose text-primary font-primary">
      {/* Top Contact Section */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto -mt-10 z-10 relative gap-5 px-4">
        {/* Logo Box */}
        <div className="bg-primary border-2 border-white px-4 py-4 rounded-lg flex items-center justify-center w-full lg:w-[300px] shadow-lg">
          <h1 className="text-white !mb-0 text-center font-extrabold text-3xl lg:text-[46px] leading-none tracking-wider font-logo">
            Sri Arasu
            <br />
            Tex
          </h1>
        </div>

        {/* Contact Info Box */}
        <div className="bg-white flex-1 p-6 rounded-lg hidden lg:flex items-center justify-between shadow-lg font-bold">
          {/* Address */}
          <div className="flex items-center gap-5 flex-1">
            <FaMapMarkerAlt className="text-primary text-2xl lg:text-5xl mt-1" />
            <div className="text-gray-700 text-sm">19, Kamarajapuram west, 1st Street, sengunthapuram 4th cross, Karur - 639002.</div>
          </div>

          <Divider type="vertical" className="!border-primary !h-[50px] mx-3" />

          {/* Phone */}
          <div className="flex items-center gap-3 flex-1">
            <FaPhoneAlt className="text-primary text-lg lg:text-xl mt-1" />
            <div className="text-gray-700 text-sm">
              Phone
              <br />
              0091-4324-233551
              <br />
              +91 9677773551
            </div>
          </div>

          <Divider type="vertical" className="!border-primary !h-[50px] mx-3" />

          {/* Email */}
          <div className="flex items-center gap-3 flex-1">
            <FaEnvelope className="text-primary text-lg lg:text-xl mt-1" />
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
      <div className="w-full lg:w-[80%] mx-auto grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 px-4">
        {/* ABOUT US */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{about.title}</h3>
          <p className="mb-4 text-sm">{about.description}</p>
          <div className="flex gap-3">
            {about.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={social.id || index} className="bg-white p-1 rounded">
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <Icon className="text-[20px] font-bold text-primary" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {bottom_menu.map((item, idx) => (
              <li key={idx}>
                <Link to={item.link} className="hover:underline">
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
                <Link to="/collections" state={{ cat_id: res.category_name }} className="hover:underline">
                  {res.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* BLOGS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">BLOGS</h3>
          <ul className="space-y-2 text-sm">
            {blogPosts
              .slice(-5)
              .reverse()
              .map((res, index) => (
                <li key={index} className="hover:underline cursor-pointer">
                  {res.blog_name}
                </li>
              ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4">STAY IN STYLE WITH US</h3>
          <p className="mb-4 text-sm">Subscribe to our newsletter for the latest fabric trends, offers, and exclusive textile collections.</p>

          <div>
            {/* JOIN BUTTON */}
            <button className="w-full py-2 bg-white text-primary hover:cursor-pointer font-semibold rounded transition" onClick={showModal}>
              Join our family
            </button>

            {/* MODAL */}
            <Modal title="Subscribe to our Newsletter" open={isModalOpen} onCancel={handleCancel} footer={null}>
              <p className="mb-4 text-sm">Enter your email to get the latest updates, offers, and collections.</p>
              <Input placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="!mb-4" />
              <Button type="primary" block onClick={handleSubscribe}>
                Subscribe
              </Button>
            </Modal>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-6 mt-10 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="text-primary font-semibold"> Arasu Tex </span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
