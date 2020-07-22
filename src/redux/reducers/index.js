import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import bookReducer from './bookReducer';
export const rootreducer=combineReducers({cart:cartReducer,books:bookReducer})