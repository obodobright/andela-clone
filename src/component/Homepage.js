import React from "react";
import { HomeRoute } from "./homecomponent/HomeRoute";
import { Login } from "./register/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./homecomponent/components/Header";

const HomePage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default HomePage;
