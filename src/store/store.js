import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

/**
 * Create store for application
 */
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;