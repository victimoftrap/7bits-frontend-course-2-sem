import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';

import Base from './layouts/base/Base';
import Todo from './pages/todo/Todo';
import Done from './pages/done/Done';

import store from './store/store';

import './index.css';

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
