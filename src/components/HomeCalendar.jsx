import Calendar from "react-calendar";
import "./HomeCalendar.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { axios, requests } from "../apis";

export default function HomeCalendar({ firstDay, lastDay, value, onChange }) {
  const [resData, setResData] = useState([]);
  const [dataYM, setDataYM] = useState(null);
  useEffect(() => {
    axios
      .get(requests.fetchAllReservations)
      .then((response) => {
        setResData(response.data.body.days);
        setDataYM({
          month: response.data.body.month,
          year: response.data.body.year,
        });
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={firstDay}
        maxDate={lastDay}
        formatDay={(locale, date) => moment(date).format("D")}
        showDoubleView={false}
        tileContent={({ date }) => {
          if (resData.length > 0 && dataYM) {
            const matchedData = resData.find(
              (data) =>
                date.getDate() === data.day &&
                dataYM.month === date.getMonth() + 1 &&
                dataYM.year === date.getFullYear(),
            );
            if (matchedData) {
              console.log(matchedData, date.getUTCDate());
              return (
                <p
                  className="text-sm text-[#666] md:text-base"
                  key={matchedData.day}
                >
                  <span className="text-primary-dark">
                    {matchedData.reservationCount}
                  </span>
                  팀
                </p>
              );
            }
          }
          return null;
        }}
      />
    </div>
  );
}
