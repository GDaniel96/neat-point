import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";

const LogoWrapper = styled.div`
  height: 93px;
  text-align: center;
`;

const Image = styled.img`
  height: 100%;
`;

const ListWrapper = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const MenuItem = styled.li`
  font-family: "Roboto";
  font-size: 20px;
  list-style-type: none;
  height: 40px;
`;

const LineThrough = styled.div`
  position: relative;
  bottom: 10px;
  width: 100%;
  height: 10px;
  background-color: #fcef6d;
  opacity: 0.7;
  z-index: -1;
  ${MenuItem}:hover & {
    height: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg={2} />
        <Col lg={2}>
          <LogoWrapper>
            <Image src="/logo.svg" alt="logo" />
          </LogoWrapper>
        </Col>
        <Col lg={3} />
        <Col lg={5}>
          <ListWrapper>
            <MenuItem>
              Despre noi
              <LineThrough />
            </MenuItem>

            <MenuItem>
              Servicii
              <LineThrough />
            </MenuItem>

            <MenuItem>
              Contact
              <LineThrough />
            </MenuItem>
          </ListWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;