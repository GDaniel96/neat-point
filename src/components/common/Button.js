import styled from "styled-components";

const Button = styled.button`
  background-color: #5aadff;
  border-radius: 34px;
  color: #ffffff;
  height: 45px;
  border: none;
  padding: 10px 25px;
  margin: 45px 0px;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  &:disabled {
    opacity: 0.6;
  }
`;

export default Button;
