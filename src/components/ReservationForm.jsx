import FormInput from "./FormInput";
import moment from "moment";
import GroupForm from "./GroupForm";
import { useEffect, useState } from "react";
import { axios, requests } from "../apis";
import { getCookie } from "../utils";

export default function ReservationForm({ date }) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(requests.fetchUserInfo, {
        headers: { Authorization: getCookie("token") },
      })
      .then((response) => {
        setUser(response.data.body);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex h-full flex-col gap-y-2.5">
      <FormInput
        key="name-id"
        label="이름"
        type="text"
        id="name-id"
        name="name-id"
        disabled={true}
        placeholder={`${user ? user["name"] : ""}`}
      />
      <FormInput
        key="phone-email"
        label="전화번호 · 이메일"
        type="text"
        id="phone-email"
        name="phone-email"
        disabled={true}
        placeholder={`${user ? user["phoneNumber"] : ""} · ${user ? user["email"] : ""}`}
      />
      <FormInput
        key="date"
        label="날짜"
        type="text"
        id="date"
        name="date"
        disabled={true}
        placeholder={moment(date).format("YYYY. MM. DD")}
      />
      <GroupForm />
    </div>
  );
}
