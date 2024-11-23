import { Outlet } from "react-router-dom";
import SideNavBar from "../containers/SideNavBar";

export default function AppFrame() {
  return (
    <div className="flex h-screen w-screen">
      <SideNavBar />
      <Outlet />
    </div>
  );
}
