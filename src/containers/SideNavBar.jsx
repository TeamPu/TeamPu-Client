import Logo from "../assets/TeamPuLogo.png";
export default function SideNavBar() {
  return (
    <div className="grid h-full w-[220px] bg-white px-5 py-14">
      <div className="grid h-fit w-full place-items-center">
        <img src={Logo} className="w-[150px]" />
      </div>
      <div></div>
    </div>
  );
}
