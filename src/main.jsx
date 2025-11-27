import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import ServiceList from "./components/Service/ServiceList";
import Hospital from "./components/Hospital/Hospital.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ServiceList />,
      },
      {
        path: "/হাসপাতাল/",
        element: <Hospital />,
      },
      {
        path: "/হাসপাতাল/:hospitalId",
        element: <ProfileInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
