import { useReservationMenu } from "../hooks/useReservationMenu";

export default function ReservationMenuButton() {
  const { selected, handleClicked } = useReservationMenu();
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
// const MenuReviewToggleButton = styled.div`
//   width: 86px;
//   height: 30px;
//   background-color: #333;
//   margin-left: 10px;
//   border-radius: 4px;
//   align-items: center;
//   justify-content: space-between;
//   display: flex;
//   padding: 2px;
//   box-sizing: border-box;
// `;

// const MenuReviewToggleWrapper = styled.div`
//   display: flex;
//   height: 30px;
//   width: 100%;
//   margin-bottom: 10px;

//   @media (max-width: 480px) {
//     margin-bottom: 0px;
//   }
// `;
// const MenuReviewToggleContent = styled.button`
//   width: 40px;
//   height: 26px;
//   background-color: ${({ isSelected }) => (isSelected ? '#444' : '#333')};
//   color: ${({ isSelected }) => (isSelected ? '#fff' : '#aaa')};
//   font: 500 12px/1.5 Pretendard;
//   border: none;
//   border-radius: 2px;

//   @media (max-width: 480px) {
//     font-size: 10px;
//   }
// `;
