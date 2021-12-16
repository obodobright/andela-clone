import React from "react";
import styled from "styled-components";
import image from "./Assets/icon_numbers.png";
import logo1 from "./Assets/google..png";
import logo2 from "./Assets/facebook.png";
import logo3 from "./Assets/codacy.png";
import logo4 from "./Assets/pluralsight.png";
import logo5 from "./Assets/openclassrooms.png";
import logo6 from "./Assets/microsoft.png";

const FourthComp = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <Icon src={image} />
        </IconWrapper>
        <Text>Andela by the Numbers</Text>

        <CardWrapper>
          <Card>
            <Number bg="#49AAAF">2014</Number>
            <Desc>year Andela was founded</Desc>
          </Card>
          <Card>
            <Number bg="#DF1995">200+</Number>
            <Desc>satisfied clients</Desc>
          </Card>
          <Card>
            <Number bg="#98BE24">$181M</Number>
            <Desc>venture funding secured to date</Desc>
          </Card>
          <Card>
            <Number bg="#3359DF">175K+</Number>
            <Desc>members of Andela’s technical community</Desc>
          </Card>
        </CardWrapper>

        <Logos>
          <Sub>Technology Partners</Sub>
          <LogoWrapper>
            <Logo src={logo1} />
            <Logo src={logo2} />
            <Logo src={logo3} />
            <Logo src={logo4} />
            <Logo src={logo5} />
            <Logo src={logo6} />
          </LogoWrapper>
        </Logos>
      </Wrapper>
    </Container>
  );
};

export default FourthComp;

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #5bb3b7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    // width: 90%;
  }
`;

const Logos = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 110px;
  height: 70px;
  object-fit: contain;
  margin: 0 50px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 100px;
    display: flex;
    margin: 5px;
    background-color: #f4f6fc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Sub = styled.div`
  font-size: 23px;
  color: #ff8622;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Desc = styled.div`
  width: 270px;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  color: #1f2c46;
  margin-top: 17px;
  font-family: lato, sans-serif;
  letter-spacing: 1px;
`;

const Number = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-top: 50px;
  font-family: lato, sans-serif;
  color: ${({ bg }) => bg};
`;

const Card = styled.div`
  width: 320px;
  height: 250px;
  border-radius: 8px;
  background-color: #f4f6fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const Text = styled.div`
  font-size: 50px;
  line-height: 52px;
  color: #1f2c46;
  font-weight: 500;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 18px;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
