import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Modes } from "../components/";

function Home() {
  return (
    <Fragment>
      <Modes bgColor='rgba(8, 32, 50, 0.75)' />
    </Fragment>
  );
}

// color='rgb(255, 76, 41)'

export default Home;
