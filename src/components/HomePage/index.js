import styled from "styled-components";
import { Col, Row, Container } from "reactstrap";
import MediaContent from "../common/MediaContent";
import BlockContent from "../common/BlockContent";
import BlockHeader from "../common/BlockHeader";
import BlockParagraph from "../common/BlockParagraph";
import TextContent from "../common/TextContent";
import Button from "../common/Button";
import screens from "../Layout/mediaQueries";

const Wrapper = styled.div`
  background-image: url("/homePage/backgroundImage.svg");
  background-repeat: no-repeat;
  background-position: 300% 50%;
  @media only screen and (${screens.md}) {
    background-position: 110% 50%;
  }
  @media only screen and (${screens.lg}) {
    background-position: 104% 50%;
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
    margin-left: -12px;
  }
`;

const HomePage = () => {
  return (
    <Container fluid>
      <Wrapper>
        <BlockContent>
          <Row>
            <Col lg={7}>
              <MediaContent>
                <Image
                  src="/homePage/homePage-mobile.png"
                  alt="home-page-image"
                />
              </MediaContent>
            </Col>

            <Col lg={5}>
              <TextWrapper>
                <TextContent>
                  <BlockHeader>
                    Servicii profesionale de curățenie adaptate la nevoile tale
                  </BlockHeader>
                  <BlockParagraph>
                    Neat Point oferă servicii profesionale de curățenie în regim
                    hotelier, cât și la domiciliu, în Județul Brașov.
                    Profesionalismul de care am dat dovadă în cei patru ani de
                    activitate, reflectă încrederea pe care clienții noștri ne-o
                    oferă, datorită promptitudinii și eficienței lucrului bine
                    făcut.
                  </BlockParagraph>
                  <Button>Contactează-ne</Button>
                </TextContent>
              </TextWrapper>
            </Col>
          </Row>
        </BlockContent>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
