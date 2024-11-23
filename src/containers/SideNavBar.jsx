import { Link } from "react-router-dom";
import Logo from "../assets/TeamPuLogo.png";
export default function SideNavBar() {
  const links = ["/", "/reservation", "/mypage", "rules"];
  const menus = ["홈", "내 예약", "내 정보 관리", "이용수칙"];
  return (
    <div className="h-full w-[300px] bg-white px-10 py-14">
      <div>
        <div className="mb-20 h-fit w-full">
          <img src={Logo} />
        </div>
        <div className="flex flex-col gap-5">
          {links.map((link, i) => {
            return (
              <Link key={i} to={link} className="menu">
                {menus[i]}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
