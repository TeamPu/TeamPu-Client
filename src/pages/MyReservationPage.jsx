import { ReservationMenuButton } from "../components/";

export default function MyReservationPage() {
  return (
    <div className="section">
      <div className="card h-[70vh] w-[55vw]">
        <p className="title">내 예약</p>
        <ReservationMenuButton />
      </div>
    </div>
  );
}
