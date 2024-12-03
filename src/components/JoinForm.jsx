import { useState, useReducer } from "react";
import FormInput from "./FormInput";
import { axios, requests } from "../apis";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function JoinForm() {
  const navigate = useNavigate();
  const reducer = (state, action) => {
    return { ...state, [action.name]: action.value };
  };

  const initialState = {
    loginId: "",
    password: "",
    name: "",
    college: "",
    department: "",
    phoneNumber: "",
    email: "",
  };

  const placeholders = [
    "ID",
    "비밀번호",
    "이름",
    "소속 단과대",
    "학과 또는 전공",
    "전화번호",
    "이메일",
  ];

  const [formData, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const joinMember = (data) => {
    axios.post(requests.postMemberJoin, data);
  };

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("모든 필드를 채워주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      joinMember({ ...formData, type: "UNDERGRADUATE" });
      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패. 다시 시도해주세요.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-2.5">
      {Object.keys(initialState).map((key, index) => (
        <FormInput
          key={key}
          noLabel={true}
          type={key === "email" ? "email" : "text"}
          id={key}
          name={key}
          placeholder={placeholders[index]}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}
      <div className="flex w-full justify-center">
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="grid w-[40%] place-items-center rounded-[8px] bg-primary-dark py-2 text-white transition duration-200 ease-in-out hover:bg-white hover:text-primary"
        >
          {loading ? "가입 중..." : "가입하기"}
        </button>
      </div>
    </div>
  );
}
