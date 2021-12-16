import React from "react";
import styled from "styled-components";
import image from "./Assets/graphic_makeAnImpact.png";

const EightComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>The Power of the Andela Learning Community</Title>
          <Desc>
            We are proud to share that the Andela Learning Community, created to
            offer training and guidance for engineers at all stages of their
            career, now boasts over 100,00+ technologists. With expertise across
            a vast range of technical stacks, cloud computing platforms,
            datastores, DevOps tooling and more, there is truly an Andelan to
            solve every problem.
          </Desc>

          <Button>Get Started with Andela Today</Button>
        </Content>

        <ImageHolder>
          <Image src={image} />
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

export default EightComp;

const Button = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa309;
  font-size: 20px;
  letter-spacing: 1px;
  outline: none;
  border: none;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: #ffb745;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    font-size: 17px;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  color: #1f2c46;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 38px;
  color: #565b73;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  margin-bottom: 70px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    line-height: 28px;
  }
`;

const Content = styled.div`
  width: 42%;
  margin-top: 200px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 40px;
  }
`;

const ImageHolder = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 0px;
  }
`;

const Image = styled.img`
  width: 700px;
  object-fit: Contain;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;
