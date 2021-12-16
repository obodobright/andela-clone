import React from "react";
import styled from "styled-components";
import img1 from "./Assets/logo.png";

const SecondSection = () => {
  return (
    <Container>
      <Wrapper>
        <Section2>
          <LogoHolder>
            <Logo2 src={img1} />
          </LogoHolder>
          <Text>Hire Talent</Text>

          <Form>
            <Row>
              <Details>
                <InputLabel htmlFor="firstName">First Name:</InputLabel>
                <Input id="firstName" type="text" />
              </Details>

              <Details>
                <InputLabel htmlFor="lastName">Last Name:</InputLabel>
                <Input id="lastName" type="text" />
              </Details>
            </Row>

            <Row>
              <Details>
                <InputLabel htmlFor="companyName">Company Name:</InputLabel>
                <Input id="companyName" type="text" />
              </Details>

              <Details>
                <InputLabel htmlFor="jobTitle">Job Title:</InputLabel>
                <Input id="jobTitle" type="text" />
              </Details>
            </Row>

            <Row>
              <Details>
                <InputLabel htmlFor="workEmail">Work Email:</InputLabel>
                <Input id="workEmail" type="email" />
              </Details>

              <Details>
                <InputLabel htmlFor="phoneNumber">Phone Number:</InputLabel>
                <Input id="phoneNumber" type="number" />
              </Details>
            </Row>

            <Row>
              <Details>
                <InputLabel htmlFor="employeeRange">Employee Range:</InputLabel>
                <Input id="employeeRange" type="text" />
              </Details>

              <Details>
                <InputLabel htmlFor="currentRole">
                  Your Current Role:
                </InputLabel>
                <Input id="currentRole" type="text" />
              </Details>
            </Row>

            <Row>
              <Details>
                <InputLabel htmlFor="country">Country:</InputLabel>
                <Input id="country" type="text" />
              </Details>
            </Row>

            <Terms>
              <Check type="checkbox" />
              <Policy>
                I understand that Andela will process my information in
                accordance with their <span> Privacy Policy.</span> I may
                withdraw my consent through unsubscribe links at any time.
              </Policy>
            </Terms>
            <Button>Submit</Button>
          </Form>
        </Section2>
      </Wrapper>
    </Container>
  );
};

export default SecondSection;

const Button = styled.button`
  width: 280px;
  height: 60px;
  background-color: #3d61e1;
  margin-bottom: 150px;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  transition: all 350ms;
  cursor: pointer;
  margin-left: 35px;

  @media screen and (max-width: 1210px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
  }
`;

const Check = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 35px;

  @media screen and (max-width: 1210px) {
    margin-left: 0;
  }
`;

const Terms = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media screen and (max-width: 1210px) {
    margin: 20px 0;
  }
`;

const Policy = styled.div`
  width: 750px;
  font-size: 20px;
  margin-left: 20px;
  color: #716373;

  span {
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }

  @media screen and (max-width: 1210px) {
    width: 100%;
    margin-left: 0;
    margin-left: 16px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media screen and (max-width: 1210px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;

  @media screen and (max-width: 1210px) {
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin: 0;
  }
`;

const InputLabel = styled.label`
  font-size: 18px;
  color: #716373;
  margin: 0px 30px;

  @media screen and (max-width: 1210px) {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  width: 320px;
  height: 50px;
  outline: none;
  border: none;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin: 10px 30px;
  padding-left: 15px;
  font-size: 18px;

  @media screen and (max-width: 1210px) {
    width: 320px;
    height: 50px;
    margin: 0;
    margin-bottom: 20px;
  }
`;
const Section2 = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50px;

  @media screen and (max-width: 1210px) {
    width: 90%;
    height: 100%;
    position: relative;
  }
`;

const Text = styled.div`
  color: black;
  margin-bottom: 30px;
  margin-left: 60px;
  font-size: 25px;
  font-weight: 500;
  font-family: lato, sans-serif;

  @media screen and (max-width: 1210px) {
    width: 100%;
    margin-left: 100px;
    display: flex;
    justify-content: center;
  }
`;

const LogoHolder = styled.div`
  // width: 580px;
  // height: 100%;
  display: flex;
  margin-left: 50px;
`;

const Logo2 = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  margin-bottom: 20px;
  margin-top: 50px;

  @media screen and (max-width: 1210px) {
    margin-left: 50px;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1210px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
