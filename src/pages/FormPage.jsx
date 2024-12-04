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
    <section className="flex h-screen w-screen flex-col gap-x-4 md:flex-row md:p-4">
      <div className="card flex h-full flex-col justify-between">
        <div className="h-4 md:hidden"></div>
        <div className="flex justify-between">
          <p className="title mb-4 md:mb-0">야간 잔류 신청하기</p>
          <CalendarNavButton {...calendarProps} />
        </div>
        <HomeCalendar {...calendarProps} />
      </div>
      <div className="flex w-full flex-col gap-y-4">
        <div className="h-full w-full bg-secondary-light px-6 py-4 md:rounded-[15px] md:bg-white md:p-10">
          <p className="title pb-4">정보 입력하기</p>
          <ReservationForm date={value} />
        </div>
        <Link
          className="button mx-4 mb-4 rounded-[15px] p-3 text-lg font-semibold md:mx-0 md:mb-0 md:p-5 md:text-2xl"
          to="/complete"
        >
          <p>신청하기</p>
        </Link>
      </div>
    </section>
  );
}
