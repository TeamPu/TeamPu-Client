import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, MyReservationPage, MyPage, RulesPage } from "./pages";
import AppFrame from "./layouts/AppFrame.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppFrame />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/reservation", element: <MyReservationPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/rules", element: <RulesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
