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
  cursor: url("https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-cursor-selection-cursors-those-icons-fill-those-icons.png"),
    auto;
  position: absolute;
  top: 63%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 36px;
`;

export default Settings;
