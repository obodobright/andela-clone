import React from "react";
import { HomeRoute } from "./homecomponent/HomeRoute";
import { Login } from "./register/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default HomePage;
