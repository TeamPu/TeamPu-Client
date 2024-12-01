import { Link } from "react-router-dom";
import { CalendarNavButton, HomeCalendar } from "../components/";
import { useCalendarDate } from "../hooks/";

export default function HomePage() {
  const {
    firstDay,
    lastDay,
    handlePrevMonth,
    handleNextMonth,
    isPrevDisabled,
    isNextDisabled,
    currentMonth,
    currentYear,
    value,
    onChange,
  } = useCalendarDate();

  const calendarProps = {
    firstDay,
    lastDay,
    handlePrevMonth,
    handleNextMonth,
    isPrevDisabled,
    isNextDisabled,
    currentMonth,
    currentYear,
    value,
    onChange,
  };

  return (
    <section className="section">
      <div className="card">
        <div className="flex justify-between">
          <div className="flex gap-x-4">
            <p className="title">야간 잔류 신청 현황</p>
            <CalendarNavButton {...calendarProps} />
          </div>
          <Link
            to="/form"
            className="h-full pt-2 text-sm text-secondary-dark underline hover:text-black md:text-base"
          >
            신청하기
          </Link>
        </div>
        <HomeCalendar {...calendarProps} />
      </div>
    </section>
  );
}
