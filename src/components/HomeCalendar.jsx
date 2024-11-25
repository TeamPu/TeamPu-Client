import Calendar from "react-calendar";
import "./HomeCalendar.css";
import moment from "moment";

export default function HomeCalendar({ firstDay, lastDay, value, onChange }) {
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
