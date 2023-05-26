import styled from "styled-components";
import { Container, Row, Col, Media } from "reactstrap";
import BlockContent from "../common/BlockContent";
import MediaContent from "../common/MediaContent";

const Wrapper = styled.div`
  background-color: #6fabf8;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 79px;
`;

const Image = styled.img``;

const SectionWrapper = styled.div`
  width: 230px;
  padding: 40px 0;
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
`;

const FooterParagraph = styled.p`
  font-family: "Roboto";
  color: #ffff;
  font-weight: normal;
  font-size: 18px;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  height: 38px;
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
    <Container>
      <BlockContent>
        <Row>
          <Wrapper>
            <Col>
              <MediaContent>
                <Logo src="/footer/logo-white.png" alt="logo" />
              </MediaContent>
            </Col>
            <Col>
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
            <Col>
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
            <Col>
              <SectionWrapper>
                <FooterHeading>Contact</FooterHeading>
                <ParagraphWrapper>
                  <FooterParagraph>0758460513</FooterParagraph>
                  <FooterParagraph>neatpoint18@gmail.com</FooterParagraph>
                </ParagraphWrapper>
                <LegalWrapper>
                  <LegalImage src="/footer/litigii.png" />
                  <LegalImage src="/footer/solutionarea-alternativa-a-litigiilor.svg" />
                </LegalWrapper>
              </SectionWrapper>
              <ParagraphWrapper>
                <FooterParagraph>© NeatPoint/ Brașov/ 2023</FooterParagraph>
              </ParagraphWrapper>
            </Col>
          </Wrapper>
        </Row>
      </BlockContent>
    </Container>
  );
};

export default Footer;
