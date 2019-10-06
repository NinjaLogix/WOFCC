import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './script/registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
        <HttpsRedirect>
            <App/>
        </HttpsRedirect>,
    document.getElementById('app'));
registerServiceWorker();
