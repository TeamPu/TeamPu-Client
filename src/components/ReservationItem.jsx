export default function ReservationItem({ year, date, time, people, admin }) {
  return (
    <div className="shared-border flex h-20 w-full justify-between bg-secondary-light px-4 py-6">
      <div className="flex gap-x-7">
        <div className="flex h-full flex-col justify-center">
          <p className="text-center text-sm font-semibold">{year}</p>
          <p className="text-center text-xl font-bold text-primary">{date}</p>
        </div>
        <div className="flex h-full flex-col justify-center">
          <p className="text-center text-sm">{time}</p>
          <p className="text-center text-xl font-semibold">{people}</p>
        </div>
      </div>
      <div className="flex w-20 flex-col justify-center gap-y-1">
        {admin ? (
          <>
            <button className="button res-positive-button">승인</button>
            <button className="res-negative-button">거부</button>
          </>
        ) : (
          <>
            <button className="button res-positive-button">편집</button>
            <button className="res-negative-button">취소</button>
          </>
        )}
      </div>
    </div>
  );
}
