import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Title({ children }) {
  return (
    <Link to='/'>
      <TitleWrapper>{children}</TitleWrapper>
    </Link>
  );
}

const TitleWrapper = styled.h1`
  padding: 1rem 0;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  color: ${({ color }) => color || "black"};
`;

export default Title;
