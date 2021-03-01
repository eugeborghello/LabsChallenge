import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import cartReducer from './cartDucks';


const rootReducer = combineReducers({
    cart: cartReducer
}) 

const cartIemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartIems: cartIemsFromLocalStorage}
}

const composeEnhancers = composeWithDevTools(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ );

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}
	