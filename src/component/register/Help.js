import React from "react";
// import styled from "styled-components";
import { IoMdHelp } from "react-icons/io";

export const Helper = () => {
  return (
    <div style={Container}>
      <div style={Wrapper}>
        <div style={IconContainer}>
          <IoMdHelp />
        </div>
        <div style={HelpContent}></div>
      </div>
    </div>
  );
};

const IconContainer = {
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "blue",
  fontSize: "25px",
  fontWeight: "bold",
  color: "white",
  borderRadius: "50%",
  cursor: "pointer",
};
const HelpContent = {};
const Wrapper = {};

const Container = {
  width: "",
  position: "fixed",
  bottom: "20px",
  right: "20px",
};
