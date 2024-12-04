import { useState, useEffect } from "react";
import { useAdminView } from "../hooks";
import ReservationItem from "./ReservationItem";

export default function ReservationView({ admin = false }) {
  const { fetchAdminReservation } = useAdminView();
  const [res, setRes] = useState([]);

  async function waitData() {
    const response = await fetchAdminReservation();
    setRes(response);
  }

  useEffect(() => {
    if (admin) {
      waitData();
    }
  }, []);

  // 나중에 selected 받아와서 백엔드연동
  return (
    <div className="flex h-full w-full flex-col gap-y-2.5 overflow-scroll">
      {res.length === 0 ? (
        <p>예약이 없습니다.</p>
      ) : (
        res.map((data, index) => {
          return (
            <ReservationItem
              key={index}
              year={data.startTime.slice(0, 4)}
              date={data.startTime.slice(5, 10)}
              time={`${data.startTime.slice(11, 16)} ~ ${data.endTime.slice(11, 16)}`}
              people={`${data.applicant.name} 외 ${data.applicantCount - 1}명`}
              admin={admin}
            />
          );
        })
      )}
    </div>
  );
}
