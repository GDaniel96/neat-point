import styled from "styled-components";
import { Container, Row, Col, Media } from "reactstrap";
import BlockContent from "../common/BlockContent";
import MediaContent from "../common/MediaContent";
import screens from "../Layout/mediaQueries";
import Link from "../common/Link";

const BackgroundContainer = styled.div`
  background-image: url("./footer/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  color: #ffffff;
  margin: 0 -12px;
  padding-bottom: 46px;
  border-radius: 35% 35% 0 0;
`;

const Logo = styled.img`
  height: 79px;
  @media only screen and (${screens.md}) {
    height: 134px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  @media only screen and (${screens.md}) {
    align-items: flex-start;
    padding: 40px 0;
  }
`;

const FooterHeading = styled.h6`
  font-family: "Roboto";
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  text-align: center;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-top: 25px;
  @media only screen and (${screens.md}) {
    align-items: flex-start;
  }
`;

const FooterParagraph = styled.p`
  font-family: "Roboto";
  color: #ffff;
  font-weight: normal;
  font-size: 18px;
`;

const CopyrightWrapper = styled.div`
  padding-top: 65px;
`;

const LegalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media only screen and (${screens.md}) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const LegalImage = styled.img`
  width: 50%;

  @media only screen and (${screens.md}) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <BackgroundContainer>
      <Container fluid>
        <BlockContent>
          <Wrapper>
            <Container>
              <Row>
                <Col sm={12} lg={4}>
                  <MediaContent>
                    <Logo src="/footer/logo-white.png" alt="logo" />
                  </MediaContent>
                </Col>
                <Col lg={1} />
                <Col lg={3}>
                  <SectionWrapper>
                    <FooterHeading>Servicii de curățenie</FooterHeading>
                    <ParagraphWrapper>
                      <Link href="#scari-de-bloc">
                        <FooterParagraph>Scări de bloc</FooterParagraph>
                      </Link>
                      <Link href="#curatenie-de-intretinere">
                        <FooterParagraph>
                          Curățenie de întreținere
                        </FooterParagraph>
                      </Link>
                      <Link href="#curatenie-regim-hotelier">
                        <FooterParagraph>
                          Curățenie regim hotelier
                        </FooterParagraph>
                      </Link>
                      <Link href="#curatenie-generala">
                        <FooterParagraph>Curățenie Generală</FooterParagraph>
                      </Link>
                    </ParagraphWrapper>
                  </SectionWrapper>
                </Col>
                <Col lg={1} />
                <Col lg={3}>
                  <SectionWrapper>
                    <FooterHeading>Contact</FooterHeading>
                    <ParagraphWrapper>
                      <FooterParagraph>0758460513</FooterParagraph>
                      <FooterParagraph>neatpoint18@gmail.com</FooterParagraph>
                    </ParagraphWrapper>
                  </SectionWrapper>
                </Col>
              </Row>
              <Row>
                <Col lg={5} />
                <Col lg={3}>
                  <CopyrightWrapper>
                    <ParagraphWrapper>
                      <FooterParagraph>
                        © NeatPoint/ Brașov/ 2023
                      </FooterParagraph>
                    </ParagraphWrapper>
                  </CopyrightWrapper>
                </Col>
                <Col lg={1} />
                <Col lg={3}>
                  <LegalWrapper>
                    <LegalImage src="/footer/litigii.png" />
                    <LegalImage src="/footer/solutionarea-alternativa-a-litigiilor.svg" />
                  </LegalWrapper>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </BlockContent>
      </Container>
    </BackgroundContainer>
  );
};

export default Footer;
