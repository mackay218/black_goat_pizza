import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultObject = {
    customer: {
        name: '',
        street_address: '',
        city: '',
        zip: ''
    },
    pizzas: [],
    order_total: 0,
    type: ''
}

const cart = (state = defaultObject, action) => {
    if (action.type === 'ADD_PIZZA') {
        const newInfo = action.payload;
        return {...state, pizzas: newInfo.pizzas, order_total: newInfo.order_total}
    } else if (action.type === 'REMOVE_PIZZA') {
        

    } else if (action.type === 'ADD_CUSTOMER') {
        // CustomerPage logic here


    } else if (action.type === 'EMPTY_CART') {
        // CheckoutPage logic here


    }
    return state;
}

const storeInstance = createStore(
    combineReducers({cart}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
