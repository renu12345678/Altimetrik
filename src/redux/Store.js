import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {rootreducer} from './reducers';
import {cartReducer} from './reducers/cartReducer'
export const store=createStore(cartReducer,{cart:{},total:0},applyMiddleware(thunk));