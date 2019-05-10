import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';

import rootReducer from '../reducers/rootReducer';
import locales from '../localization/locales';

/**
 * Create store for application
 */
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(locales));
store.dispatch(setLocale(navigator.language));

export default store;