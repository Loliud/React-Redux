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
        case types.ON_CHANGE_STATUS:
            let index;
            for(let i = 0; i < state.length; i++){
                if(state[i].id === action.id){
                    index = i;
                    break;
                }
            }
            let cloneBook = {...state[index]};
            cloneBook.status = cloneBook.status === 'Hot' ? 'Medium' : 'Hot';
            state[index] = cloneBook;
            console.log(state);
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];
            
        default:
            return state;
    }
}
export default myReducer;