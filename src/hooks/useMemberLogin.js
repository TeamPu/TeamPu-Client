import { axios, requests } from "../apis";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useAdminView } from "./useAdminView";

export const useMemberLogin = () => {
  const { fetchAdmin } = useAdminView();
  const navigate = useNavigate();

  const initialLoginState = {
    loginId: "",
    password: "",
  };

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

  const [loginData, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState,
  );

  const postLogin = (data) => {
    vertifyAdmin(data);
  };

  async function vertifyAdmin(data) {
    try {
      const response = await axios.post(requests.postMemberLogin, data);
      document.cookie = `token=${response.headers.authorization}; max-age=3600; path=/`;
      const isAdmin = await fetchAdmin();
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      if (error.status === 401) {
        alert("아이디와 비밀번호를 확인해주세요.");
        loginDispatch({ type: "RESET" });
      }
    }
  }

  const handleLoginChange = (e) => {
    loginDispatch({ name: e.target.name, value: e.target.value });
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
    postLogin({ ...loginData });
  };

  return {
    reducer,
    postLogin,
    handleLoginSubmit,
    handleLoginChange,
    loginData,
  };
};
