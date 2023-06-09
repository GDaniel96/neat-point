import styled from "styled-components";
import screens from "../Layout/mediaQueries";

const BlockHeader = styled.h2`
  text-align: center;
  padding: 25px 0;
  font-size: 25px;
  font-weight: bold;
  position: relative;
  &:after {
    display: block;
    content: "";
    position: absolute;
    bottom: 25px;
    width: 100%;
    height: 20px;
    background-color: #fcef6d;
    opacity: 0.7;
    z-index: -1;
  }

  @media only screen and (${screens.md}) {
    padding: 0 0 25px 0;
    &:after {
      top: 45px;
    }
  }
`;

export default BlockHeader;
