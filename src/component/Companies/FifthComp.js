import React from "react";
import styled from "styled-components";
import logo from "./Assets/icon_andela.png";
import image from "./Assets/icon-checkmark.png";
import Table from "./TableComp";
import TableComp from "./TableComp";

const FifthComp = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <Content>
          <Title>We've Cracked the Code on Building Engineering Teams</Title>
          <Desc>
            Andela is the only partner who gives you access to vetted, global
            talent that seamlessly integrates with your team. See how we stack
            up.
          </Desc>
        </Content>

        <TableComp />
      </Wrapper>
    </Container>
  );
};

export default FifthComp;

const Title = styled.div`
  font-size: 47px;
  line-height: 60px;
  color: 1f2c46;
  text-align: center;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  font-weight: 500;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 35px;
  }
`;

const Desc = styled.div`
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 1px;
  color: #565b73;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const Content = styled.div`
  width: 58%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const LogoWrapper = styled.div`
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

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f4f6fc;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
