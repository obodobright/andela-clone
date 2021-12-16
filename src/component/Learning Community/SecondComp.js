import React from "react";
import styled from "styled-components";
import data from "./data.json";
import logo1 from "./Assets/icon_04.png";
import logo2 from "./Assets/icon_01.png";
import logo3 from "./Assets/icon_02.png";
import logo4 from "./Assets/icon_03.png";

const SecondComp = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <LogoHolder bg="#FFAF30">
            <Logo src={logo1} />
          </LogoHolder>
          <Title>Learning Programs with Leading Partners</Title>
          <Note>We collaborate with industry experts to:</Note>
          <ul>
            <li>Develop up to date curriculum content</li>
            <li>
              Source and model projects that allow you to gain and demonstrate
              your market ready experience
            </li>
            <li>Empower engineers to learn on the job</li>
            <li>Offer certification scholarships</li>
          </ul>
        </Card>
        <Card>
          <LogoHolder bg="#3359DF">
            <Logo src={logo2} />
          </LogoHolder>
          <Title>Career Opportunities</Title>
          <Note>
            With the job network initiative, we go beyond learning and mentoring
            to:
          </Note>
          <ul>
            <li>Connect ALC members to employment opportunities</li>
            <li>
              You get a chance to curate your professional profile and showcase
              your skills to organizations seeking local and global tech talent
              to enhance their business delivery and product efficiency
            </li>
          </ul>
        </Card>
        <Card>
          <LogoHolder bg="#49AAAF">
            <Logo src={logo3} />
          </LogoHolder>
          <Title>Growing Community</Title>
          <Note>
            To date, over 100,000+ engineers spread globally have participated
            in the Andela Learning Community programs. Whether you are a
            newcomer to engineering or senior in your career, there is value for
            you here. Our online and remote learning solutions allow easy access
            to materials and education regardless of where you are
            geographically located.
          </Note>
        </Card>
        <Card>
          <LogoHolder bg="#1F2C46">
            <Logo src={logo4} />
          </LogoHolder>
          <Title>Mentoring Opportunities</Title>
          <Note>
            Grow your reach and increase your circle of influence as a thought
            leader in your respective field.
          </Note>
          <ul>
            <li>
              Are you a problem solver or a domain expert in a certain
              language/stack or field? Pass this knowledge on to those starting
              their career journey or switching from one field to another.
            </li>
            <li>
              The ALC gives you the opportunity to participate as a mentor where
              you can guide and unblock learners through their learning journey.
            </li>
          </ul>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SecondComp;

const Note = styled.div`
  font-size: 22px;
  line-height: 35px;
  color: #565b73;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 37px;
  line-height: 47px;
  color: #1f2c46;
  font-family: lato, sans-serif;
  margin-top: 30px;
`;

const LogoHolder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 20px 0;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  object-fit: contain;
  color: white;
`;

const Card = styled.div`
  width: 600px;
  height: 630px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  li {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #7c829e;
    font-family: lato, sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #f4f6fc;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
`;
