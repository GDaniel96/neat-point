import styled from "styled-components";
import screens from "../Layout/mediaQueries";

const BlockParagraph = styled.p`
  text-align: center;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 15px;
  @media only screen and (${screens.md}) {
    text-align: start;
  }
`;

export default BlockParagraph;
