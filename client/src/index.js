import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';



const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(reduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f =>f)
    );

ReactDOM.render(
                <Provider store={store}>

                        <App />

                </Provider>, document.getElementById('root'));

