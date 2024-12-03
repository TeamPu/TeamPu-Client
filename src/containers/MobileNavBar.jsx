import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useMobileNavBar } from "../hooks";
import { getCookie } from "../utils/getCookie";

export default function MobileNavBar() {
  const links = ["/", "/reservation", "/mypage", "rules"];
  const menus = ["홈", "내 예약", "내 정보 관리", "이용수칙"];
  const { opened, setOpened, sidebarRef, buttonRef } = useMobileNavBar();

  return (
    <div className="relative flex flex-col">
      <button
        ref={buttonRef}
        className="absolute z-20 my-8 px-6 sm:px-8 md:hidden"
        onClick={() => {
          setOpened((prev) => !prev);
        }}
      >
        <IoIosMenu size={24} />
      </button>
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full w-48 transform backdrop-blur-sm transition-transform duration-300 ease-in-out ${opened ? "translate-x-0" : "-translate-x-full"} z-10 flex flex-col justify-between bg-white/80 px-6 py-14 sm:px-8 md:hidden`}
      >
        <div>
          <p className="epilogue mb-8 mt-8 h-fit w-full text-center text-2xl font-extrabold">
            <span className="text-primary">Team</span>Pu
          </p>
          <div className="flex flex-col gap-5 text-xl font-semibold">
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
        {getCookie("token") ? (
          <Link
            onClick={() => {
              document.cookie = "token=; max-age=0; path=/";
              window.location.reload();
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
    </div>
  );
}
