import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import img from "../../assets/assethome/okta.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { LoginHelp } from "./LoginHelp";
import { Helper } from "./Help";
import { useSignIn } from "../hooks/useSignin";
import { useGoogle } from "../hooks/useGoogle";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [rembember, setRemember] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const { pending, isError, signIn } = useSignIn();
  const { GoogleSignIn } = useGoogle();
  const handleSHowHelp = () => {
    setShowHelp(!showHelp);
  };

  const handleRemember = () => {
    setRemember(!rembember);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    signIn(email, password);
    console.log(email, password);
    setEmail("");
    SetPassword("");
  };
  const handleGoogleSinIn = () => {
    GoogleSignIn();
  };
  return (
    <Container>
      <Wrapper>
        <HeaderText>Log in to your account</HeaderText>
        <FormContainer>
          <InputContainer>
            <label>Enter your email address</label>
            <br />
            <input
              type="text"
              placeholder="e.g. someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <PasswordContainer>
            <label>Password</label>
            <br />
            <Password>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
              />
              <Icon onClick={handleShow}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </Icon>
            </Password>
          </PasswordContainer>

          <CheckContainer>
            <input type="checkbox" value={rembember} onChange={handleRemember} />
            <label htmlFor="">Remember Me</label>
          </CheckContainer>
          <Btn bg="blue" color="white" onClick={handleSubmit}>
            Log in to your account
          </Btn>
          <Line></Line>
          <Btnn onClick={handleGoogleSinIn}>
            <IconHolder>
              <FcGoogle />
            </IconHolder>
            Log in with Google
          </Btnn>
          <Btnn>
            <IconHolder>
              <img src={img} alt="" />
            </IconHolder>
            Log in with Andela Email Address
          </Btnn>
          <Help>
            <P onClick={handleSHowHelp}>Need help signing in</P>
            {showHelp && <LoginHelp />}
          </Help>
        </FormContainer>
        <Helper />
      </Wrapper>
    </Container>
  );
};

const Help = styled.div`
  width: 80%;
  margin: 20px 0;
`;
const P = styled.a`
  font-size: 13px;
  color: blue;
  transition: all 350ms;
  transform: scale(1);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  padding: 0 10px;
  color: #aab1bb;
  cursor: pointer;
`;
const Password = styled.div`
  display: flex;
  width: 300px;
  height: 35px;

  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid lightgray;
  input {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0;
    margin: 7px 0;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 14px;

    ::placeholder {
      color: #aab1bb;
    }
`;
const PasswordContainer = styled.div`
  margin: 10px 0;

  label {
    margin-bottom: 10px;
  }
`;
const IconHolder = styled.div`
  margin-right: 3px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 20px;

  img {
    width: 15px;
  }
`;
const Line = styled.div`
  width: 80%;
  height: 1px;
  background: lightgray;
  margin-bottom: 20px;
`;
const Btnn = styled.div`
  width: 80%;
  height: 40px;
  border: 1px solid lightgray;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  font-size: 15px;
`;
const Btn = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
  border:${({ border }) => border};
  cursor:pointer

  }
`;
const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 300px;
  opacity: 0.6;
  label {
    font-size: 14px;
    margin-left: 10px;
  }
`;
const InputContainer = styled.div`
  margin: 10px 0;
  input {
    width: 300px;
    height: 35px;
    outline: none;
    border: 1px solid lightgray;
    margin: 7px 0;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 14px;

    ::placeholder {
      color: #aab1bb;
    }
  }
  label {
    margin-bottom: 10px;
  }
`;
const FormContainer = styled.div`
  width: 400px;
  height: 100%;
  min-height: 30vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 5px;
  align-items: center;
`;
const HeaderText = styled.div`
  font-weight: bold;
  font-size: 14px;
  padding-top: 100px;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: ;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f8f9fc;
`;
