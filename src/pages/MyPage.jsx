import { Link } from "react-router-dom";
import { MyPageForm } from "../components";
import { getCookie } from "../utils";
import { useState } from "react";

export default function MyPage() {
  const [editable, setEditable] = useState(false);

  return (
    <div className="section">
      <div className="card cardSize flex flex-col">
        {getCookie("token") ? (
          <>
            <div className="flex w-full justify-between">
              <p className="title">내 정보 관리</p>
              <button
                className="shared-border w-fit px-4 py-2 text-sm duration-300 ease-in-out hover:bg-primary hover:text-white"
                onClick={() => setEditable(true)}
              >
                수정하기
              </button>
            </div>

            <MyPageForm editable={editable} setEditable={setEditable} />
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
