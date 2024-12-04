import { axios, requests } from "../apis";
import { getCookie } from "../utils";

export const useAdminView = () => {
  async function fetchAdmin() {
    const response = await axios.get(requests.fetchUserInfo, {
      headers: { Authorization: getCookie("token") },
    });
    const isAdmin = response.data.body.admin;
    if (isAdmin) document.cookie = `admin=true; max-age=3600; path=/`;
    return isAdmin;
  }

  async function fetchAdminReservation() {
    const response = await axios.get(requests.fetchAllResAdmin);
    return response.data.body;
  }

  return { fetchAdmin, fetchAdminReservation };
};
