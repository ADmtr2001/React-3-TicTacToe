import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import backgroundImg from "./assets/blackboard.jpg";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}

body {
  background: url('https://images.unsplash.com/photo-1616441064539-b4fceed1f01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height:100vh;
}

button {
  color: inherit;
}

a {
  text-decoration: none;;
  color: inherit;
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
