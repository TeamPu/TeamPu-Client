export default function ReservationMenuButton({ selected, handleClicked }) {
  const menus = ["승인 완료", "대기중", "지난 예약", "취소된 예약"];

  return (
    <div className="my-5 flex h-10 w-fit rounded-lg bg-secondary-light p-1">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`grid h-8 place-items-center rounded sm:w-20 lg:w-28 ${selected === index ? "bg-white" : "bg-secondary-light"} text-sm`}
          onClick={() => handleClicked(index)}
        >
          {menu}
        </div>
      ))}
    </div>
  );
}
