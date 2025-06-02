import SideNavbar from "./SideNavbar";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const AdminLayout = () => {
  return (
    <div className="flex w-screen h-screen admin  bg-white">
      <div className="w-[180px] fixed border-r-4">
        <SideNavbar />
      </div>
      <div className="flex flex-col pl-[180px] w-full">
        <TopNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
