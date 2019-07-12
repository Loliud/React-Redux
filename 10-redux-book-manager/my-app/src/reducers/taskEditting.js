import *as types from '../constants/ActionTypes';


let initialState = null
  

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
     
        case types.ON_EDIT_TASK:
            state = {...action.task};        
            return state;
        case types.ON_CLEAR_TASK:
            state = null;
            return state;
        default:
            return state;
    }
}
export default myReducer;