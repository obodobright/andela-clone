import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { ThemeProvider } from "styled-components";

const CardContainer = () => {
  const theme = {
    textColor: {
      color: "#1F2C46",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Header>
            Get matched with vetted engineers from around the world and hire them without the
            overhead.
          </Header>
        </Wrapper>
      </Container>
      <Card />
    </ThemeProvider>
  );
};

export default CardContainer;

const Header = styled.div`
  padding: 40px 10px;
  font-size: 35px;
  width: 800px;
  text-align: center;
  position: relative;
  top: 30px;
  color: #182039;
  padding-top: 30px;
  &:before {
    content: "";
    height: 80px;
    background: url("yellowlines.webp");
    background-position: top right;
    background-size: cover;
    position: absolute;
    left: -170px;
    width: 250px;
    top: 30px;
    z-index: -3;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    width: 80%;
    text-align: center;
    padding: 30px 4px;
    &:before {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
`;
