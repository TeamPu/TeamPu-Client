import { CalendarNavButton, HomeCalendar, AlertModal } from "../components/";
import { useCalendarDate } from "../hooks/";
import { getCookie } from "../utils";
import { useState } from "react";

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

  const [modal, setModal] = useState(false);

  const onModal = () => {
    setModal(true);
    setTimeout(() => setModal(false), 2000);
  };

  return (
    <section className="section">
      <AlertModal
        visible={modal}
        onClick={setModal}
        text="로그인 후 신청 가능해요!"
      />
      <div className="card">
        <div className="visible mb-10 flex flex-col items-center md:hidden">
          <p className="epilogue h-fit w-full text-center text-5xl font-extrabold">
            <span className="text-primary">Team</span>Pu
            <br />
          </p>
          <p className="m-0 text-center text-sm text-black">
            팀프로젝트실 야간 잔류 신청 시스템
          </p>
        </div>

        <div className="mb-4 flex justify-between md:mb-0">
          <div className="flex items-center gap-x-0 md:gap-x-4">
            <p className="title hidden md:flex">야간 잔류 신청 현황</p>
            <CalendarNavButton {...calendarProps} />
          </div>
          <div className="relative flex-col">
            <button
              className="absolute bottom-9 right-4 h-full pt-2 text-[12px] text-secondary-dark underline hover:text-black md:hidden"
              onClick={() => {
                getCookie("token")
                  ? (window.location.href = "/form")
                  : onModal();
              }}
            >
              신청하기
            </button>
            <p className="visible pr-4 text-lg font-bold md:hidden">
              야간 잔류 신청 현황
            </p>
            <button
              onClick={() => {
                getCookie("token")
                  ? (window.location.href = "/form")
                  : onModal();
              }}
              className="hidden h-full pt-2 text-secondary-dark underline hover:text-black md:flex"
            >
              신청하기
            </button>
          </div>
        </div>
        <HomeCalendar {...calendarProps} />
      </div>
    </section>
  );
}
