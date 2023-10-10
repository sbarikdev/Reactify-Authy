// store.js

import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    },
    
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
