import React from "react";
import styled from "styled-components";

const Blur = () => {
  return <BlurWrapper></BlurWrapper>;
};

const BlurWrapper = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6px);
  z-index: 5;
  bottom: 0;
  left: 0;
`;

export default Blur;
