import styled from "styled-components";
import { Row, Col } from "reactstrap";
import MediaContent from "../common/MediaContent";
import BlockHeader from "../common/BlockHeader";
import BlockSubheading from "../common/BlockSubheading";
import TextContent from "../common/TextContent";
import Button from "../common/Button";
import screens from "../Layout/mediaQueries";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
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

const Image = styled.img`
  width: 100%;
`;

const Service = ({ header, source, children }) => {
  return (
    <Wrapper>
      <Row>
        <Col lg={6}>
          <MediaContent>
            <Image src={source} alt={source} />
          </MediaContent>
        </Col>
        <Col lg={1} />
        <Col lg={5}>
          <TextContent>
            <BlockSubheading>{header}</BlockSubheading>
            <ListWrapper>{children}</ListWrapper>
            <Button>Cere Oferta</Button>
          </TextContent>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Service;