import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";


import { reducer as cartReducer } from "./CartReducer/reducer";


const rootReducer = combineReducers({
    cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


// if (window.Cypress) {
//   window.store = store;
// }