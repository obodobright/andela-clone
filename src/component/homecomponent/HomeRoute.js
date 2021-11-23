import React from "react";
import { ThemeProvider } from "styled-components";
import Community from "./components/community";
import Companies from "./components/Company";
import Hero from "./components/hero";

export const HomeRoute = () => {
  const theme = {
    color: "#1f2c46",
    background: "blue",
    mobile: {
      flexDirection: "column",
      fontSize: "20px",
      width: "400px",
      marginTop: "50px",
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Hero />
        <Companies />
        <Community />
      </ThemeProvider>
    </div>
  );
};
