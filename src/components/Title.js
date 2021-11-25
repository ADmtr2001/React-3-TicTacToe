import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSettingsSharp } from "react-icons/io5";

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
  height: 8vh;
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
  cursor: url("https://img.icons8.com/external-those-icons-lineal-those-icons/24/ffffff/external-cursor-selection-cursors-those-icons-lineal-those-icons.png"),
    auto;

  .icon {
    justify-self: flex-end;
  }
`;

export default Title;
