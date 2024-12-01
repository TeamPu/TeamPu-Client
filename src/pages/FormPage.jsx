import { Link } from "react-router-dom";
import {
  CalendarNavButton,
  HomeCalendar,
  ReservationForm,
} from "../components/";
import { useCalendarDate } from "../hooks/";

export default function FormPage() {
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
    <section className="flex h-screen w-screen flex-col gap-x-4 p-4 md:flex-row">
      <div className="card flex h-full flex-col justify-between">
        <div className="flex justify-between">
          <p className="title">야간 잔류 신청하기</p>
          <CalendarNavButton {...calendarProps} />
        </div>
        <HomeCalendar {...calendarProps} />
      </div>
      <div className="flex w-full flex-col gap-y-4">
        <div className="card h-full">
          <p className="title pb-5">정보 입력하기</p>
          <ReservationForm date={value} />
        </div>
        <Link
          className="button mb-4 rounded-[15px] p-5 text-2xl font-semibold md:mb-0"
          to="/complete"
        >
          <p>신청하기</p>
        </Link>
      </div>
    </section>
  );
}
