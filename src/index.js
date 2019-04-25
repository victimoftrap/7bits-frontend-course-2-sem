import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';

import Base from './layouts/base/Base';
import Todo from './pages/todo/Todo';
import Done from './pages/done/Done';
import Login from './pages/login/Login';

import store from './store/store';
import './index.css';

/**
 * Entry point for project
 */
ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <Switch>
                <Route path="/login" render={() => {
                    return (
                        // layout
                        <Route exact path="/login" component={Login}/>
                        // layout
                    )
                }}/>

                <Route path={"/"} render={() => {
                    return (
                        <Base>
                            <Route exact path='/' component={Todo}/>
                            <Route path='/done' component={Done}/>
                        </Base>
                    )
                }}/>
            </Switch>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);
