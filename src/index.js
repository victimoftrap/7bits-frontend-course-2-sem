import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import './index.css';

import Base from './layouts/base/Base';
import Todo from "./pages/todo/Todo";
import Done from './pages/done/Done';

import './index.css';

/**
 * Entry point for project
 */
ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Route exact path='/' component={Todo}/>
            <Route path='/done' component={Done}/>
        </Base>
    </BrowserRouter>,
    document.getElementById('root')
);
