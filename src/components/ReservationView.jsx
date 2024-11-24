import ReservationItem from "./ReservationItem";

export default function ReservationView() {
  // 나중에 selected 받아와서 백엔드연동
  return (
    <div className="flex h-full w-full flex-col gap-y-2.5 overflow-scroll">
      {Array.from({ length: 7 }).map((_, index) => {
        return (
          <ReservationItem
            key={index}
            year="2024"
            date="11/12"
            time="17:00 ~ 22:00"
            people="서왕덕 외 7명"
          />
        );
      })}
    </div>
  );
}
