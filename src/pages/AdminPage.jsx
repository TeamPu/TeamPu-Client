import { SideNavBar } from "../containers";
import { ReservationMenuButton, ReservationView } from "../components/";
import { useReservationMenu } from "../hooks/";
import { getCookie } from "../utils";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const { selected, handleClicked } = useReservationMenu();
  const menuProps = { selected, handleClicked };
  return (
    <div className="flex h-screen w-screen">
      <SideNavBar />
      <div className="section">
        <div className="card cardSize flex flex-col">
          <p className="title">예약 내역 관리</p>
          <ReservationMenuButton {...menuProps} />
          <ReservationView {...menuProps} admin={true} />
          {getCookie("admin") && (
            <Link
              className="flex md:hidden"
              onClick={() => {
                document.cookie = "token=; max-age=0; path=/";
                document.cookie = "admin=; max-age=0; path=/";
                window.location.host("/");
              }}
              to="/"
            >
              로그아웃
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
