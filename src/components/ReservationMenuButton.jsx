export default function ReservationMenuButton({ selected, handleClicked }) {
  const menus = ["승인 완료", "대기중", "지난 예약", "취소된 예약"];

  return (
    <div className="my-5 flex h-10 w-fit rounded-lg bg-white p-1 md:bg-secondary-light">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`grid h-8 w-20 cursor-pointer place-items-center rounded lg:w-28 ${selected === index ? "md:bg-white" : "md:bg-secondary-light"} ${selected === index ? "bg-secondary-light" : "bg-white"} text-sm`}
          onClick={() => handleClicked(index)}
        >
          {menu}
        </div>
      ))}
    </div>
  );
}
