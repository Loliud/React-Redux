import {combineReducers} from 'redux';
import products from './products';


let myReducer = combineReducers({
    products
});

export default myReducer;