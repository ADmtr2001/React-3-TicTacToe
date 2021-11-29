import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Modes(props) {
  return (
    <Wrapper {...props}>
      <Link to='/game' className='mode'>
        <h2 className='title'>Play</h2>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || props.theme.colors.primary};

  .mode {
    padding: 1rem 2rem;
    background: ${(props) => props.bgColor || props.theme.bgColors.primary};
    width: 400px;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid
      ${(props) => props.borderColor || props.theme.borders.primary};
    border-radius: 10px;
    position: relative;

    ::before {
      content: "";
      position: absolute;
      background: ${(props) =>
        props.borderColor || props.theme.borders.primary};
      height: 4rem;
      width: 3px;
      left: 3rem;
      top: -67px;
    }

    ::after {
      content: "";
      position: absolute;
      background: ${(props) =>
        props.borderColor || props.theme.borders.primary};
      height: 4rem;
      width: 3px;
      right: 3rem;
      top: -67px;
    }
  }

  .title {
    font-size: 2.5rem;
  }
`;

export default Modes;
