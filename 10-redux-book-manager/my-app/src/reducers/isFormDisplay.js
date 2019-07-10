import *as types from '../constants/ActionTypes';

let initialState = false;
  
let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.ON_TOGGLE_FORM:
          state = !state;
          return state;
        case types.OPEN_FORM:
            state = true;
            return state;
        case types.ON_EXIT_FORM:
            state = false;
            return state;
        default:
            return state;
    }
}
export default myReducer;