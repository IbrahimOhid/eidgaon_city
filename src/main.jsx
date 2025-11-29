import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import ServiceList from "./components/Service/ServiceList";
import Hospital from "./components/Hospital/Hospital.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import HospitalProfile from "./components/Hospital/HospitalProfile.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import History from "./components/History/History.jsx";

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
        path: "/ইতিহাস",
        element: <History/>
      },
      {
        path: "/আমাদের_সম্পর্কে/",
        element: <AboutUs/>
      },
      {
        path: "/হাসপাতাল/",
        element: <Hospital />,
      },
      {
        path: "/হাসপাতাল/:hospitalId",
        element: <HospitalProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
