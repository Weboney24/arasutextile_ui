import React, { useState } from "react";
import { bottom_menu, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, nav_links, PRODUCT_COLLECTIONS_CATEGORIES, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Avatar, Button, Card, Collapse, Divider, Drawer, Grid, Menu, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Navbar = () => {
  const location = useLocation();
  const [current_id, setCurrentId] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { md } = Grid.useBreakpoint();

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-red h-[50px] font-primary">
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
          <div className="p-[6px] bg-red">
            <img src={IMAGE_HELPER.BG_REMOVE_LOGO} alt="Logo" className="w-[240px] h-[40px] object-contain" />
          </div>
        </div>

        {/* Navigation */}
        {md ? (
          <div className="flex items-center gap-10 text-primary justify-end mt-5">
            {bottom_menu.map((res, index) => {
              const isActive = location.pathname === res.link;
              const isProductVault = res.name === "Product Vault";

              return (
                <div key={index} className="text-lg relative group cursor-pointer font-primary">
                  <Link to={!isProductVault ? res.link : "#"} className="pb-1 border-b-2 transition-all duration-300">
                    <p className={`${isActive ? "border-primary" : "!border-transparent hover:border-primary"}`}>{res.name}</p>
                  </Link>

                  {isProductVault && (
                    <div className="absolute hidden group-hover:flex flex-col min-w-[250px] left-0 text-black top-[100%] z-50">
                      {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, index) => (
                        <div className="relative group/item" key={index}>
                          <Link onMouseEnter={() => setCurrentId(res2.category_name)} to="/collections" state={{ cat_id: res2.category_name }}>
                            <Card className="w-full !rounded-none h-[50px] hover:!bg-primary group-hover/item:!bg-primary">
                              <Card.Meta avatar={<Avatar className="!rounded-none !-mt-[10px]" src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<div className="!font-primary group-hover/item:!text-white">{res2.name}</div>} />
                            </Card>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
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
                  const isProductVault = res.name === "Product Vault";
                  if (!isProductVault) {
                    return (
                      <Menu.Item key={index} onClick={() => setDrawerVisible(false)}>
                        <Link className="!font-primary font-semibold !text-primary" to={res.link}>
                          {res.name}
                        </Link>
                      </Menu.Item>
                    );
                  } else {
                    return (
                      <Collapse key={index} ghost expandIconPosition="end" className="mb-2">
                        <Panel header={res.name} className="!font-primary font-semibold !text-primary" key="1">
                          {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, catIndex) => (
                            <div key={catIndex} className="mb-2">
                              <Link to="/collections" state={{ cat_id: res2.category_name }} onClick={() => setDrawerVisible(false)}>
                                <Card className="hover:bg-primary !font-primary font-semibold !text-primary">
                                  <Card.Meta avatar={<Avatar src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<span className="font-primary">{res2.name}</span>} />
                                </Card>
                              </Link>
                            </div>
                          ))}
                        </Panel>
                      </Collapse>
                    );
                  }
                })}
              </Menu>

              {/* Mobile Buttons */}
              <div className="mt-6 space-y-3">
                <button className="bg-red text-white w-full py-2 rounded">Get Touch</button>
                <Link to="/login" onClick={() => setDrawerVisible(false)}>
                  <button className="bg-red text-white w-full py-2 rounded">Admin</button>
                </Link>
              </div>
            </Drawer>
          </>
        )}

        {/* Buttons + Media Icons on md+ only */}
        {md && (
          <div className="flex items-center gap-3 justify-end">
            <button className="bg-red !text-white py-1 px-3">Get Touch</button>
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
                <button className="bg-red !text-white font-primary py-1 px-2 ml-2">Admin</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
