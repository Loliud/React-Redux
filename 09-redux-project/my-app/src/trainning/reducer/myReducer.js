import status from './status';
import pet from './pet';
import {combineReducers} from 'redux';

let myReducer = combineReducers({
  status:  status,
  pet:   pet
});

export default myReducer;