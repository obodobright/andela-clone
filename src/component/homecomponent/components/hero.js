import React from "react";
import styled from "styled-components";
import heroImg from "../../../assets/assethome/hero-4.jpg";
import { Button } from "../styles/Button.styled";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <HeroText>
          <TextTitle>Build remote engineering teams with the world’s top talent.</TextTitle>
          <Button bg="blue" color="white">
            Hire my Talents
          </Button>
        </HeroText>
        <ImageHolder>
          <Image src={heroImg} />
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const TextTitle = styled.div`
  font-size: 45px;
  font-weight: 900;
  color: ${({ theme }) => theme.color};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.mobile.fontSize};
  }
`;

const HeroText = styled.div`
  width: 700px;
  @media (max-width: 768px) {
    width: ${({ theme }) => theme.mobile.width};
    flexDirection: "column",
      fontSize: "20px",
      width: "400px",
      marginTop: "50px",
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background: blue;
  object-fit: cover;
`;
const ImageHolder = styled.div`
  width: 450px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: ${({ theme }) => theme.mobile.width};
    margin-top: ${({ theme }) => theme.mobile.marginTop};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 90px;
  @media (max-width: 768px) {
    flex-direction: ${({ theme }) => theme.mobile.flexDirection};
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: #f4f6fc;
`;
