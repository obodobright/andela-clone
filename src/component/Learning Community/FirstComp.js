import React from "react";
import styled from "styled-components";
import img from "./Assets/alc-hero.png";
import logo1 from "./Assets/logo_color_google.png";
import logo2 from "./Assets/logo_color_facebook.png";
import logo3 from "./Assets/logo_color_codacy.png";
import logo4 from "./Assets/logo_color_pluralsight.png";
import logo5 from "./Assets/openclassrooms.png";
import logo6 from "./Assets/logo_color_msft.png";
import logo7 from "./Assets/salesforce-logo.png";

const FirstComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Andela Learning Community</Title>
          <Sub>
            Join the thousands of software engineers advancing their careers
            through our learning community
          </Sub>
          <Join>
            <Button bg>Join as a Learner</Button>
            <Button clr>Become a Partner</Button>
          </Join>
        </Content>

        <ImageHolder>
          <Image src={img} />
        </ImageHolder>
      </Wrapper>
      <Logos>
        <LogoText>Learning partners</LogoText>
        <Logo src={logo1} />
        <Logo src={logo2} />
        <Logo src={logo3} />
        <Logo src={logo4} />
        <Logo src={logo5} />
        <Logo src={logo6} />
        <Logo src={logo7} />
      </Logos>

      <Bottom>
        <Text>Why join ?</Text>
        <Note>
          Get access to in-demand technology courses from our learning partners
          to build skills and grow in your career as a software engineer
        </Note>
      </Bottom>
    </Container>
  );
};

export default FirstComp;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Text = styled.div`
  font-size: 53px;
  font-weight: 600;
  color: #1f2c46;
  text-align: center;
  margin-top: 100px;
`;

const Note = styled.div`
  width: 630px;
  font-size: 22px;
  line-height: 34px;
  margin: 35px 0;
  color: #888da6;
  text-align: center;
`;

const LogoText = styled.div`
  font-size: 25px;
  color: #ffab20;
`;

const Logos = styled.div`
  margin-left: 120px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 50px;
  margin: 0 30px;
  object-fit: contain;
`;

const Content = styled.div`
  width: 50%;
  margin-left: 120px;
  font-family: lato, sans-serif;
`;

const Title = styled.div`
  font-size: 53px;
  font-weight: 600;
  color: #1f2c46;
`;

const Sub = styled.div`
  font-size: 20px;
  line-height: 29px;
  margin: 35px 0;
  color: #565b73;
`;

const Join = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 250px;
  height: 60px;
  background-color: ${({ bg }) => (bg ? "#ffb745" : "transparent")};
  font-size: 22px;
  font-family: lato, sans-serif;
  outline: none;
  border: none;
  color: ${({ clr }) => (clr ? "blue" : "black")};
  cursor: pointer;
`;

const ImageHolder = styled.div`
  width: 50%;
  height: 650px;
  position: relative;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 1050px;
  height: 100%;
  object-fit: contain;
  position: absolute;
  right: -350px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
