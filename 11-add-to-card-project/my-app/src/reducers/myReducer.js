import {combineReducers} from 'redux';
import products from './products';

console.log(products);
let myReducer = combineReducers({
    products
});

export default myReducer;