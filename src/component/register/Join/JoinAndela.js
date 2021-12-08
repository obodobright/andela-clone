import React from "react";
import styled from "styled-components";
import DataSignUp from "./DataSignUp";
import JoinDetails from "./JoinDetails";

const JoinAndela = () => {
  return (
    <Container style={{ display: "flex" }}>
      <JoinDetails />
      <DataSignUp />
    </Container>
  );
};

export default JoinAndela;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
