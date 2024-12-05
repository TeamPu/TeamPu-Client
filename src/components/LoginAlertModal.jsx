import { IoIosClose } from "react-icons/io";

export default function LoginAlertModal({ visible = false, onClick }) {
  return (
    <div
      className={`${
        visible
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      } absolute left-[50%] top-1/2 z-30 grid h-24 w-64 translate-x-[-50%] translate-y-[-50%] items-center rounded-[15px] bg-black/70 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute right-4 top-3 hover:text-primary"
        onClick={() => onClick(false)}
      >
        <IoIosClose size={24} />
      </button>
      <p className="text-center">로그인 후 신청 가능해요!</p>
    </div>
  );
}
