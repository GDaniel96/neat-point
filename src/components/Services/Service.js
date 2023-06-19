import styled from "styled-components";
import { Row, Col } from "reactstrap";
import MediaContent from "../common/MediaContent";
import BlockSubHeader from "../common/BlockSubHeader";
import TextContent from "../common/TextContent";
import Button from "../common/Button";
import screens from "../Layout/mediaQueries";
import Link from "../common/Link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (${screens.md}) {
    align-items: start;
    padding-bottom: 100px;
  }
`;

const ServiceHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
  @media only screen and (${screens.md}) {
    gap: 16px;
    align-items: start;
  }
`;

const EllipsisWrapper = styled.span`
  padding-top: 27px;
  @media only screen and (${screens.md}) {
    padding-top: 0;
    margin-left: -60px;
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
              <ServiceHeaderWrapper>
                <EllipsisWrapper>
                  <img src="/services/ellipsis.png" />
                </EllipsisWrapper>
                <BlockSubHeader>{header}</BlockSubHeader>
              </ServiceHeaderWrapper>
              <ListWrapper>{children}</ListWrapper>
              <Link href="#contact">
                <Button>Cere Oferta</Button>
              </Link>
            </TextContent>
          </Col>
        </CardContainer>
      </Row>
    </Wrapper>
  );
};

export default Service;
