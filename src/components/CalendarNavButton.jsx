import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export default function CalendarNavButton({
  handlePrevMonth,
  handleNextMonth,
  isPrevDisabled,
  isNextDisabled,
  currentMonth,
  currentYear,
}) {
  return (
    <div className="flex">
      <button
        onClick={handlePrevMonth}
        disabled={isPrevDisabled}
        aria-label="이전 달 보기"
        className={` ${
          isPrevDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"
        } hover:text-primary`}
      >
        <MdArrowLeft className="pt-1 text-xl md:pt-0 md:text-2xl" />
      </button>
      <span className="title">
        <span className="hidden md:visible">{currentYear}년 </span>
        <span className="text-lg text-primary md:text-2xl">
          {((currentMonth - 1 + 12) % 12) + 1}월
        </span>
      </span>
      <button
        onClick={handleNextMonth}
        disabled={isNextDisabled}
        aria-label="다음 달 보기"
        className={`${
          isNextDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-200"
        } hover:text-primary`}
      >
        <MdArrowRight className="pt-1 text-xl md:pt-0 md:text-2xl" />
      </button>
    </div>
  );
}
