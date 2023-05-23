import styled from "styled-components";
import screens from "../Layout/mediaQueries";

const BlockHeader = styled.h2`
  text-align: center;
  padding-bottom: 25px;
  font-family: "Roboto";
  font-size: 25px;
  font-weight: bold;
  @media only screen and (${screens.md}) {
    text-align: start;
  }
`;

export default BlockHeader;
