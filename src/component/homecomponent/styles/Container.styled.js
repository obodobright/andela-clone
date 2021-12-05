import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  height: 100%;
  min-height: ${({ height }) => height};
  background: ${({ bg }) => bg};
`;
const Wrapper = styled.div `
width:100%;
height:${({ height }) => height}
background:${({ bg }) => bg}
display:flex;
align-items:center

`;

export { Container, Wrapper };