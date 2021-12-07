import React from "react";
import { HomeRoute } from "./homecomponent/HomeRoute";
import { Login } from "./register/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinAndela from "./register/Join/JoinAndela";

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="login" element={<Login />} />
        <Route path="join-andela" element={<JoinAndela />} />
      </Routes>
    </BrowserRouter>
  );
};
export default HomePage;
