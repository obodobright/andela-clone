import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComp from "./SliderComp";
import logo1 from "../Assets/./logo-viacomcbs.png";
import logo2 from "../Assets/./logo-tradedesk.png";
import logo3 from "../Assets/./logo-seismic.png";
import logo4 from "../Assets/./logo-pluralsight.png";
import logo5 from "../Assets/./logo-mindshare-1.png";
import logo6 from "../Assets/./logo-kraft-heinz.png";
import logo7 from "../Assets/./logo-jamf-1.png";
import logo8 from "../Assets/./logo-invision.png";
import logo9 from "../Assets/./logo-goldman-sachs.png";
import logo10 from "../Assets/./logo-github.png";
import logo11 from "../Assets/./logo-coursera.png";
import logo12 from "../Assets/./logo-cloudflare.png";
import logo13 from "../Assets/./logo-casper-1.png";

const SliderMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Container>
      <Note>Clients we work with</Note>

      <Wrapper>
        <Slider {...settings}>
          <SliderComp src={logo1} />
          <SliderComp src={logo2} />
          <SliderComp src={logo3} />
          <SliderComp src={logo4} />
          <SliderComp src={logo5} />
          <SliderComp src={logo6} />
          <SliderComp src={logo7} />
          <SliderComp src={logo8} />
          <SliderComp src={logo9} />
          <SliderComp src={logo10} />
          <SliderComp src={logo11} />
          <SliderComp src={logo12} />
          <SliderComp src={logo13} />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default SliderMain;

const Note = styled.div`
  font-size: 22px;
  color: #ffaf30;
  margin: 10px 30px;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
