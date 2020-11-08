import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import pizzasReducer from "./pizzasReducer";
import thunk from "redux-thunk"
import filtersReducer from './filtersReducer';
import cartReducer from "./cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart: cartReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.store = store

export default store