import React from "react";
import styled from "styled-components";
import { BsCheck2 } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import logo from "./Assets/Andela_PrimaryLogo_TM_2021_White.svg";

const TableComp = () => {
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th bg="#222C44">FEAUTURES</Th>
            <Th bg="#3359DF">
              <Logo src={logo} />{" "}
              <span>
                For scaling engineering teams with global, remote talent
              </span>
            </Th>
            <Th>
              FREELANCE MARKETPLACE{" "}
              <span>For hiring contractors quickly and cost-effectively</span>
            </Th>
            <Th>
              FULL-TIME MARKETPLACE{" "}
              <span>
                For hiring full-time employees without vetting or support
              </span>
            </Th>
            <Th>
              STAFF AUGMENTATION{" "}
              <span>
                For increasing development velocity for short-term needs
              </span>
            </Th>
            <Th>
              OUTSOURCING FIRMS{" "}
              <span>For long-term projects without team integration</span>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td bg="#222C44">Speed-to-hire</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FiAlertTriangle />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FiAlertTriangle />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Cost-effectiveness</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Timezone overlap</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Long-term</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Embedded</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Vetted and matched</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FiAlertTriangle />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FiAlertTriangle />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Global talent</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FiAlertTriangle />
              </Icon>
            </Td>
          </Tr>

          <Tr>
            <Td bg="#222C44">Embedded Manager</Td>
            <Td bg="#3359DF">
              <Icon>
                <BsCheck2 />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
            <Td>
              {" "}
              <Icon>
                <FaTimes />
              </Icon>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default TableComp;

const Logo = styled.img`
  width: 170px;
`;

const Icon = styled.div`
  font-size: 45px;
`;

const Td = styled.td`
  width: 200px;
  height: 90px;
  font-size: 20px;
  text-align: center;
  color: ${({ clr }) => clr};
  background-color: ${({ bg }) => bg};

  span {
    margin: 0 2px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Tbody = styled.tbody``;

const Thead = styled.thead`
  width: 200px;
  background-color: ${({ bg }) => (bg ? "#3359DF" : "#899BE6")};
  text-align: center;
`;

const Tr = styled.tr`
  background-color: ${({ bg }) => (bg ? "#3359DF" : "#899BE6")};
`;

const Th = styled.th`
  width: 200px;
  height: 180px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-family: lato, sans-serif;
  background-color: ${({ bg }) => bg};
  padding: 0 30px;

  span {
    display: flex;
    width: 100%;
    text-align: center;
    margin-top: 15px;
  }
`;

const Table = styled.table`
  width: 85%;
  height: 100%;
  color: white;
  margin: 100px 0;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
`;
