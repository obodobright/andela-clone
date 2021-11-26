import React from "react";
import styled from "styled-components";
import logo from "../../../assets/assethome/icon_talentSpotlight.png";
import alfred from "../../../assets/assethome/dev_alfred.jpg";
import fatmaImg from "../../../assets/assethome/dev_fatma.jpg";

const Talents = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperHeading>
          {/* <Div></Div> */}
          <ImageHolder>
            <Image src={logo} />
          </ImageHolder>

          <span>Talent Spotlight</span>
        </WrapperHeading>
        <Content>
          <ContextText>Meet a few of the talented engineers in our growing community.</ContextText>
          <ContentTalent>
            <Img src={fatmaImg} />
            <TalentInfo>
              <h2>Software Developer</h2>
              <h3>Fatma</h3>
              <div>5 years of experience</div>
              <small>Kenya</small>
            </TalentInfo>
          </ContentTalent>
          <ContentTalent>
            <Img src={alfred} />
            <TalentInfo>
              <h2>Front-end Engineer</h2>
              <h3>Alfred</h3>
              <div>4 years of experience</div>
              <small>Kenya</small>
            </TalentInfo>
          </ContentTalent>
        </Content>
      </Wrapper>
    </Container>
  );
};
export default Talents;

const ContextText = styled.div`
  width: 150px;
  opacity: 0.6;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  color: #1f2c46;
  position: relative;
  &:before {
    content: "";
    width: 200px;
    height: 60px;
    background: red;
    position: absolute;
    background: url("bg_talentSpotlight_ruby.webp");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    left: 20px;
    bottom: 60px;
  }
`;

const TalentInfo = styled.div`
  width: 150px;
  padding-left: 10px;
  h2 {
    font-size: 16px;
    margin: 15px 0px;
    color: #feaf47;
    text-transform: uppercase;
  }
  h3 {
    font-size: 30px;
    margin: 10px 0;
    text-transform: capitalize;
    font-weight: 400;
  }
  div {
    font-size: 14px;
    margin: 10px 0;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 350px;
  object-fit: contain;
`;
const ContentTalent = styled.div`
  width: 500px;
  background: transparent;
  display: flex;
`;

const Image = styled.img`
  width: 70px;
`;
const ImageHolder = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #4769e2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const WrapperHeading = styled.div`
  color: #1f2c46;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 70px;
  position: relative;
  span {
    font-size: 40px;
    color: #1f2c46;
  }
  &:after {
    content: "";
    width: 300px;
    height: 70px;
    background: url("bg_talentSpotlight_code.webp");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 100px;
    top: 80px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f4f6fc;
`;
