import *as types from '../constants/ActionTypes';
let data = JSON.parse(localStorage.getItem('books'));

let initialState = data ? data : [];
  
let findIndex = function(list, id){
    let index;
    for(let i = 0; i < list.length; i++){
        if(list[i].id === id){
            index = i;
            return index;
        }
    }

}

let myReducer = (state = initialState, action) =>{
    switch(action.type ){
        case types.LIST_ALL: return state;
        // them sach moi
        case types.ADD_NEW_TASK:
            let newItem = action.task;
            state.push(newItem);
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];
        // thay doi status
        case types.ON_CHANGE_STATUS:
            var index = findIndex(state, action.id)
            let cloneBook = {...state[index]};
            cloneBook.status = cloneBook.status === 'Hot' ? 'Medium' : 'Hot';
            state[index] = cloneBook;
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];
        // xoa 1 book trong danh sach
        case types.ON_REMOVE_BOOK:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];
            
        case types.ON_UPDATE_TASK:
            index = findIndex(state, action.task.id);
            state[index] = action.task;
            localStorage.setItem("books", JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
}
export default myReducer;