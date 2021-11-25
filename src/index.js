import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}

body {
  background: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height:100vh;
  cursor: url("https://img.icons8.com/material-sharp/24/ffffff/pencil--v2.png") 12 12, auto;
}

button {
  color: inherit;
}

a {
  text-decoration: none;;
  color: inherit;
  cursor: url('https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-cursor-selection-cursors-those-icons-fill-those-icons.png'), auto;
}

li,
ul {
  list-style: none;
}
`;

const theme = {
  colors: {
    primary: "rgb(242, 242, 242)",
  },
  bgColors: {
    primary: "transparent",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
