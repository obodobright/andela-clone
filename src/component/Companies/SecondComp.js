import React from "react";
import styled from "styled-components";
import logo from "./Assets/icon_andela.png";

const SecondComp = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <Image src={logo} />
        </ImageHolder>
        <Content>
          <Title>Why Andela?</Title>
          <Desc>
            At Andela, Andela’s talent platform connects you with experienced
            remote talent from around the world, so you can focus on building
            your product and scaling your business.
          </Desc>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default SecondComp;

const Image = styled.img`
  width: 70px;
  height: 70px;
  background-color: #3359df;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ImageHolder = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #3359df;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Content = styled.div`
  width: 900px;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 52px;
  margin: 30px 0;
  color: #1f2c46;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 25px;
    margin: 15px 0;
    text-align: center;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  color: #565b73;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;
