import React from "react";
import { bottom_menu, nav_links, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Button, Divider, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-primary h-[100px] font-primary">
        {/* top nav */}
        <div className="w-[80%]  text-white h-full m-auto  items-center justify-between flex">
          <div>
            <img src={IMAGE_HELPER.ARASU_LOGO} alt="Logo" className="w-[240px] h-[60px]" />
          </div>

          <div className="flex items-center gap-14">
            {top_nav.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-4">
                    <Icon className="text-[30px] font-bold text-white" />
                    <div className="space-y-1">
                      <h1 className="text-sm  text-white">{res.heading}</h1>
                      <h1 className="text-[15px]  text-white">{res.content}</h1>
                    </div>
                    {index !== top_nav.length - 1 && <Divider type="vertical" className="!border-white !h-[50px]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className=" h-[70px] flex items-center justify-around gap-[150px]">
        <div className="flex items-center justify-center gap-8 font-bold text-primary">
          {bottom_menu.map((res, index) => {
            const isActive = location.pathname === res.link;
            return (
              <div key={index} className="text-lg cursor-pointer">
                <Link to={res.link} className={`pb-1 border-b-2 transition-all duration-300 ${isActive ? "border-primary" : "border-transparent hover:border-primary"}`}>
                  {res.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex items-center justify-center gap-5">
            <button className="bg-primary !text-white font-bold p-2 px-5">Get Touch</button>
            <div className="flex items-center justify-center gap-1">
              {nav_links.map((res, index) => {
                const MediaIcon = res.icon;
                return (
                  <Tooltip key={index} title={res.name}>
                    <Link to={res.link}>
                      <div className="text-lg bg-gray-300 p-2 rounded-sm hover:bg-primary hover:text-white cursor-pointer">
                        <MediaIcon />
                      </div>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
//[#100F3E]
