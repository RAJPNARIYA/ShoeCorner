import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../componet/Footer";
import Header from "../../componet/Header";
import { Home } from "../../Pages/Home";

export default function HomeLayout() {
  return (
    <>
      <Home />
    </>
  );
}
