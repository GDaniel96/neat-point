import styled from "styled-components";
import { Row, Col } from "reactstrap";
import MediaContent from "../common/MediaContent";
import BlockHeader from "../common/BlockHeader";
import TextContent from "../common/TextContent";
import Button from "../common/Button";
import screens from "../Layout/mediaQueries";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (${screens.md}) {
    align-items: start;
    padding-bottom: 100px;
  }
`;

const ListWrapper = styled.ul`
  text-align: center;
  padding: 0;
  margin: 0;
  @media only screen and (${screens.md}) {
    text-align: start;
  }
`;

const CardContainer = styled.div`
  @media only screen and (${screens.md}) {
    display: flex;
    flex-direction: ${({ flipped }) => (flipped ? "row-reverse" : "row")};
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Service = ({ header, source, children, flipped, id }) => {
  return (
    <Wrapper id={id}>
      <Row>
        <CardContainer flipped={flipped}>
          <Col lg={6}>
            <MediaContent>
              <Image src={source} alt={source} />
            </MediaContent>
          </Col>
          <Col lg={1} />
          <Col lg={5}>
            <TextContent>
              <BlockHeader>{header}</BlockHeader>
              <ListWrapper>{children}</ListWrapper>
              <Button>Cere Oferta</Button>
            </TextContent>
          </Col>
        </CardContainer>
      </Row>
    </Wrapper>
  );
};

export default Service;
