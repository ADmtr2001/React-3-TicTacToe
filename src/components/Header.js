import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGameContext } from "../contexts/game_context";

function Header(props) {
  const { resetGame } = useGameContext();
  return (
    <HeaderWrapper {...props}>
      <Link to='/'>
        <h1 onClick={resetGame}>{props.children}</h1>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 80px;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid
    ${(props) => props.borderColor || props.theme.borders.primary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => props.bgColor || props.theme.bgColors.primary};
  color: ${(props) => props.color || props.theme.colors.primary};
  position: relative;

  .icon {
    justify-self: flex-end;
  }
`;

export default Header;
