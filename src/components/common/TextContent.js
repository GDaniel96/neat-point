import styled from "styled-components";
import screens from "../Layout/mediaQueries";

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (${screens.md}) {
    align-items: start;
  }
`;

export default TextContent;
