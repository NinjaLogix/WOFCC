import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './script/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux-def/store/index';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('wofcc'));
registerServiceWorker();
