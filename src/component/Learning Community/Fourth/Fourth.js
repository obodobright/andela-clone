import React from "react";
import styled from "styled-components";
import data from "../Data1.json";
import CardComp from "./CardComp";

const Fourth = () => {
  return (
    <Container>
      <Wrapper>
        <Buttons>
          <Box bg="#486AE2" clr="white" hbg="#EDF0FC" hclr="#3359df">
            Upcoming & In Progress
          </Box>
          <Box bg="#EDF0FC" clr="#3359df" hbg="#486AE2" hclr="white">
            Past Programs
          </Box>
        </Buttons>
        {data?.map((props, i) => (
          <Card key={i}>
            <Content>
              <Line></Line>
              <Title>Open to Applicants</Title>
              <Sub>{props.title}</Sub>
            </Content>
          </Card>
        ))}
        <CardComp />
      </Wrapper>
    </Container>
  );
};

export default Fourth;

const Box = styled.div`
  width: 670px;
  height: 100px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: bold;
  color: ${({ clr }) => clr};
  font-family: lato, sans-serif;

  :hover {
    background-color: ${({ hbg }) => hbg};
    color: ${({ hclr }) => hclr};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 40px;
`;

const Buttons = styled.div`
  width: 1350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 200px;
  height: 5px;
  background-color: blue;
`;

const Title = styled.div`
  font-size: 20px;
  color: blue;
  margin: 15px 0;
  text-transform: uppercase;
`;

const Sub = styled.div`
  font-size: 25px;
  cursor: pointer;
`;

const Card = styled.div`
  width: 1400px;
  height: 320px;
  border-radius: 8px;
  border: 1px solid #c1c1ff;
  margin: 20px 0;

  :hover {
    border: 1px solid #6464ff;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
