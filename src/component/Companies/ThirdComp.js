import React from "react";
import styled from "styled-components";
import logo from "./Assets/icon_andela.png";
import data from "./Data.json";

const ThirdComp = () => {
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

        <CardWrapper>
          {data?.map((props, i) => (
            <Card key={i}>
              <IconWrapper>
                <Icon src={props.icon} bg />
              </IconWrapper>

              <Text>{props.title}</Text>
              <Desc>{props.desc}</Desc>
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default ThirdComp;

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
    border-radius: 50%;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #5bb3b7;
  // background-color: ${({ bg }) => (bg ? "red" : "green")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;


`;

const Text = styled.div`
  font-size: 30px;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 120px;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  width: 360px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  padding: 25px;
  margin: 15px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Content = styled.div`
  width: 900px;
  text-align: center;

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
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;
