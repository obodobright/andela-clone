import React from "react";
import styled from "styled-components";
import logo from "./Assets/icon_andela.png";
import image from "./Assets/icon-checkmark.png";

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

        <Table></Table>
      </Wrapper>
    </Container>
  );
};

export default FifthComp;

const Table = styled.div`
  display: table;
`;

const Title = styled.div`
  font-size: 45px;
  line-height: 60px;
  color: 1f2c46;
  text-align: center;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  font-weight: 500;
  margin-top: 30px;
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1px;
  color: 565b73;
  text-align: center;
  margin-top: 20px;
`;

const Content = styled.div`
  width: 60%;
`;

const LogoWrapper = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #3359df;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
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
`;
