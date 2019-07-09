import tasks from './tasks';
import {combineReducers} from 'redux';

let myReducer = combineReducers({
    tasks
});

export default myReducer;