import tasks from './tasks';
import isFormDisplay from './isFormDisplay';
import taskEdit from './taskEditting';
import {combineReducers} from 'redux';


let myReducer = combineReducers({
    tasks,
    isFormDisplay,
    taskEdit

});

export default myReducer;