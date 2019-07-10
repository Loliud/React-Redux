import tasks from './tasks';
import isFormDisplay from './isFormDisplay';
import {combineReducers} from 'redux';

let myReducer = combineReducers({
    tasks,
    isFormDisplay
});

export default myReducer;