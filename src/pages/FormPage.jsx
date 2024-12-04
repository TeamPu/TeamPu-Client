import {
  CalendarNavButton,
  HomeCalendar,
  ReservationForm,
} from "../components/";
import { useCalendarDate } from "../hooks/";
import { axios, requests } from "../apis";
import { getCookie } from "../utils";

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

  const data = {
    startTime: "2024-12-01T10:00:00",
    endTime: "2024-12-01T12:00:00",
    appliedDate: "2024-12-01",
    status: "PENDING",
    coApplicants: [
      {
        name: "정재우",
        phoneNumber: "010-1111-1111",
        admin: false,
      },
      {
        name: "이유성",
        phoneNumber: "010-5501-6547",
        admin: false,
      },
    ],
  };

  async function handleForm() {
    console.log(data);
    await axios.post(requests.postNewReservation, data, {
      headers: { Authorization: getCookie("token") },
    });
    window.location.href = "/complete";
  }

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
        <button
          className="button mx-4 mb-4 rounded-[15px] p-3 text-lg font-semibold md:mx-0 md:mb-0 md:p-5 md:text-2xl"
          onClick={() => {
            handleForm();
          }}
        >
          <p>신청하기</p>
        </button>
      </div>
    </section>
  );
}
