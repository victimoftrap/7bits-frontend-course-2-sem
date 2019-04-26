import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';

import Base from './layouts/base/Base';
import PlainLayout from "./layouts/plain/PlainLayout";

import * as URLS from "./pages/sitePageUrls";
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
                <Route path={URLS.SIGN_IN_PAGE} render={() => {
                    return (
                        <PlainLayout>
                            <Route exact path={URLS.SIGN_IN_PAGE} component={Login}/>
                        </PlainLayout>
                    )
                }}/>

                <Route path={URLS.MAIN_TODO_TASKS_PAGE} render={() => {
                    return (
                        <Base>
                            <Route exact path={URLS.MAIN_TODO_TASKS_PAGE} component={Todo}/>
                            <Route path={URLS.DONE_TASKS_PAGE} component={Done}/>
                        </Base>
                    )
                }}/>
            </Switch>
        </BrowserRouter>

    </Provider>,
    document.getElementById('root')
);
