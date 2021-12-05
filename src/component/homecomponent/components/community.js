import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button.styled";
const Community = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>Community</WrapperTitle>
        <Content>
          <MessageBox>A Message from Andela’s CEO: Announcement of Series E Funding</MessageBox>
          <Button bg="#1E2A44" color="white" bd="5px" wd="150px">
            Read Now
          </Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Community;

const WrapperTitle = styled.div`
  width: 1020px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: #283251;
  text-transform: uppercase;
  font-size: 16px;
  @media (max-width: 768px) {
    width: fit-content;
  }
`;
// const Button = styled.div``;

const MessageBox = styled.div`
  font-size: 18px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  background-image: url("world.png");
  background-size: none;
  background-position: top right -700px;
  background-color: #182039;
`;
