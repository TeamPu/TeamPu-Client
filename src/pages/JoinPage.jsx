import GreetingImg from "../assets/greeting.png";
import { Link } from "react-router-dom";
import { JoinForm } from "../components";

export default function JoinPage() {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden flex-1 place-items-center md:grid">
        <Link to="/" className="flex flex-col items-center gap-y-2.5">
          <div className="grid h-fit w-full place-items-center">
            <img src={GreetingImg} alt="Greeting" className="w-48" />
          </div>
          <div className="epilogue h-fit w-full text-center text-6xl font-extrabold">
            <span>Welcome to </span>
            <br />
            <span className="text-primary">Team</span>Pu!
          </div>
        </Link>
      </div>
      <div className="grid flex-1 place-items-center bg-primary">
        <div className="w-[80%] md:w-[50%]">
          <div className="mb-2.5 h-fit w-full text-center text-white">
            <p className="epilogue w-full text-6xl font-extrabold">Join</p>
            <p className="text-center text-base">
              팀프로젝트실 예약에 필요한 정보입니다.
              <br />
              정확하게 입력해 주세요.
            </p>
          </div>
          <JoinForm />
        </div>
      </div>
    </div>
  );
}
