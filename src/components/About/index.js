import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import MediaContent from "../common/MediaContent";
import BlockContent from "../common/BlockContent";
import BlockHeader from "../common/BlockHeader";
import BlockParagraph from "../common/BlockParagraph";
import TextContent from "../common/TextContent";
import Button from "../common/Button";
import screens from "../Layout/mediaQueries";
import Link from "../common/Link";

const Wrapper = styled.div`
  background-image: url("/aboutPage/backgroundImage.svg");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (${screens.md}) {
    background-position: 110% 50%;
    background-size: fill;
  }
  @media only screen and (${screens.lg}) {
    background-position: 104% 50%;
    background-size: 40%;
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  @media only screen and (${screens.md}) {
    margin-left: -30px;
  }
`;

const BlockHomeHeader = styled.h2`
  text-align: center;
  padding: 25px 0px;
  font-family: "Roboto";
  font-size: 25px;
  font-weight: bold;
  @media only screen and (${screens.md}) {
    text-align: start;
  }
`;

const About = () => {
  return (
    <Container fluid id="about">
      <Wrapper>
        <BlockContent>
          <Row>
            <Col lg={7}>
              <MediaContent>
                <Image
                  src="/aboutPage/homePage-mobile.png"
                  alt="home-page-image"
                />
              </MediaContent>
            </Col>

            <Col lg={5}>
              <TextWrapper>
                <TextContent>
                  <BlockHomeHeader>
                    Servicii profesionale de curățenie adaptate la nevoile tale
                  </BlockHomeHeader>
                  <BlockParagraph>
                    Neat Point oferă servicii profesionale de curățenie în regim
                    hotelier, cât și la domiciliu, în Județul Brașov.
                    Profesionalismul de care am dat dovadă în cei patru ani de
                    activitate, reflectă încrederea pe care clienții noștri ne-o
                    oferă, datorită promptitudinii și eficienței lucrului bine
                    făcut.
                  </BlockParagraph>
                  <Link href="#contact">
                    <Button>Contactează-ne</Button>
                  </Link>
                </TextContent>
              </TextWrapper>
            </Col>
          </Row>
        </BlockContent>
      </Wrapper>
    </Container>
  );
};

export default About;
