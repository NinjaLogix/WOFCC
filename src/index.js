import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './script/registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux-def/store/index';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('wofcc'));
registerServiceWorker();
