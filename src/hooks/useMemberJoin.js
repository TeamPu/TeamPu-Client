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

  const loginReducer = (state, action) => {
    switch (action.type) {
      case "RESET":
        return initialLoginState;
      default:
        return { ...state, [action.name]: action.value };
    }
  };

  const navigate = useNavigate();
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [loginData, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState,
  );
  const [loading, setLoading] = useState(false);

  const joinMember = (data) => {
    axios
      .post(requests.postMemberJoin, data)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  const postLogin = (data) => {
    axios
      .post(requests.postMemberLogin, data)
      .then((response) => {
        document.cookie = `token=${response.headers.authorization}; max-age=3600; path=/`;
        navigate("/");
      })
      .catch((error) => {
        if (error.message.includes("401")) {
          alert("아이디와 비밀번호를 확인해주세요.");
          loginDispatch({ type: "RESET" });
        }
      });
  };

  const postLogout = () => {
    axios
      .post(requests.postMemberLogout)
      .then((response) => {
        if (response.status.httpStatus === "OK") {
          document.cookie = "token=; max-age=0; path=/";
          window.location.reload();
        }
      })
      .catch((error) => console.error(error));
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

  const validateLoginForm = () => {
    if (!loginData.loginId || !loginData.password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    joinMember({ ...formData, type: "UNDERGRADUATE" });
  };

  const handleLoginSubmit = async () => {
    if (!validateLoginForm()) return;
    postLogin({ ...loginData });
  };

  return {
    initialState,
    placeholders,
    formData,
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
    postLogout,
  };
};
