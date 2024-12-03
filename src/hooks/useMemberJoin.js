import { axios, requests } from "../apis";
import { useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";

export const useMemberJoin = () => {
  const initialState = {
    loginId: "",
    password: "",
    name: "",
    college: "",
    department: "",
    phoneNumber: "",
    email: "",
  };

  const initialLoginState = {
    loginId: "",
    password: "",
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

  const reducer = (state, action) => {
    return { ...state, [action.name]: action.value };
  };

  const navigate = useNavigate();
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [loginData, loginDispatch] = useReducer(reducer, initialLoginState);
  const [loading, setLoading] = useState(false);

  const joinMember = (data) => {
    axios.post(requests.postMemberJoin, data);
  };

  const postLogin = (data) => {
    axios.post(requests.postMemberLogin, data).then((response) => {
      document.cookie = `token=${response.headers.authorization}; max-age=3600; path=/`;
    });
  };

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleLoginChange = (e) => {
    loginDispatch({ name: e.target.name, value: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("모든 정보를 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      joinMember({ ...formData, type: "UNDERGRADUATE" });
      alert("가입되었습니다.");
      navigate("/login");
    } catch (error) {
      alert("회원가입 실패. 다시 시도해주세요.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const validateLoginForm = () => {
    if (!loginData.loginId || !loginData.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleLoginSubmit = async () => {
    if (!validateLoginForm()) return;
    setLoading(true);
    try {
      postLogin({ ...loginData });
      navigate("/");
    } catch (error) {
      alert("아이디와 비밀번호를 확인해주세요.");
      console.error(error);
    }
  };

  return {
    initialState,
    placeholders,
    reducer,
    joinMember,
    handleChange,
    handleSubmit,
    validateForm,
    loading,
    postLogin,
    handleLoginSubmit,
    handleLoginChange,
    loginData,
  };
};
