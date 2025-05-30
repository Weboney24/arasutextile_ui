import { useDispatch } from "react-redux";
import _ from "lodash";
import { assignRole } from "../redux/role_slice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { adminToken } from "../helper/notification_helper";
import { Dropdown } from "antd";
import { ICON_HELPER } from "../helper/iconhelper";

const TopNavbar = () => {
  let items = [
    // {
    //   key: "2",
    //   label: "My Profile",
    //   path: "/profile",
    // },
    {
      key: "3",
      label: "Change Password",
      path: "/change-password",
    },
  ];

  const navigate = useNavigate();

  // const role = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      localStorage.removeItem(adminToken);
      dispatch(assignRole({}));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleMenuClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const menuItems = items.map((item) => ({
    key: item.key,
    label: (
      <div onClick={() => handleMenuClick(item.path)} className="cursor-pointer">
        {item.label}
      </div>
    ),
  }));

  return (
    <div className="!bg-primary  !h-[50px] !w-full py-4 !font-primary !px-4 gap-x-6 !text-white !flex !items-center  !justify-end  top-0 left-[200px]">
      <Dropdown menu={{ items: menuItems }} placement="bottomLeft" className="items-center flex justify-betwee gap-x-2 cursor-pointer">
        <div className="capitalize">
          Admin <ICON_HELPER.ADMIN_ICON />
        </div>
      </Dropdown>

      <Link to={"/"} target="" className="cursor-pointer   gap-x-2 !text-white flex items-center justify-center">
        Visit Site <ICON_HELPER.COUNTRY_ICON className="animate-pulse" />
      </Link>

      <div onClick={handleLogout} className="bg-primary flex items-center justify-center   !font-primary rounded text-sm px-3 py-1 text-white gap-x-2 cursor-pointer">
        Logout
        <ICON_HELPER.LOGO_OUT className="!text-white" />
      </div>
    </div>
  );
};

export default TopNavbar;
