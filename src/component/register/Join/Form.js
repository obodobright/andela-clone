import { useState } from "react";
import styled from "styled-components";

export const Form = () => {
  return (
    <FormHolder>
      <InputHolder>
        <Inputt>
          <Label>First Name</Label>
          <Input type="text" />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>First Name</Label>
          <Input type="text" />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" />
        </Inputt>
      </InputHolder>
      <InputHolder>
        <Inputt>
          <Label>First Name</Label>
          <Input type="text" />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" />
        </Inputt>
      </InputHolder>{" "}
      <InputHolder>
        <Inputt>
          <Label>First Name</Label>
          <Input type="text" />
        </Inputt>
        <Inputt>
          <Label>Last Name</Label>
          <Input type="text" />
        </Inputt>
      </InputHolder>
    </FormHolder>
  );
};

const Inputt = styled.div`
  margin: 0 15px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`;
const InputHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Label = styled.div`
  font-size: 13px;
  opacity: 0.6;
  margin: 10px 0;
`;
const FormHolder = styled.div``;
