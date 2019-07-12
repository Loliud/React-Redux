import *as types from '../constants/ActionTypes';

let initialState = {};

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
        case types.ON_SORT_ITEM: 
            state = {
                sortBy: action.sortBy,
                sortValue: action.sortValue
            };           
            return state;
        default:
            return state;
    }
}
export default myReducer;