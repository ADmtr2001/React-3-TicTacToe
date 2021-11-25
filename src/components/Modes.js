import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Modes(props) {
  return (
    <Wrapper {...props}>
      <Link to='/game' className='mode'>
        <h2 className='title'>2 Player</h2>
      </Link>
      <Link to='/game' className='mode'>
        <h2 className='title'>AI</h2>
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
    border: 3px solid ${(props) => props.borderColor || "black"};
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    ::before {
      content: "";
      position: absolute;
      background: ${(props) => props.borderColor || "black"};
      height: 4rem;
      width: 3px;
      left: 3rem;
      top: -67px;
    }

    ::after {
      content: "";
      position: absolute;
      background: ${(props) => props.borderColor || "black"};
      height: 4rem;
      width: 3px;
      right: 3rem;
      top: -67px;
    }
  }

  .title {
    font-size: 3rem;
  }
`;

export default Modes;
