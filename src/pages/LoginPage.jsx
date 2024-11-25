import { LoginForm } from "../components/";
import ReservationImg from "../assets/reservation.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      <div className="grid flex-1 place-items-center">
        <div>
          <div className="epilogue mb-5 h-fit w-full text-center text-6xl font-extrabold">
            <span className="text-primary">Log</span>in
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="hidden flex-1 place-items-center bg-primary md:grid">
        <Link to="/" className="flex flex-col items-center gap-y-2.5">
          <p className="epilogue h-fit w-full text-center text-6xl font-extrabold">
            <span className="text-white">Team</span>Pu
            <br />
          </p>
          <p className="font-xl text-center text-white">
            팀프로젝트실 야간 잔류 신청 시스템
          </p>
          <img src={ReservationImg} alt="Reservation" className="w-48" />
        </Link>
      </div>
    </div>
  );
}
