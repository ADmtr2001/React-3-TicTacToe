import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Title } from "../components/";

function Home() {
  return (
    <Wrapper>
      <Title>Tic-Tac-Toe</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header``;

export default Home;
