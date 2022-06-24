import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./Reducers";
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(rootReducer, {}, applyMiddleware(
   promise,
   createLogger(),
   thunk));


export default store;