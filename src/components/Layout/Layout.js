import react from "react";
import styled from "styled-components";
import screens from "./mediaQueries";

const AppWrapper = styled.div`
  padding-top: 25px;
  @media only screen and (${screens.md}) {
    padding-top: 45px;
  }
`;

const Layout = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export default Layout;
