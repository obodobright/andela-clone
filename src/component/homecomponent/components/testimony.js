import React from "react";
import styled from "styled-components";

const Testimony = () => {
  const data = [
    {
      description:
        "How a Top 10 Global Investment Bank is Rapidly Expanding Its Services by Leveraging Remote Talent",
    },
    {
      description:
        "Enterprise Software Division of $20B Professional Services Industry Leader Leverages Andela’s Salesforce Expertise",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <WrapperHead>Success Stories</WrapperHead>
        <CardContainer>
          {data?.map((prop, index) => (
            <Card key={index}>
              <Head>Case Study</Head>
              <Desc>{prop.description}</Desc>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Testimony;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Card = styled.div`
  width: 450px;
  height: 100%;
  min-height: 200px;
  border: 1px solid rgb(203 213 247);
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  transition: all 350ms;
  &:hover {
    border: 1px solid rgb(51 89 223 / 50%);
  }
`;
const Head = styled.div`
  font-size: 16px;
  padding: 20px 0;
  text-transform: uppercase;
  position: relative;
  color: #49aaaf;
  &:before {
    content: "";
    position: absolute;
    width: 23%;
    height: 3px;
    background: #49aaaf;
    top: 0;
    left: 0;
  }
`;
const Desc = styled.div`
  font-size: 20px;
  color: #342c46;
`;
const WrapperHead = styled.div`
  font-size: 30px;
  color: #1f2c46;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
`;
