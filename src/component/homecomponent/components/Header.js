import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styles/Container.styled";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/base";
import { Link } from "react-router-dom";

export const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const handleSigout = () => {
    auth.signOut();
  };
  return (
    <Container>
      <Wrapper height="70px">
        {currentUser ? (
          <Links onClick={handleSigout}>Log out</Links>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <UserInfo>
          {currentUser &&
            currentUser?.displayName?.charAt(0) + currentUser?.displayName?.charAt(1).toUpperCase()}
        </UserInfo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: blue;
  color: white;
`;
const UserInfo = styled.div``;
const Links = styled.div`
  width: 100px;
  height: 30px;
  background: white;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
