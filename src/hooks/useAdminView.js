import { axios, requests } from "../apis";
import { getCookie } from "../utils";

export const useAdminView = () => {
  async function fetchAdmin() {
    const isAdmin = await axios
      .get(requests.fetchUserInfo, {
        headers: { Authorization: getCookie("token") },
      })
      .data.body.admin();
    return isAdmin;
  }

  return fetchAdmin();
};
