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
`;

const Title = styled.div`
  font-size: 36px;
  color: #1f2c46;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 22px;
  line-height: 38px;
  color: #565b73;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  margin-bottom: 70px;
`;

const Content = styled.div`
  width: 45%;
  margin-top: 200px;
`;

const ImageHolder = styled.div`
  margin-left: 20px;
`;

const Image = styled.img`
  width: 700px;
  object-fit: Contain;
`;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px 0;
  justify-content: center;
`;
