import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Title(props) {
  return (
    <HeaderWrapper {...props}>
      <Link to='/'>
        <h1>{props.children}</h1>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 0.5rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.borderColor || "black"};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.bgColor || props.theme.bgColors.primary};
  color: ${(props) => props.color || props.theme.colors.primary};
`;

export default Title;
