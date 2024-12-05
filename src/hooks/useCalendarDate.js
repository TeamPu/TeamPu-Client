import { useState } from "react";

export const useCalendarDate = () => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const [firstDay, setFirstDay] = useState(firstDayOfMonth);
  const [lastDay, setLastDay] = useState(lastDayOfMonth);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [value, onChange] = useState(new Date());

  const handlePrevMonth = () => {
    const newMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const newYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setFirstDay(new Date(newYear, newMonth - 1, 1));
    setLastDay(new Date(newYear, newMonth, 0));
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const newYear = currentMonth === 12 ? currentYear + 1 : currentYear;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setFirstDay(new Date(newYear, newMonth - 1, 1));
    setLastDay(new Date(newYear, newMonth, 0));
  };

  const isPrevDisabled = firstDay <= new Date(2000, 0, 1);
  const isNextDisabled = lastDay >= new Date(2100, 11, 31);

  return {
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
    today,
  };
};
