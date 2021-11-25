import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title, Modes } from "../components/";

function Home() {
  return (
    <Fragment>
      <Title bgColor='rgba(8, 32, 50, 0.75)' color='rgb(255, 76, 41)'>
        Tic-Tac-Toe
      </Title>
      <Modes bgColor='rgba(8, 32, 50, 0.75)' color='rgb(255, 76, 41)' />
    </Fragment>
  );
}

export default Home;
