import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../helper/ScrollTophelper";
import AOS from "aos";
import "aos/dist/aos.css";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { ICON_HELPER } from "../helper/iconhelper";

const Layout = () => {
  const [after, setAfter] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAfter(true);
      } else {
        setAfter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <ScrollToTop />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      {after && (
        <div className="fixed bottom-3 right-3 md:bottom-4 md:right-7 cursor-pointer rounded shadow-md shadow-gray-500 animate-bounce z-50">
          <div className="bg-primary_color text-white rounded shadow-md shadow-gray-500 bg-primary p-2" onClick={handleTop}>
            <ICON_HELPER.UP_ARROE_ICON className="w-6 h-auto" />
          </div>
        </div>
      )}
      <div className={`fixed hover:animate-pulseBorder  ${after ? "bottom-20" : "bottom-4"} right-3 md:right-4 cursor-pointer z-50`}>
        <a href="https://wa.me/+91 9677773551" target="_blank" rel="noopener noreferrer">
          <img src={IMAGE_HELPER.whatsapp} alt="WhatsApp Icon" className="lg:w-16 sm:w-10 h-auto" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
