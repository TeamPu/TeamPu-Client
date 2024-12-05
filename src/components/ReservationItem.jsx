import { axios, requests } from "../apis";
import { getCookie } from "../utils";

export default function ReservationItem({
  id,
  year,
  date,
  time,
  people,
  admin,
  setVisible,
  setText,
  setReload,
}) {
  const data = { applicationId: id, status: "" };

  const onModal = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };

  async function manageResRequest() {
    await axios.post(
      requests.postResAcceptDecline,
      { ...data },
      { headers: { Authorization: getCookie("token") } },
    );
    if (data.status === "APPROVED") {
      setText("승인");
      setReload();
      onModal();
    } else {
      setText("반려");
      setReload();
      onModal();
    }
  }

  async function deleteResRequest() {
    await axios.delete(requests.deleteReservation + id, {
      headers: { Authorization: getCookie("token") },
    });
  }

  return (
    <div className="shared-border flex h-20 w-full justify-between bg-white px-4 py-6 md:bg-secondary-light">
      <div className="flex gap-x-7">
        <div className="flex h-full flex-col justify-center">
          <p className="text-center text-sm font-semibold">{year}</p>
          <p className="text-center text-xl font-bold text-primary">{date}</p>
        </div>
        <div className="flex h-full flex-col justify-center">
          <p className="text-center text-sm">{time}</p>
          <p className="text-center text-xl font-semibold">{people}</p>
        </div>
      </div>
      <div className="flex w-20 flex-col justify-center gap-y-1">
        {admin ? (
          <>
            <button
              className="button res-positive-button"
              onClick={() => {
                data.status = "APPROVED";
                console.log(data);
                manageResRequest();
              }}
            >
              승인
            </button>
            <button
              className="res-negative-button"
              onClick={() => {
                data.status = "REJECTED";
                console.log(data);
                manageResRequest();
              }}
            >
              거부
            </button>
          </>
        ) : (
          <>
            <button
              className="res-negative-button"
              onClick={() => deleteResRequest()}
            >
              취소
            </button>
          </>
        )}
      </div>
    </div>
  );
}
