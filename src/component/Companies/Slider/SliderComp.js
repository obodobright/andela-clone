import React from "react";
import styled from "styled-components";

const SliderComp = ({ src }) => {
  return (
    <Container>
      <LogosWrapper>
        <Logos src={src} />
      </LogosWrapper>
    </Container>
  );
};

export default SliderComp;

const LogosWrapper = styled.div`
  display: flex;
`;

const Logos = styled.img`
  width: 170px;
  height: 60px;
  object-fit: contain;
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    width: 150px;
    margin: 0 5px;
  }
`;

const Container = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;
