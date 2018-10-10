import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import setAuthorizationToken from './utils/setAuthorizationToken';


const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(reduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f =>f)
    );

setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(
                <Provider store={store}>

                        <App />

                </Provider>, document.getElementById('root'));

