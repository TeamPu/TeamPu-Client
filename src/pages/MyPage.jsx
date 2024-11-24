import { MyPageForm } from "../components";

export default function MyPage() {
  return (
    <div className="section">
      <div className="card cardSize flex flex-col">
        <p className="title">내 정보 관리</p>
        <MyPageForm />
      </div>
    </div>
  );
}
