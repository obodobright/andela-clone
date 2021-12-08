import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../../assets/assethome/joinlogo.png";
import { Form } from "./Form";

const DataSignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="logo" />
        <WrapperText>
          <Text2>Apply to Join our Talent Network</Text2>
          <Text1>
            Already have an account? <Links to="/login">Login here</Links>{" "}
          </Text1>
        </WrapperText>
        <Form />
      </Wrapper>
    </Container>
  );
};

export default DataSignUp;
const Links = styled(Link)`
  text-decoration: none;
  opacity: 1;
  color: blue;
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-top: 40px;
`;
const WrapperText = styled.div`
  padding: 20px 0;
`;
const Text2 = styled.div`
  font-size: 25px;
`;
const Text1 = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
  opacity: 0.6;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-left: 550px;
`;
