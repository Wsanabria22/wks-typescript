import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from "../reducer/index";
import { reducers } from '../reducers/index';

const store = createStore( reducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;
