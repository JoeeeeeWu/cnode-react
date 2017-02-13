import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const newCreateSore = applyMiddleware(thunk)(createStore);

let store = newCreateSore(rootReducer);

export default store;