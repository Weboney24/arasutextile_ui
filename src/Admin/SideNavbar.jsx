import { useState } from "react";
import { Menu } from "antd";
import { Link, useHref } from "react-router-dom";
import { MENU_ITEMS } from "../helper/sidenavbarItem";
import { IMAGE_HELPER } from "../helper/imagehelper";

const SideNavbar = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const path = useHref();

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div className="h-screen w-full overflow-scroll pb-20 gap-y-4 flex flex-col !bg-primary">
      <Link to="/admin-blogs" className="!pl-2 !pt-4 !pb-2">
        <img src={IMAGE_HELPER.ARASU_LOGO} alt="Logo" className="h-[40px] w-auto mt-4" />
      </Link>

      <Menu className="w-full !border-none !bg-primary" mode="vertical" openKeys={openKeys} onOpenChange={onOpenChange}>
        {MENU_ITEMS.map((item) => (
          <Menu.Item key={item.id} className={`border-b border-t !mt-8 !border-white !h-[60px] ${item.to === path ? "!bg-primary" : "!bg-white"} !rounded-none`}>
            <Link to={item.to || "#"} className="!font-primary !text-white !text-lg !pt-10">
              {item.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SideNavbar;
