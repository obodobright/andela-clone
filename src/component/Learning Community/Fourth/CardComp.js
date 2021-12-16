import React from "react";
import styled from "styled-components";
import data from "../data.json";

const CardComp = () => {
  return (
    <Container>
      <Wrapper>
        {data?.map((props, i) => (
          <Card key={i}>
            <Content>
              <Line></Line>
              <Title>Closed to Applicants</Title>
              <Sub>{props.title}</Sub>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default CardComp;

const Title = styled.div`
  font-size: 20px;
  color: #df1995;
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
  border: 1px solid #f28ecd;
  margin: 20px 0;

  :hover {
    border: 1px solid #df1995;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 40px;
`;

const Line = styled.div`
  width: 200px;
  height: 5px;
  background-color: #df1995;
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
