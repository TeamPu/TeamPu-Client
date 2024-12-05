import { axios, requests } from "../apis";
import { useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { getCookie } from "../utils";

export const useMemberJoin = () => {
  const [editedData, setEditedData] = useState();

  const initialState = {
    loginId: "",
    password: "",
    name: "",
    college: "",
    department: "",
    phoneNumber: "",
    email: "",
  };

  const initialEditState = {
    name: "",
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

  const reducer = (state, action) => {
    return { ...state, [action.name]: action.value };
  };

  const navigate = useNavigate();
  const [formData, dispatch] = useReducer(reducer, initialState);
  const [editData, editDispatch] = useReducer(reducer, initialEditState);
  const [loading, setLoading] = useState(false);

  const postJoin = (data) => {
    joinUser(data);
  };

  const postEdit = (data) => {
    editUser(data);
  };

  async function joinUser(data) {
    if (validateForm) {
      await axios.post(requests.postMemberJoin, data);
      navigate("/login");
    }
  }

  async function editUser(data) {
    const response = await axios.patch(requests.patchUserInfo, data, {
      headers: { Authorization: getCookie("token") },
    });
    setEditedData(response.data.body);
  }

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value });
  };

  const handleEditChange = (e) => {
    editDispatch({ name: e.target.name, value: e.target.value });
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
    postJoin({ ...formData, type: "UNDERGRADUATE" });
  };

  const handleEditSubmit = async () => {
    postEdit({ ...editData });
  };

  return {
    initialState,
    placeholders,
    formData,
    reducer,
    postJoin,
    handleChange,
    handleSubmit,
    validateForm,
    loading,
    handleEditChange,
    handleEditSubmit,
    editData,
    editedData,
  };
};
