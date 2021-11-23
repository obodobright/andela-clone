import React from "react";
import styled, { keyframes } from "styled-components";
import casper from "../../../assets/assethome/logo-casper-1.png";
import cloudflare from "../../../assets/assethome/logo-cloudflare.png";
import github from "../../../assets/assethome/logo-github.png";
import goldman from "../../../assets/assethome/logo-goldman-sachs.png";
import invision from "../../../assets/assethome/logo-invision.png";
import jamf from "../../../assets/assethome/logo-jamf-1.png";
import kraftHeinz from "../../../assets/assethome/logo-kraft-heinz.png";
import mindshare from "../../../assets/assethome/logo-mindshare-1.png";
import pluralsight from "../../../assets/assethome/logo-pluralsight.png";
import seismic from "../../../assets/assethome/logo-seismic.png";
import tradedesk from "../../../assets/assethome/logo-tradedesk.png";
import viacomcbs from "../../../assets/assethome/logo-viacomcbs.png";

const Companies = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Trusted By</Text>
        <ImgSlideshow>
          <ImgContainer>
            <Img src={casper} />
            <Img src={cloudflare} />
            <Img src={github} />
            <Img src={goldman} />
            <Img src={invision} />
            <Img src={jamf} />
            <Img src={kraftHeinz} />
            <Img src={mindshare} />
            <Img src={pluralsight} />
            <Img src={seismic} />
            <Img src={tradedesk} />
            <Img src={viacomcbs} />
          </ImgContainer>
        </ImgSlideshow>
      </Wrapper>
    </Container>
  );
};

export default Companies;

const slide = keyframes`
0%{  transform: translate3d(0, 0, 0) }
100% { transform: translate3d(-400px, 0, 0) }

`;
const ImgSlideshow = styled.div``;
const Img = styled.img`
  object-fit: contain;
  min-width: 150px;
  height: 35px;
  animation: ${slide} 10s ease-in-out infinite alternate;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    height: 30px;
  }
`;
const ImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  // margin: 0 auto;
`;

const Text = styled.div`
  font-size: 18px;
  color: #ffb449;
  font-weight: ;
  padding-left: 10px;
  padding: 10px 10px 5px 5px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 5vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 5vh;
  background: white;
`;
