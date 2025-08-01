import React, { useState } from "react";
import { bottom_menu, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, nav_links, PRODUCT_COLLECTIONS_CATEGORIES, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Avatar, Button, Card, Collapse, Divider, Drawer, Grid, Menu, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Navbar = () => {
  const location = useLocation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { md } = Grid.useBreakpoint();

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-primary h-[50px] font-primary">
        <div className="w-[90%] text-white h-full m-auto flex items-center justify-end">
          <div className="hidden md:flex items-center gap-14">
            {top_nav.map((res, index) => {
              const Icon = res.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-4">
                    <Icon className="text-[20px] font-bold text-white" />
                    <div className="space-y-1 mt-2">
                      <h1 className="text-sm text-white">{res.heading}</h1>
                      <h1 className="text-[12px] text-white">{res.content}</h1>
                    </div>
                    {index !== top_nav.length - 1 && <Divider type="vertical" className="!border-white !h-[20px]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="h-[80px] flex items-center justify-between px-5 md:px-[5%]">
        {/* Logo */}
        <div className="w-fit p-[2px] border-[2px] border-primary ">
          <div className="p-[6px] bg-primary">
            <img src={IMAGE_HELPER.BG_REMOVE_LOGO} alt="Logo" className="w-[240px] h-[40px] object-contain" />
          </div>
        </div>

        {/* Navigation */}
        {md ? (
          <div className="flex items-center gap-10 text-primary justify-end mt-5">
            {bottom_menu.map((res, index) => {
              const isActive = location.pathname === res.link;
              return (
                <div key={index} className="text-lg relative group cursor-pointer font-primary">
                  <Link to={res.link} className="pb-1 border-b-2 transition-all duration-300">
                    <p className={`${isActive ? "border-primary" : "!border-transparent hover:border-primary"}`}>{res.name}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <Button type="primary" icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} className="!bg-primary" />
            <Drawer title="Menu" placement="left" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
              <Menu mode="vertical" selectable={false}>
                {bottom_menu.map((res, index) => {
                  <Menu.Item key={index} onClick={() => setDrawerVisible(false)}>
                    <Link className="!font-primary font-semibold !text-primary" to={res.link}>
                      {res.name}
                    </Link>
                  </Menu.Item>;
                })}
              </Menu>

              {/* Mobile Buttons */}
              <div className="mt-6 space-y-3">
                <button className="bg-primary text-white w-full py-2 rounded">Get Touch</button>
                <Link to="/login" onClick={() => setDrawerVisible(false)}>
                  <button className="bg-primary text-white w-full py-2 rounded">Admin</button>
                </Link>
              </div>
            </Drawer>
          </>
        )}

        {/* Buttons + Media Icons on md+ only */}
        {md && (
          <div className="flex items-center gap-3 justify-end">
            <button className="bg-primary !text-white py-1 px-3">Get Touch</button>
            <div className="flex items-center gap-2">
              {nav_links.map((res, index) => {
                const MediaIcon = res.icon;
                return (
                  <Tooltip key={index} title={res.name}>
                    <Link to={res.link}>
                      <div className="text-lg bg-gray-300 p-1 rounded-sm hover:bg-primary hover:text-white cursor-pointer">
                        <MediaIcon />
                      </div>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
            <div>
              <Link to="/login">
                <button className="bg-primary !text-white font-primary py-1 px-2 ml-2">Admin</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
