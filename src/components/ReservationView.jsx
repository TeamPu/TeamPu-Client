import { useState, useEffect } from "react";
import { useAdminView } from "../hooks";
import ReservationItem from "./ReservationItem";
import { axios, requests } from "../apis";
import { getCookie } from "../utils";
import AlertModal from "./AlertModal";

export default function ReservationView({
  selected,
  handleClicked,
  admin = false,
}) {
  const { fetchAdminReservation } = useAdminView();
  const [res, setRes] = useState([]);
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  async function waitDataAdmin() {
    const response = await fetchAdminReservation();
    setRes(response);
  }

  async function waitData() {
    const response = await axios.get(requests.fetchAllMyRes, {
      headers: { Authorization: getCookie("token") },
    });
    setRes(response.data.body);
  }

  useEffect(() => {
    if (admin) {
      handleClicked(1);
      waitDataAdmin();
    } else {
      waitData();
    }
  }, []);

  const status = ["APPROVED", "PENDING", "", "REJECTED"];

  return (
    <div className="flex h-full w-full flex-col gap-y-2.5 overflow-scroll">
      <AlertModal
        text={`${text}처리가 완료되었습니다.`}
        setText={setText}
        visible={modalVisible}
        onClick={setModalVisible}
      />
      {res.length === 0 ? (
        <p>예약이 없습니다.</p>
      ) : (
        res
          .filter((data) => data.status === status[selected])
          .map((data, index) => {
            return (
              <ReservationItem
                id={data.id}
                key={index}
                year={data.startTime.slice(0, 4)}
                date={data.startTime.slice(5, 10)}
                time={`${data.startTime.slice(11, 16)} ~ ${data.endTime.slice(11, 16)}`}
                people={`${data.applicant.name} 외 ${data.applicantCount - 1}명`}
                admin={admin}
                setText={setText}
                setVisible={setModalVisible}
                setReload={waitDataAdmin}
              />
            );
          })
      )}
    </div>
  );
}
