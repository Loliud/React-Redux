import tasks from './tasks';
import isFormDisplay from './isFormDisplay';
import taskEdit from './taskEditting';
import itemSearch from './onSearchItem';
import {combineReducers} from 'redux';



let myReducer = combineReducers({
    tasks,
    isFormDisplay,
    taskEdit,
    itemSearch

});

export default myReducer;