import React from "react";
import styled from "styled-components";
import image from "./Assets/oleh.png";

const FirstComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Accelerate Innovation with Vetted Technical Talent</Title>
          <Desc>
            {" "}
            Your company is expected to move faster than ever before to stay
            ahead of the competition. With so many priorities to balance,
            finding the time to build, onboard, and scale an amazing engineering
            team that will get you where you need to go can feel like a daunting
            endeavor. This is where Andela can help.
            <br />
            <br />
            We are a global talent network connecting innovative companies like
            yours with top-tier vetted engineers, so you have more time to focus
            on your core business.
          </Desc>
          <Button>Hire talent</Button>
        </Content>

        <Image src={image} />
      </Wrapper>
    </Container>
  );
};

export default FirstComp;

const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa309;
  color: #414141;
  font-size: 20px;
  letter-spacing: 1px;
  outline: none;
  border: none;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: #ffb745;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 17px;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 600px;
  height: 500px;
  margin-left: 70px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0px;
  }
`;

const Desc = styled.div`
  font-size: 22px;
  line-height: 38px;
  font-family: lato, sans-serif;
  font-weight: 300;
  color: #565b73;
  letter-spacing: 1px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

const Title = styled.div`
  font-size: 53px;
  line-height: 65px;
  font-weight: bold;
  font-family: lato, sans-serif;
  color: #1f2c46;
  margin-bottom: 20px;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

const Content = styled.div`
  width: 700px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-right: 0px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 170px;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #ffffff;
  color: black;
`;
