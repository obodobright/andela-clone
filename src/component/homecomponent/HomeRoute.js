import React from "react";
import { ThemeProvider } from "styled-components";
import CardContainer from "../homecomponent/components/card/CardContainer";
import AndelaCommunity from "./components/andelaCommunity";
import Community from "./components/community";
import Companies from "./components/Company";
import Contact from "./components/contactandela";
import FooterMain from "./components/FooterContainer/Footer";
import Hero from "./components/hero";
import Talents from "./components/Talent";
import Testimony from "./components/testimony";

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
      <CardContainer />
      <Contact />

      <AndelaCommunity />
      <Talents />
      <Testimony />
      <FooterMain />
    </div>
  );
};
