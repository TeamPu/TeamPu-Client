import { Navigate, Outlet } from "react-router-dom";
import { useAdminView } from "../hooks";

export default function PrivateRouter() {
  return useAdminView() ? <Outlet /> : <Navigate to="/" />;
}
