import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

body {
  font-family: 'Manrope', sans-serif;
  }

button {
  font-family: 'Manrope', sans-serif;
  cursor: pointer;
}
  
ul, 
ol {
    list-style: none;
  }

img {
    display: block;
    max-width: 100%;
    height: auto;
  }

a {
    text-decoration: none;
    color: inherit;
  }  
`;
