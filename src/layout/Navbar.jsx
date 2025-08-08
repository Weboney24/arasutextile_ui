import React, { useState } from "react";
import { bottom_menu, nav_links, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Button, Divider, Drawer, Grid, Menu, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { lg } = Grid.useBreakpoint();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary h-[20px] font-primary"></div>

      {/* Navbar main container */}
      <div className="h-[100px] flex items-center justify-between px-5 md:px-[5%] gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit p-[2px] border-[2px] border-primary">
            <div className="p-[6px] bg-primary">
              <img src={IMAGE_HELPER.BG_REMOVE_LOGO} alt="Logo" className="h-[30px] object-contain" />
            </div>
          </div>
          <h1 className="font-logo text-2xl !font-semibold text-primary !m-0 hidden lg:block">Sri Arasu Tex</h1>
        </div>

        {/* Desktop menu */}
        {lg && (
          <div className="flex items-center gap-10 text-primary font-primary">
            {bottom_menu.map((res, index) => {
              const isActive = location.pathname === res.link;
              return (
                <Link key={index} to={res.link} className={`pb-1 border-b-2 text-lg font-semibold transition-all duration-300 ${isActive ? "border-primary" : "border-transparent hover:border-primary"}`}>
                  {res.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* Mobile menu button */}
        {!lg && <Button type="primary" icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} className="!bg-primary rounded" />}

        {/* Right side - icons + top_nav */}
        {lg && (
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {nav_links.map((res, index) => {
                const MediaIcon = res.icon;
                return (
                  <Tooltip key={index} title={res.name}>
                    <Link to={res.link}>
                      <div className="text-lg bg-gray-300 p-1 rounded hover:bg-primary hover:text-white cursor-pointer">
                        <MediaIcon />
                      </div>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>

            {/* Contact info */}
            <div className="hidden md:flex items-center gap-6">
              {top_nav.map((res, index) => {
                const Icon = res.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="space-y-1">
                      <h1 className="text-sm text-primary flex items-center gap-2 !font-semibold">
                        <Icon className="text-[20px] text-primary" /> {res.heading}
                      </h1>
                      <h1 className="text-[12px] text-primary !font-semibold">{res.content}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Drawer for mobile menu */}
      <Drawer title="Menu" placement="left" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
        <Menu mode="vertical" selectable={false}>
          {bottom_menu.map((res, index) => (
            <Menu.Item key={index} onClick={() => setDrawerVisible(false)}>
              <Link className="font-primary font-semibold text-primary" to={res.link}>
                {res.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
