import { Link, NavLink } from "react-router-dom";
import { getCookie } from "../utils/getCookie";
export default function SideNavBar() {
  const links = ["/", "/reservation", "/mypage", "rules"];
  const menus = ["홈", "내 예약", "내 정보 관리", "이용수칙"];
  return (
    <div
      className={`hidden h-full w-[300px] flex-col justify-between bg-white px-10 py-14 md:flex`}
    >
      <div>
        <p className="epilogue mb-12 h-fit w-full text-center text-4xl font-extrabold">
          <span className="text-primary">Team</span>Pu
        </p>
        <div className="menu flex flex-col gap-5">
          {!getCookie("admin") &&
            links.map((link, i) => {
              return (
                <NavLink
                  key={i}
                  to={link}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-black"
                  }
                >
                  {menus[i]}
                </NavLink>
              );
            })}
        </div>
      </div>
      {getCookie("token") ? (
        <Link
          onClick={() => {
            document.cookie = "token=; max-age=0; path=/";
            document.cookie = "admin=; max-age=0; path=/";
            window.location.href = "/";
          }}
          to="/"
        >
          로그아웃
        </Link>
      ) : (
        <Link to="/login" className="hover:text-primary">
          로그인
        </Link>
      )}
    </div>
  );
}
