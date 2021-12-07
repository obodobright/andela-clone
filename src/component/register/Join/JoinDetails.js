import React from "react";
import styled from "styled-components";
import logo from "../../../assets/assethome/logo.svg";
import viacomLogo from "../../../assets/assethome/logo-viacomcbs.png";
import pluralsightLogo from "../../../assets/assethome/logo-pluralsight.png";
import invisonLogo from "../../../assets/assethome/logo_invision.png";

const JoinDetails = () => {
  const images = [viacomLogo, pluralsightLogo, invisonLogo];
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <BackImg></BackImg>
        <Content>
          <Title>
            Work with the world's <br />
            leading companies
          </Title>
          <Desc>
            By applying to join Andela's Talent Network, you are one step closer to finding your
            next role, advancing your career, and connecting with other talented engineers in our
            community. Cheers to that!
          </Desc>
          <p>Here's what you should expect after you submit this form:</p>
          <ul style={{}}>
            <li>A short assessment to test your fluency in English (15 mins)</li>
            <li>A HackerRank coding challenge (1 hour)</li>
            <li>A live technical interview with a senior developer (1 hour)</li>
          </ul>
          <p>Sign up and be one step closer to joining the engineering team at:</p>
        </Content>
        <ImgHolder>
          {images?.map((img) => (
            <Img src={img} />
          ))}
        </ImgHolder>
      </Wrapper>
    </Container>
  );
};

export default JoinDetails;
const Img = styled.img`
  width: 100px;
  object-fit: cover;
`;
const ImgHolder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 200px;
  justify-content: center;
`;

const Desc = styled.p`
  width: 450px;
  padding-left: 30px;
  word-spacing: 1.6px;
  line-height: 1.3;
  color: #1f2c46;
`;
const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  text-transform: capitalize;
  width: 400px;
  color: #1f2c46;
`;
const Content = styled.div`
  position: relative;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  padding: 20px;
  color: #1f2c46;
`;

const BackImg = styled.div`
  height: 500px;
  width: 100%;

  background: url("map_light-1.png");
  background-size: cover;
  background-position: ;
  position: absolute;
  overflow: hidden;
  top: -60px;
  // // left: 30px;
`;
const Logo = styled.img`
  width: 120px;
  object-fit: contain;
  padding: 20px 40px;
  position: relative;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 550px;
  height: 100%;
  background-color: #f9fafd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
`;
