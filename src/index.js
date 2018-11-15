import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './script/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux-def/store/index';
import {BrowserRouter as Router} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <HttpsRedirect>
                <App/>
            </HttpsRedirect>
        </Provider>
    </Router>,
    document.getElementById('app'));
registerServiceWorker();
