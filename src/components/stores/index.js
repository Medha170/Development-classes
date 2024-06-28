import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;