import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { axios, requests } from "../apis";
import { getCookie } from "../utils";
import { useMemberJoin } from "../hooks";

export default function MyPageForm({ setEditable, editable }) {
  const [user, setUser] = useState();
  const { handleEditChange, handleEditSubmit, editData, editedData } =
    useMemberJoin();

  useEffect(() => {
    axios
      .get(requests.fetchUserInfo, {
        headers: { Authorization: getCookie("token") },
      })
      .then((response) => {
        setUser(response.data.body);
      })
      .catch((error) => console.error(error));
  }, [editedData]);

  const fields = [
    { label: "이름", type: "text", id: "name", name: "name" },
    { label: "아이디", type: "text", id: "loginId", name: "loginId" },
    { label: "전화번호", type: "tel", id: "phoneNumber", name: "phoneNumber" },
    { label: "이메일", type: "email", id: "email", name: "email" },
  ];

  return (
    <div className="mt-5 flex flex-col gap-y-2.5">
      {fields.map((field, index) => (
        <FormInput
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          name={field.name}
          placeholder={user ? user[field.id] : field.label}
          disabled={index === 1 ? true : !editable}
          value={editData[field.id]}
          onChange={(e) => {
            handleEditChange(e);
          }}
        />
      ))}
      <button
        onClick={() => {
          handleEditSubmit();
          setUser(editedData);
          setEditable(false);
        }}
        className={`shared-border mt-4 w-fit px-4 py-2 duration-300 ease-in-out hover:bg-primary hover:text-white ${editable ? "" : "hidden"}`}
      >
        완료
      </button>
    </div>
  );
}
