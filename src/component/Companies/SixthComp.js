import React from "react";
import styled from "styled-components";
import icon from "./Assets/icon_world.png";
import icon2 from "./Assets/icon_getStarted.png";
import image from "./Assets/graphic_map.png";

const SixthComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <IconWrapper>
            <Icon src={icon} />
          </IconWrapper>
          <Title>Remote Engineering Teams That Are Built for Success</Title>
          <Desc>
            The data confirms it: employers have noted
            <span> increased productivity </span>
            with the shift to remote work, and employees share the enthusiasm,
            indicating <span> greater work-life balance </span>greater work-life
            balance opportunities with<span> a distributed workforce. </span>{" "}
            We’ve been operating remotely for years and know how to make model
            work for your organization.
          </Desc>
        </Content>

        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
      </Wrapper>

      <IconWrapper>
        <Icon src={icon2} />
      </IconWrapper>
      <Span>How to Hire Through Andela</Span>
    </Container>
  );
};

export default SixthComp;

const ImageWrapper = styled.div`
  width: 60%;
  height: 800px;
  position: relative;
  overflow: hidden;
  margin-bottom: 100px;
`;

const IconWrapper = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #3359df;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.div`
  font-size: 45px;
  line-height: 55px;
  color: 1f2c46;
  font-weight: 500;
  margin: 30px 0;
  letter-spacing: 1px;
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 35px;
  color: #565b73;
  letter-spacing: 1.8px;
  font-family: lato, sans-serif;
  margin-top: 20px;

  span {
    color: #6eb8f4;
  }
`;

const Title = styled.div`
  font-size: 35px;
  line-height: 45px;
  letter-spacing: 1.5px;
  margin-top: 30px;
  font-family: lato, sans-serif;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: -150px;
  top: -30px;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #3359df;
  object-fit: contain;
`;

const Content = styled.div`
  width: 700px;
  margin-left: 80px;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
