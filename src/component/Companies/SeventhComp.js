import React from "react";
import styled from "styled-components";
import image from "./Assets/img_dataDrivenMatch.png";
import data from "./data2.json";

const SeventhComp = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <Image src={image} />
        </ImageHolder>
        <ContentHolder>
          {data?.map((props, i) => (
            <Content key={i}>
              <Number>{props.number}</Number>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
            </Content>
          ))}
        </ContentHolder>
      </Wrapper>
    </Container>
  );
};

export default SeventhComp;

const ContentHolder = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 10px;
    margin-left: 0px;
  }
`;

const Content = styled.div`
  margin: 20px 0;
`;

const Number = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  color: blue;
  border: 3px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #1f2c46;
  margin-bottom: 20px;
  font-family: lato, sans-serif;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 28px;
    margin-bottom: 10px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  color: #565b73;
  line-height: 38px;
  letter-spacing: 1px;
  font-family: lato, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    line-height: 28px;
  }
`;

const ImageHolder = styled.div`
  width: 700px;
  margin-top: 120px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
