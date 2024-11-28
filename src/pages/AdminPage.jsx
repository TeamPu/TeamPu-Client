import SideNavBar from "../containers/SideNavBar";
import { ReservationMenuButton, ReservationView } from "../components/";
import { useReservationMenu } from "../hooks/";

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
        </div>
      </div>
    </div>
  );
}
