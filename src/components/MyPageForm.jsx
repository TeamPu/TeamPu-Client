import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { axios, requests } from "../apis";
import { getCookie } from "../utils";

export default function MyPageForm() {
  const [user, setUser] = useState();
  const [editable, setEditable] = useState(false);

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

  const fields = [
    { label: "이름", type: "text", id: "name", name: "name" },
    { label: "아이디", type: "text", id: "loginId", name: "loginId" },
    { label: "전화번호", type: "tel", id: "phoneNumber", name: "phoneNumber" },
    { label: "이메일", type: "email", id: "email", name: "email" },
  ];

  return (
    <div className="mt-5 flex flex-col gap-y-2.5">
      <button onClick={() => setEditable(true)}>수정하기</button>
      {fields.map((field) => (
        <FormInput
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          name={field.name}
          placeholder={user ? user[field.id] : field.label}
          disabled={!editable}
        />
      ))}
      <button
        onClick={() => setEditable(false)}
        className={`${editable ? "" : "hidden"}`}
      >
        완료
      </button>
    </div>
  );
}
