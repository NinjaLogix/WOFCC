import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import { createGlobalStyle } from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;

    flex-direction: column;
    width: 100%;
    height: 100%;

    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: stretch;
    align-items: stretch;
    background-color: #eeeeee;
  }

  h1 {
    font-family: 'Permanent Marker', cursive;
  }

  h2 {
    font-family: 'Courgette', cursive;
  }

  h3 {
    font-family: 'Teko', sans-serif;
  }

  p {
    font-family: 'Nunito', sans-serif;
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(15, 86, 80)',
    },
    secondary: {
      main: 'rgb(246, 217, 176)',
    },
    text: {
      primary: 'rgb(51, 51, 51)',
      secondary: 'rgb(216, 216, 216)',
    },
  },
  typography: {
    h1: {
      fontFamily: `'Permanent Marker', cursive`,
    },
    h2: {
      fontFamily: `'Teko', sans-serif`,
      fontSize: `5rem`,
    },
    h3: {
      fontFamily: `'Teko', sans-serif`,
    },
    h4: {
      fontFamily: `'Roboto', sans-serif`,
    },
    body1: {
      fontFamily: `'Nunito', sans-serif`,
      fontSize: `1.4rem`,
    },
    body2: {
      fontFamily: `'Nunito', sans-serif`,
    },
  },
});

ReactDOM.render(
  <Router>
    <HttpsRedirect>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HttpsRedirect>
  </Router>,
  document.getElementById('app'),
);

registerServiceWorker();
