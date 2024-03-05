
import styled, { createGlobalStyle } from "styled-components";

import { Header } from "./components/Header";
import { Main } from "./components/Main";



const GlobalStyle = createGlobalStyle`

#root {
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
  font-size: 14px;
}

ul,
li {
  list-style: none;
}
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header /> 
      <Main />
    </div>
  );
};

export default App;
