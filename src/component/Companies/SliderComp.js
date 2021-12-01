import React from "react";
import styled from "styled-components";
import data from "./Dataalogos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // speed: 2000,
    // autoplaySpeed: 1000,
    // cssEase: "linear",
  };

  return (
    <Container>
      <Note>Clients we work with</Note>
      <Wrapper>
        {/* <Slider> */}
        {data.map((props, i) => (
          <LogosWrapper key={i}>
            <Logos src={props.logo} />
          </LogosWrapper>
        ))}
        {/* </Slider> */}
      </Wrapper>
    </Container>
  );
};

export default SliderComp;

const Note = styled.div`
  font-size: 22px;
  color: #ffaf30;
  margin: 10px 30px;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
`;

const Logos = styled.img`
  width: 170px;
  object-fit: contain;
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    width: 150px;

    margin: 0 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;
