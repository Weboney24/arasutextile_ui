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
    <div className="h-screen w-full overflow-y-auto pb-10 flex flex-col bg-primary scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent">
      {/* Logo */}
      <div className="flex justify-center items-center py-6 border-b border-white/20">
        <Link to="/admin-blogs">
          <img src={IMAGE_HELPER.BG_REMOVE_LOGO} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Menu */}
      <Menu mode="vertical" openKeys={openKeys} onOpenChange={onOpenChange} className="w-full bg-transparent !border-none text-white font-medium px-2">
        {MENU_ITEMS.map((item) => {
          const isActive = item.to === path;

          return (
            <Menu.Item
              key={item.id}
              className={`
                !h-14 
                px-4 
                rounded-md 
                mt-3 
                transition-all 
                duration-200 
                font-primary 
                text-base 
                ${isActive ? "!bg-primary !text-white font-semibold shadow-md" : "hover:!bg-white/20"}
              `}
            >
              <Link to={item.to || "#"} className="w-full block h-full leading-[56px]">
                {item.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default SideNavbar;
