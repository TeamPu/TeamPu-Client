import HomeCalendar from "./HomeCalendar";

export default function ReservationStatusSection() {
  return (
    <div className="card h-full">
      <p className="title">
        <span className="text-primary">11월</span> 야간 잔류 신청 현황
      </p>
      <div className="grid h-full place-items-center">
        <HomeCalendar showDoubleView={false} />
      </div>
    </div>
  );
}
