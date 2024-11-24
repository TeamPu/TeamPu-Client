export default function ReservationItem({ year, date, time, people }) {
  return (
    <div className="shared-border flex h-20 w-full gap-x-7 bg-secondary-light px-4 py-6">
      <div className="flex h-full flex-col justify-center">
        <p className="text-center text-sm font-semibold">{year}</p>
        <p className="text-center text-xl font-bold text-primary">{date}</p>
      </div>
      <div className="flex h-full flex-col justify-center">
        <p className="text-center text-sm">{time}</p>
        <p className="text-center text-xl font-semibold">{people}</p>
      </div>
    </div>
  );
}
