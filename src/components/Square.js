import styled from "styled-components";
import { useGameContext } from "../contexts/game_context";

function Square(props) {
  const { handleClick, isEnd } = useGameContext();

  return (
    <SquareWrapper
      {...props}
      onClick={() => {
        if (isEnd) return;
        handleClick(props.id);
      }}
    >
      <span className='sign'>{props.children}</span>
    </SquareWrapper>
  );
}

const SquareWrapper = styled.div`
  color: ${(props) => props.color || props.theme.colors.primary};
  font-size: 8rem;
  border: 3px solid ${(props) => props.theme.borders.primary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.35s;

  &.hoverable {
    cursor: url("https://img.icons8.com/material-sharp/24/fa314a/pencil--v2.png")
        12 12,
      pointer;
  }

  &.hoverable:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.marked {
    color: red;
  }
`;

export default Square;
