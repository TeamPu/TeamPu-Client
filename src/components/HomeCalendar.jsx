import { useState } from "react";
import Calendar from "react-calendar";
import "./HomeCalendar.css";
import moment from "moment";

export default function HomeCalendar() {
  const [value, onChange] = useState(new Date());
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={firstDayOfMonth}
        maxDate={lastDayOfMonth}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
    </div>
  );
}
