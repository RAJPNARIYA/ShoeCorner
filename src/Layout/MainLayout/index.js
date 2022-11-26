import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../componet/Footer";
import Header from "../../componet/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
