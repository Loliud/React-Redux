import *as types from '../constants/ActionTypes';
let data = JSON.parse(localStorage.getItem('books'));

let initialState = data ? data : [];
  

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
        case types.LIST_ALL: return state;
        
        case types.ADD_NEW_TASK:
            let newItem = action.task;
            state.push(newItem);
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];
            
        default:
            return state;
    }
}
export default myReducer;