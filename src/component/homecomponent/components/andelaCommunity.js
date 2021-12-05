import React from "react";
import styled from "styled-components";
import communityImg from "../../../assets/assethome/icon_ourCommunity.svg";
import v3img from "../../../assets/assethome/v3-1.png";
import { Button } from "../styles/Button.styled";
const AndelaCommunity = () => {
  return (
    <Container>
      <Wrapper>
        <Div></Div>
        <WrapperHeading>
          <ImageHolder>
            <Image src={communityImg} />
          </ImageHolder>

          <span>Our Community</span>
        </WrapperHeading>
        <Content>
          <ImgContent>
            <ImgContainer src="bg_ourCommunity.webp" />
            <ContentImg src={v3img} />
            <MyImg src="yellowlines.webp" alt="" />
          </ImgContent>
          <ContentContainer>
            <Eng>
              <h3>100,000+ Software Engineers</h3>
              <div>
                Who have come together to develop their skills, learn from each other, and grow
                their careers
              </div>
            </Eng>
            <Eng>
              <h3>100+ Technical Skills</h3>
              <div>
                Skills include Ruby, Python, Go, Java, JavaScript, React-Native, Postgres, MongoDB,
                and many more.
              </div>
            </Eng>
            <Eng>
              <h3>80+ Countries</h3>
              <div>
                With a geographic footprint that covers Africa, South America, Eastern Europe, and
                many more.
              </div>
            </Eng>
            <Button bg="#4769E2" color="white" margin="20px 0 0 0" wd="150px">
              Learn More
            </Button>
          </ContentContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AndelaCommunity;

const ImgContent = styled.div`
  position: relative;
`;
const MyImg = styled.img`
  position: absolute;
  width: 200px;
  top: 70px;
  left: -200px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ImgContainer = styled.img`
  width: 750px;
  height: 500px;
  position: relative;
  left: -40px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ContentImg = styled.img`
  position: absolute;
  width: 500px;
  height: ;
  top: 40px;
  left: 60px;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const Eng = styled.div`
  h3 {
    font-size: 25px;
    font-weight: 400;
    margin: 20px 0;
    color: #1f2c46;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  div {
    font-size: 18px;
    line-height: 1.3;
    opacity: 0.6;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
const ContentContainer = styled.div`
  width: 500px;
  position: relative;
  left: -70px;
  top: 35px;
  @media (max-width: 768px) {
    left: 0px;
    padding: 0 20px;
    width: 450px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  flex-wrap: wrap;
`;

const Div = styled.div`
  width: 200px;
  height: 150px;
  background: url("bg_testimonial.webp");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: 60px;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 70px;
`;
const ImageHolder = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #feb048;
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
  span {
    font-size: 40px;
    color: #1f2c46;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: ;
`;
