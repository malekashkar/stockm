import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: #16171b;
    color: #fff;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #16171b;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #282a33;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1e2027;
  }
`;

export const Error = styled.p`
  text-align: center;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default GlobalStyle;