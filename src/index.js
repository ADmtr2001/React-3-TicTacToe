import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GameProvider } from "./contexts/game_context";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;

   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
  /* cursor: url('https://img.icons8.com/ios-glyphs/30/fa314a/cursor--v1.png') 12 13, auto; */
  cursor: url("https://img.icons8.com/material-sharp/24/fa314a/pencil--v2.png")
      12 12,
    pointer;
}

li,
ul {
  list-style: none;
}
`;

const theme = {
  colors: {
    primary: "rgba(233, 233, 233)",
  },
  bgColors: {
    primary: "transparent",
  },
  borders: {
    primary: "rgba(233, 233, 233)",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameProvider>
        <Global />
        <App />
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
