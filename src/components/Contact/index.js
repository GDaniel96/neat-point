import styled from "styled-components";
import Button from "../common/Button";
import BlockHeader from "../common/BlockHeader";
import BlockParagraph from "../common/BlockParagraph";
import BlockContent from "../common/BlockContent";
import { Row, Col, Container } from "reactstrap";
import screens from "../Layout/mediaQueries";
import Form from "./Form";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (${screens.md}) {
    width: 515px;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <BlockContent>
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <Row>
              <Wrapper>
                <TextWrapper>
                  <BlockHeader>
                    Scrie-ne un mesaj pentru a primi o oferta adaptată nevoilor
                    tale
                  </BlockHeader>
                  <BlockParagraph>
                    Serviciile noastre se aplică doar în Județul Brașov
                  </BlockParagraph>
                </TextWrapper>
              </Wrapper>
            </Row>
            <Row>
              <Form />
            </Row>
          </Col>
          <Col lg={2} />
        </Row>
      </BlockContent>
    </Container>
  );
};

export default Contact;
