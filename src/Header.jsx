import HeaderLogo from "./assets/TeamPuHeaderLogo.svg";
export default function Header() {
  return (
    <div className="grid h-[220px] w-full place-items-center bg-white">
      <img src={HeaderLogo} className="w-[440px]"></img>
    </div>
  );
}
