import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginHelp = () => {
  return (
    <Container>
      <Wrapper>
        <Links to="/login/forgotpassword">Forgot Password</Links>
        <Links to="/login/help">Help</Links>
      </Wrapper>
    </Container>
  );
};

const Links = styled(Link)`
  font-size: 13px;
  color: blue;
  text-decoration: none;
  margin: 4px 0;
  transition: all 350ms;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;
