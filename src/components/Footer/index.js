import styled from "styled-components";
import { Container, Row, Col, Media } from "reactstrap";
import BlockContent from "../common/BlockContent";
import MediaContent from "../common/MediaContent";
import screens from "../Layout/mediaQueries";

const Wrapper = styled.div`
  background-color: #6fabf8;
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

const Image = styled.img`
  height: 31px;
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

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 230px;
`;

const LegalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LegalImage = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container fluid>
      <BlockContent>
        <Wrapper>
          <Container>
            <Row>
              <Col sm={12} lg={3}>
                <MediaContent>
                  <Logo src="/footer/logo-white.png" alt="logo" />
                </MediaContent>
              </Col>

              <Col sm={12} lg={2}>
                <SectionWrapper>
                  <FooterHeading>Despre noi</FooterHeading>
                  <IconsWrapper>
                    <Image src="/footer/mail@2x.png" alt="mail" />
                    <Image
                      src="/footer/facebook-app-symbol@2x.png"
                      alt="facebook"
                    />
                    <Image src="/footer/whatsapp@2x.png" alt="whatsapp" />
                  </IconsWrapper>
                </SectionWrapper>
              </Col>
              <Col lg={1} />
              <Col lg={3}>
                <SectionWrapper>
                  <FooterHeading>Servicii de curățenie</FooterHeading>
                  <ParagraphWrapper>
                    <FooterParagraph>Scări de bloc</FooterParagraph>
                    <FooterParagraph>Curățenie de întreținere</FooterParagraph>
                    <FooterParagraph>Curățenie regim hotelier</FooterParagraph>
                    <FooterParagraph>Curățenie Generală</FooterParagraph>
                  </ParagraphWrapper>
                </SectionWrapper>
              </Col>
              <Col lg={1} />
              <Col lg={2}>
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
              <Col lg={6} />
              <Col lg={3}>
                <ParagraphWrapper>
                  <FooterParagraph>© NeatPoint/ Brașov/ 2023</FooterParagraph>
                </ParagraphWrapper>
              </Col>
              <Col lg={1} />
              <Col lg={2}>
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
  );
};

export default Footer;
