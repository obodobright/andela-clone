import React from "react";
import styled from "styled-components";
import img1 from "./Assets/icon_checkmark.svg";
import img2 from "./Assets/icon-earth-globe-white.png";
import img3 from "./Assets/icon-technical.png";
import img4 from "./Assets/icon_arrow-1.png";
import img5 from "./Assets/icon_03.png";
import img6 from "./Assets/icon_04.png";

const ThirdComp = () => {
  return (
    <Container>
      <Wrapper>
        <CardWrapper>
          <Card>
            <IconWrapper bg="#3359DF">
              <Icon src={img1} />
            </IconWrapper>

            <Title>Rigorous Vetting Process</Title>
            <Desc>
              Our hiring process is quick and efficient while also maintaining
              the highest quality admission standards to ensure we can place you
              with top-quality engineers at scale.
            </Desc>
          </Card>
          <Card>
            <IconWrapper bg="#FFAF30">
              <Icon src={img2} />
            </IconWrapper>

            <Title>Vetted Talent from Multiple Regions</Title>
            <Desc>
              In today’s hypercompetitive hiring environment, companies that
              limit themselves to local hires are at a severe disadvantage. With
              Andela, you can tap into our pool of highly-qualified talent from
              around the world and cut your hiring timelines down from months to
              days.
            </Desc>
          </Card>
          <Card>
            <IconWrapper bg="#5BB3B7">
              <Icon src={img3} />
            </IconWrapper>

            <Title>Extensive List of Technical Services</Title>
            <Desc>
              Whether you need to hire a software engineer with expertise in
              React, Golang, DevOps, or Salesforce, we have the engineering
              talent in place across a wide variety of technical stacks and
              services to meet your organization’s needs.
            </Desc>
          </Card>
          <Card>
            <IconWrapper bg="#ADCB50">
              <Icon src={img4} />
            </IconWrapper>

            <Title>Efficient Ramp-up Times</Title>
            <Desc>
              We understand that companies are expected to do more with less and
              consistently justify ROI. When you hire Andela engineers, you can
              expect that they’ll be efficiently onboarded and ready to deliver
              value up to 70% faster than industry average onboarding times.
            </Desc>
          </Card>
          <Card>
            <IconWrapper bg="#3359DF">
              <Icon src={img5} />
            </IconWrapper>

            <Title>Embedded Team Members</Title>
            <Desc>
              Andela engineers are not just part-time support but rather fully
              embedded into your organization, aligned with client timezone
              needs regardless of location.
            </Desc>
          </Card>
          <Card>
            <IconWrapper bg="#FFAF30">
              <Icon src={img6} />
            </IconWrapper>

            <Title>Freedom to Focus on Core Business</Title>
            <Desc>
              After onboarding your distributed team of Andelans, we provide
              additional technical and/or project management support resources
              as needed so you have the freedom to focus on your core business.
            </Desc>
          </Card>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default ThirdComp;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 32px;
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  width: 360px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  padding: 25px;
  margin: 15px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: lato, sans-serif;
  color: #565b73;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f4f6fc;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;
