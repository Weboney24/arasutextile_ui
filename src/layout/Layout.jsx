import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../helper/ScrollTophelper";

const Layout = () => {
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
    </div>
  );
};

export default Layout;
