import { useState } from "react";
import Calendar from "react-calendar";
import "./HomeCalendar.css";
import moment from "moment";

export default function HomeCalendar({ firstDay, lastDay }) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={firstDay}
        maxDate={lastDay}
        formatDay={(locale, date) => moment(date).format("DD")}
        showDoubleView={false}
      />
    </div>
  );
}
