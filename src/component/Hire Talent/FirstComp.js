import React from "react";
import styled from "styled-components";
import img2 from "./Assets/Andela_PrimaryLogo_TM_2021_White.svg";
import image from "./Assets/map_dark-1.png";
import logo1 from "./Assets/logo_invision-white.png";
import logo2 from "./Assets/logo_pluralsight-white.png";
import logo3 from "./Assets/logo_viacomCbs-white.png";
import SecondSection from "./SecondSection";

const FirstComp = () => {
  return (
    <Container>
      <Wrapper>
        <Section1>
          <Logo1 src={img2} />
          <ImageHolder>
            <Image src={image} />
          </ImageHolder>
          <Note>
            Accessing Pre-vetted talent from multiple regions has never been
            simpler. Some of the biggest names in tech trust us to scale thier
            teams.
          </Note>

          <LogoHolder>
            <Logo src={logo3} />
            <Logo src={logo2} />
            <Logo src={logo1} />
          </LogoHolder>
        </Section1>

        <SecondSection />
      </Wrapper>
    </Container>
  );
};

export default FirstComp;

const Section1 = styled.div`
  width: 42%;
  height: 100vh;
  background-color: #182039;
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow: hidden;

  @media screen and (max-width: 1210px) {
    width: 100%;
    height: 70vh;
    position: relative;
    overflow: none;
  }
`;

const LogoHolder = styled.div`
  // width: 580px;
  // height: 100%;
  display: flex;
  margin-left: 10px;

  @media screen and (max-width: 1210px) {
    margin-left: 40px;
  }
`;

const Logo = styled.img`
  width: 130px;
  margin: 0px 30px;
  margin-bottom: 190px;
  object-fit: contain;

  @media screen and (max-width: 1210px) {
    width: 90px;
    margin: 0px 10px;
    margin-bottom: 20px;
    object-fit: contain;
  }
`;

const Logo1 = styled.img`
  width: 150px;
  margin: 30px 60px;

  @media screen and (max-width: 1210px) {
    width: 150px;
    margin: 30px 40px;
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 123%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: -130px;
  right: -200px;

  @media screen and (max-width: 1210px) {
    width: 126%;
    height: 100%;
    object-fit: contain;
    top: -40px;
    right: -130px;
    margin-left: 40px;
  }
`;

const Note = styled.div`
  width: 580px;
  font-size: 20px;
  line-height: 30px;
  margin-left: 80px;
  margin-right: 40px;
  position: absolute;
  top: 400px;

  @media screen and (max-width: 1210px) {
    width: 340px;
    height: 100%;
    top: 290px;
    font-size: 16px;
    line-height: 18px;
    margin-left: 40px;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1210px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
