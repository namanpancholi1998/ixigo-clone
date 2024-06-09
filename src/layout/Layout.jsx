import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
