import *as types from '../constants/ActionTypes';


let initialState = null;
  

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
        case types.ON_SEARCH_ITEM: 
            state = action.value;
            return state;
            
        default:
            return state;
    }
}
export default myReducer;