import {combineReducers} from 'redux';
import products from './products';
import listBuys from './listBuys';

let myReducer = combineReducers({
    products,
    listBuys
});

export default myReducer;