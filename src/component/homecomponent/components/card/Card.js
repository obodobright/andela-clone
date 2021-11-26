import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { data } from "./cardData";
const Card = () => {
  return (
    <Container>
      <Wrapper>
        {data?.map((prop) => {
          const { id, img, description, subject } = prop;
          return (
            <CardContainer key={id}>
              <ImageHolder bg={`${id}`}>
                <Image src={img} />
              </ImageHolder>
              <Subject> {subject} </Subject> <Desc>{description}</Desc>{" "}
              <Links>
                Learn more{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </Links>{" "}
            </CardContainer>
          );
        })}
      </Wrapper>{" "}
    </Container>
  );
};

export default Card;
const Links = styled.div`
  font-size: 20px;
  margin-top: 20px;
  color: #355ddf;
  text-transfrom: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  span {
    margin-top: 10px;
    margin-left: 5px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  opacity: 0.6;
  line-height: 1.4;
  height: 50px;
`;
const Subject = styled.h1`
  color: ${({ theme }) => theme.textColor.color};
`;
const Image = styled.img`
  width: 50px;
  @media (max-width: 768px) {
    width: 30px;
  }
`;
const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: ${({ bg }) =>
    bg === "1"
      ? "#FEB048"
      : bg === "2"
      ? "#355ddf"
      : bg === "3"
      ? "#49AAAF"
      : bg === "4"
      ? "#1F2C46"
      : null};
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
const CardContainer = styled.div`
  padding: 20px;
  width: 500px;
  min-height: 350px;
  height: 100%;
  background: white;
  position: relative;
  top: -120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  border: 1px solid whitesmoke;
  transition: all 350ms;
  &:hover {
    box-shadow: 0px 1px 7px 4px rgba(196, 188, 188, 0.75);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: #f4f6fc;
`;
