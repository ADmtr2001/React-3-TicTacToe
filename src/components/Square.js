import React from "react";
import styled from "styled-components";

function Square(props) {
  return <SquareWrapper {...props}></SquareWrapper>;
}

const SquareWrapper = styled.div`
  border: 3px solid white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.35s;
  cursor: url("https://img.icons8.com/material-sharp/24/fa314a/pencil--v2.png")
      12 12,
    pointer;
  .icon {
    width: 40px;
    height: 40px;
    color: rgb(255, 76, 41);
    opacity: 0;
    transition: opacity 0.35s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    .icon {
      opacity: 1;
    }
  }
`;

export default Square;
