import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import styled from "styled-components";
import logo from "../../../../assets/assethome/primarylogo.svg";
import logosoc from "../../../../assets/assethome/logo_soc2.png";

const FooterSec = () => {
  return (
    <Container>
      <Wrapper>
        <Flex1>
          <Logo src={logo} />
          <p>Connecting brilliance with opportunity</p>
          <IconHolder>
            <Icon>
              <FaFacebookF />
            </Icon>
            <Icon>
              <FaLinkedinIn />
            </Icon>{" "}
            <Icon>
              <BsGithub />
            </Icon>{" "}
            <Icon>
              <BsTwitter />
            </Icon>
            <Icon>
              <BsInstagram />
            </Icon>
          </IconHolder>
          <Img2 src={logosoc} />
        </Flex1>
        <Flex2>
          <ul>
            <div>Hire Talent</div>
            <li>For Companies</li>
            <li>For Enterprise</li>
          </ul>
          <ul>
            <div>Join Andela</div>
            <li>For Engineers</li>
            <li>Learning Community</li>
            <li>Technical Leadership Program (Rwanda)</li>
          </ul>
          <ul>
            <div>About Us</div>
            <li>Resources</li>
            <li>Events</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Press Centers</li>
            <li>About Andela</li>
            <li>Careers</li>
          </ul>
        </Flex2>
      </Wrapper>
    </Container>
  );
};

export default FooterSec;

// const Logo = styled.div``;

const Icon = styled.div`
  margin: 0 10px;
  background: #3b5266;
  padding: 2px;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 150px;
`;
const Img2 = styled.img`
  width: 70px;
  padding-top: 20px;
`;
const IconHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Flex1 = styled.div`
  //   width: 100%;
  //   max-width: 1070px;
  //   margin: 0 auto;
  //   padding-top: 70px;

  p {
    margin: 10px 0;
    font-size: 18px;
    opacity: 0.6;
  }
`;
const Flex2 = styled.div`
  display: flex;

  li {
    list-style: none;
    color: #4769e2;
    width: 150px;
    padding: 7px 0;
  }
  div {
    font-weight: bold;
    color: #3b5266;
    font-size: 17px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  max-width: 1070px;
  margin: 0 auto;
  padding-top: 70px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;
