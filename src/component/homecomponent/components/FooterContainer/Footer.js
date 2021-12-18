import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button.styled";
import FooterSec from "./FooterSec";

const FooterMain = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentText>
            <h2>Grow your engineering team with global talent today.</h2>
            <h3>Tell us what you are looking for, we’ll take care of the rest.</h3>
          </ContentText>
          <Button bg="#4769e2" color="white" wd="450px">
            Hire Talent
          </Button>
        </Content>
        <ItemList>
          <ItemHead>Andela has experts in:</ItemHead>
          <ListItems>
            <ul>
              <li>Angular</li>
              <li>Data Engineering</li>
              <li>DevOps</li>
            </ul>
            <ul>
              <li>Golang</li>
              <li>iOS</li>
              <li>Java</li>
            </ul>{" "}
            <ul>
              <li>Python</li>
              <li>QA</li>
              <li>React Native</li>
            </ul>{" "}
            <ul>
              <li>React.js</li>
              <li>Ruby</li>
              <li>Salesforce</li>
            </ul>
          </ListItems>
        </ItemList>
        <FooterSec />
      </Wrapper>
    </Container>
  );
};

export default FooterMain;
const ListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    padding: 10px 0px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 5px;
    color: #4769e2;
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #f7f2f2;
    left: 0;
    top: 100px;
    @media (max-width: 768px) {
      top: 370px;
      width: 450px;
    }
  }
`;
const ItemList = styled.div`
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
  padding-top: 70px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const ItemHead = styled.div`
  font-size: 20px;
`;

const ContentText = styled.div`
  h2 {
    margin: 0;
    font-weight: 400;
    color: #4769e2;
    margin: 5px 0;
    font-size: 28px;
    @media (max-width: 768px) {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.5;
    }
  }
  h3 {
    margin: 0;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 20px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
`;
