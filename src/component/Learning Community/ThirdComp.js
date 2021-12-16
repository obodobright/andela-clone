import React from "react";
import styled from "styled-components";
import image from "./Assets/learners-mentors.png";

const ThirdComp = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Section>
            <Title clr="#98be24 ">LEARNERS</Title>
            <Sub>Grow and be Challenged</Sub>
            <Note>
              Take advantage of a number of opportunities to hone your craft.
              Level up your skills and earn technical certifications that will
              help you build impactful projects for your communities and make
              incredible steps in your career.
            </Note>
          </Section>

          <Section>
            <Title clr="#DF19A3">MENTORS</Title>
            <Sub>Expand Your Reach</Sub>
            <Note>
              Grow your reach and increase your circle of influence as a thought
              leader in your respective field.
            </Note>
          </Section>
        </Content>

        <ImageHolder>
          <Image src={image} />
        </ImageHolder>
      </Wrapper>
    </Container>
  );
};

export default ThirdComp;

const ImageHolder = styled.div`
  width: 550px;
  height: 750px;
  margin: 100px 0;
  display: flex;
  justify-content: center;
  margin-right: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;
`;

const Section = styled.div`
  width: 650px;
  margin: 140px 0;
  margin-left: 100px;
`;

const Content = styled.div``;

const Title = styled.div`
  font-size: 18px;
  color: ${({ clr }) => clr};
  font-family: lato, sans-serif;
`;

const Sub = styled.div`
  font-size: 37px;
  color: #1f2c46;
  margin: 20px 0;
`;

const Note = styled.div`
  font-size: 22px;
  line-height: 36px;
  color: #565b73;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 100px;
`;
