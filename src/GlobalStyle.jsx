import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root, .App {
  height: 100%;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }


  .center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (max-width: 1120px) {
    html {
      font-size: 85%;
    }
  }
`;

export default GlobalStyle;
