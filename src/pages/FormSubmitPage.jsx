import { Link } from "react-router-dom";
import complete from "../assets/complete.webp";

export default function FormSubmitPage() {
  return (
    <section className="grid h-screen w-screen place-items-center gap-x-4 p-4">
      <div className="card flex flex-col gap-y-3">
        <p className="title">신청 완료</p>
        <div className="flex justify-center">
          <img src={complete} className="w-64" />
        </div>
        <p className="text-lg">신청하신 대기실 예약이 완료되었습니다.</p>
        <Link to="/" className="button rounded-[8px] p-3">
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
