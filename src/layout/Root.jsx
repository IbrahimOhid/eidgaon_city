import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="min-h-screen w-full bg-white relative font-Hind-Siliguri">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)",
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
