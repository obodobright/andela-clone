import styled from "styled-components";

export const Button = styled.div `
  width: 150px;
  height: 50px;
  background: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ color }) => color};
  font-weight: bold;
  cursor: pointer;
`;