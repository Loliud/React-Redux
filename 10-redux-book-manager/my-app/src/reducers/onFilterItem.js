import *as types from '../constants/ActionTypes';

let initialState = {

};
  

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
        case types.ON_FILTER_ITEM: 
           state ={
               filterName: action.filterName,
               filterStatus: action.filterStatus
           }

            return state;
            
        default:
            return state;
    }
}
export default myReducer;