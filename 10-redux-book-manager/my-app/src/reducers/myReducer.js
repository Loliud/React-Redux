import tasks from './tasks';
import isFormDisplay from './isFormDisplay';
import taskEdit from './taskEditting';
import itemSearch from './onSearchItem';
import filterItem from './onFilterItem';
import {combineReducers} from 'redux';



let myReducer = combineReducers({
    tasks,
    isFormDisplay,
    taskEdit,
    itemSearch,
    filterItem

});

export default myReducer;