import { Link, NavLink } from "react-router-dom";
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
          {links.map((link, i) => {
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
      <Link to="/login" className="hover:text-primary">
        로그인
      </Link>
      {/* 차후 로그인 되어있으면 로그아웃, 로그인 되어있지 않으면 로그인으로 conditional rendering */}
    </div>
  );
}
