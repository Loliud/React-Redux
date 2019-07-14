import tasks from './tasks';
import isFormDisplay from './isFormDisplay';
import taskEdit from './taskEditting';
import itemSearch from './onSearchItem';
import filterItem from './onFilterItem';
import selectSort from './onSort';
import {combineReducers} from 'redux';

console.log(tasks);

let myReducer = combineReducers({
    tasks,
    isFormDisplay,
    taskEdit,
    itemSearch,
    filterItem,
    selectSort

});

export default myReducer;