import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import { createGlobalStyle } from 'styled-components';

//todo -> create global style from material-ui
const GlobalStyle = createGlobalStyle`
    html,body{
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

    h1{font-family: 'Permanent Marker', cursive;}
    h2{font-family: 'Courgette', cursive;}
    h3{font-family: 'Teko', sans-serif;}
    p{font-family: 'Nunito', sans-serif;}
`;

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('app'),
);
registerServiceWorker();
