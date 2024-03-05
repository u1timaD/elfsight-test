import styled, { createGlobalStyle } from "styled-components";

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
  font-size: 50px;
}
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      elfsight-test
    </div>
  );
};

export default App;
