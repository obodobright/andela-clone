import React from "react";
import styled from "styled-components";
import testimonialImg from "../../../assets/assethome/img_testimonial.png";
import AndelaCommunity from "./andelaCommunity";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Testimonial>
          <Image src={testimonialImg} />
          <QuoteContent>
            <Quote>
              “Every one of the Andela engineers I have worked with has been stellar. They are great
              engineers, really driven to deliver, and they’re just great people.”
            </Quote>
            <QuoteAuth>Michael Archibald</QuoteAuth>
            <AuthCompany>CTO, SalesRabbit</AuthCompany>
          </QuoteContent>
        </Testimonial>
        <AndelaCommunity />
      </Wrapper>
    </Container>
  );
};

export default Contact;
const Image = styled.img`
  width: 300px;
  // height: 350px;
  object-fit: contain;
  margin: 0 30px;
`;

const Quote = styled.div`
  font-size: 26px;
  margin-bottom: 10px;
`;
const QuoteAuth = styled.div``;
const AuthCompany = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;
const QuoteContent = styled.div`
  width: 600px;

  margin: 0 30px;
  margin-top: 40px;
`;

const Testimonial = styled.div`
  margin-bottom: 70px;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: white;
`;
