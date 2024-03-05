import ReactDOM from "react-dom/client";
import App from "./App.jsx";


import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

#root {
  
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

	max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 32px;
}

ul,
li {
  list-style: none;
}

button {
	background-color: #42B4CA;
	border: 1px #BFDE42 solid;
	color: #0B1215;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
