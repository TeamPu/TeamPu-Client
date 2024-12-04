import { Link } from "react-router-dom";
import { ReservationMenuButton, ReservationView } from "../components/";
import { useReservationMenu } from "../hooks/";
import { getCookie } from "../utils";

export default function MyReservationPage() {
  const { selected, handleClicked } = useReservationMenu();
  const menuProps = { selected, handleClicked };

  return (
    <div className="section">
      <div className="card cardSize flex flex-col">
        {getCookie("token") ? (
          <>
            <p className="title">내 예약</p>
            <ReservationMenuButton {...menuProps} />
            <ReservationView {...menuProps} />
          </>
        ) : (
          <div className="grid h-full w-full place-items-center">
            <div className="flex flex-col items-center justify-center gap-y-2.5">
              로그인 후 이용 가능해요!
              <Link
                to="/login"
                className="shared-border px-4 py-2 transition duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                로그인하기
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
