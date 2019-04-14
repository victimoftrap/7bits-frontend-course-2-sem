import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

import Base from './layouts/base/Base';
import Todo from "./pages/todo/Todo";
import Done from './pages/done/Done';

import rootReducer from './reducers/rootReducer';

/**
 * Create store for application
 */
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

/**
 * Entry point for project
 */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path='/' component={Todo}/>
                <Route path='/done' component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
