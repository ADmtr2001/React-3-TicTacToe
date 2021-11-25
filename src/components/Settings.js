import React from "react";
import { MdSettings } from "react-icons/md";
import styled from "styled-components";

function Settings(props) {
  return (
    <SettingsWrapper {...props}>
      <MdSettings />
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  /* cursor: url("https://img.icons8.com/ios-glyphs/30/fa314a/cursor--v1.png") 12
      13,
    auto; */
  cursor: url("https://img.icons8.com/material-sharp/24/fa314a/pencil--v2.png")
      12 12,
    pointer;
  position: absolute;
  top: 63%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 36px;
`;

export default Settings;
