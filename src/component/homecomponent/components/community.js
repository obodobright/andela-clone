import React from "react";
import styled from "styled-components";
const Community = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>Community</WrapperTitle>
        <Content>
          <MessageBox>A Message from Andela’s CEO: Announcement of Series E Funding</MessageBox>
          <Button>Read Now</Button>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Community;

const WrapperTitle = styled.div``;
const Button = styled.div``;

const MessageBox = styled.div``;
const Content = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  background: darkblue;
`;
