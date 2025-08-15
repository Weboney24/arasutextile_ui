import React, { useState } from "react";
import { bottom_menu, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, nav_links, PRODUCT_COLLECTIONS_CATEGORIES, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Avatar, Button, Card, Collapse, Divider, Drawer, Grid, Menu, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Panel from "antd/es/splitter/Panel";

const Navbar = () => {
  const location = useLocation();
  const [current_id, setCurrentId] = useState(false);
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
              const isProductVault = res.name === "Product Vault";

              return (
                <div key={index} className="text-lg relative group cursor-pointer font-primary">
                  <Link to={isProductVault ? "#" : res.link} className="pb-1 border-b-2 transition-all duration-300">
                    <p className={`${isActive ? "border-primary" : "!border-transparent hover:border-primary"}  !m-0`}>{res.name}</p>
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
        )}

        {/* Right side - icons + top_nav */}
        {lg ? (
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
        ) : (
          <>
            <Button type="primary" icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} className="!bg-primary" />
            <Drawer title="Menu" placement="left" onClose={() => setDrawerVisible(false)} open={drawerVisible}>
              <Menu mode="inline" selectable={false}>
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
                      <Menu.SubMenu key="product-vault" title={<span className="!font-primary font-semibold !text-primary">{res.name}</span>}>
                        {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, catIndex) => (
                          <Menu.Item key={`cat-${catIndex}`}>
                            <Link to="/collections" state={{ cat_id: res2.category_name }} onClick={() => setDrawerVisible(false)}>
                              <Card className="hover:bg-primary !font-primary font-semibold !text-primary">
                                <Card.Meta avatar={<Avatar src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<span className="font-primary">{res2.name}</span>} />
                              </Card>
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu.SubMenu>
                    );
                  }
                })}
              </Menu>
            </Drawer>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
