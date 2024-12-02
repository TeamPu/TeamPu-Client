import { Outlet } from "react-router-dom";
import { SideNavBar, MobileNavBar } from "../containers/";

export default function AppFrame() {
  return (
    <div className="flex h-screen w-screen">
      <SideNavBar />
      <MobileNavBar />
      <Outlet />
    </div>
  );
}
