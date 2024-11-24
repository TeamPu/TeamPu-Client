import { ReservationMenuButton, ReservationView } from "../components/";
import { useReservationMenu } from "../hooks/";

export default function MyReservationPage() {
  const { selected, handleClicked } = useReservationMenu();
  const menuProps = { selected, handleClicked };

  return (
    <div className="section">
      <div className="card cardSize flex flex-col">
        <p className="title">내 예약</p>
        <ReservationMenuButton {...menuProps} />
        <ReservationView {...menuProps} />
      </div>
    </div>
  );
}
