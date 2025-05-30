import React, { useState } from "react";
import { bottom_menu, GET_PRODUCT_IMAGE, GET_SUBCATEGORY_BY_CATEGORY, nav_links, PRODUCT_COLLECTIONS_CATEGORIES, PRODUCT_COLLECTIONS_SUB_CATEGORIES, top_nav } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Avatar, Button, Card, Divider, Tooltip } from "antd";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [current_id, setCurrentId] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-primary h-[100px] font-primary">
        <div className="w-[80%] text-white h-full m-auto flex items-center justify-between">
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
                      <h1 className="text-sm text-white">{res.heading}</h1>
                      <h1 className="text-[15px] text-white">{res.content}</h1>
                    </div>
                    {index !== top_nav.length - 1 && <Divider type="vertical" className="!border-white !h-[50px]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="h-[70px] flex items-center justify-around gap-[150px]">
        <div className="flex !items-center gap-8 text-primary">
          {bottom_menu.map((res, index) => {
            const isActive = location.pathname === res.link;
            const isProductVault = res.name === "Product Vault";

            return (
              <div key={index} className="text-lg relative group cursor-pointer font-primary">
                <Link to={!isProductVault ? res.link : "#"} className={`pb-1 border-b-2 transition-all duration-300`}>
                  <p className={`${isActive ? "border-primary" : "!border-transparent hover:border-primary"}`}>{res.name}</p>
                </Link>

                {isProductVault && (
                  <div className="absolute hidden group-hover:flex flex-col min-w-[250px]  left-0   text-black  top-[100%] z-50">
                    {PRODUCT_COLLECTIONS_CATEGORIES.map((res2, index) => {
                      return (
                        <div className="relative group/item" key={index}>
                          <Link onMouseEnter={() => setCurrentId(res2.category_name)} to="/collections" state={{ cat_id: res2.category_name }}>
                            <Card className="w-full !rounded-none h-[50px] hover:!bg-primary group-hover/item:!bg-primary">
                              <Card.Meta avatar={<Avatar className="!rounded-none !-mt-[10px]" src={GET_PRODUCT_IMAGE(GET_SUBCATEGORY_BY_CATEGORY(res2.category_name), true)} />} description={<div className="!font-primary group-hover/item:!text-white">{res2.name}</div>} />
                            </Card>
                          </Link>

                          {/* {current_id === res2.category_name && (
                          <div className="absolute top-0 left-full min-w-[500px] flex flex-wrap bg-white shadow-lg z-50">
                            {PRODUCT_COLLECTIONS_SUB_CATEGORIES.filter((subCategory) => subCategory.category_id === res2.category_name).map((subRes, subIndex) => (
                              <Link
                                to="/collections"
                                state={{
                                  cat_id: res2.category_name,
                                  sub_cat: subRes.sub_category_name,
                                }}
                                key={subIndex}
                                className="w-[49.5%]"
                              >
                                <Card className="w-full border-slate-100 hover:bg-slate-100">
                                  <Card.Meta avatar={<Avatar src={GET_PRODUCT_IMAGE(subRes.sub_category_name)} />} description={<div className="mt-1 group-hover/item:text-primary">{subRes.name}</div>} />
                                </Card>
                              </Link>
                            ))}
                          </div>
                        )} */}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact and Social Icons */}
        <div className="flex items-center gap-5">
          <button className="bg-primary !text-white font-bold py-2 px-5">Get Touch</button>
          <div className="flex items-center gap-1">
            {nav_links.map((res, index) => {
              const MediaIcon = res.icon;
              return (
                <Tooltip key={index} title={res.name}>
                  <Link to={res.link}>
                    <div className="text-lg  bg-gray-300 p-2 rounded-sm hover:bg-primary hover:text-white cursor-pointer">
                      <MediaIcon />
                    </div>
                  </Link>
                </Tooltip>
              );
            })}
          </div>
          <div>
            <Link to="/login">
              <button className="bg-primary !text-white !font-primary  py-2 rounded-sm px-2 ml-[20px]">Admin </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
