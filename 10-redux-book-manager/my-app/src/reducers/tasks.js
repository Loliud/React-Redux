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
            let lists = JSON.parse(localStorage.getItem('books'));
            var index = findIndex(lists, action.id)
            let cloneBook = {...lists[index]};
            cloneBook.status = cloneBook.status === 'Hot' ? 'Medium' : 'Hot';
            state[index] = cloneBook;
            lists[index] = cloneBook;
            localStorage.setItem("books", JSON.stringify(lists));
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
        case types.ON_FILTER_ITEM:
            let {filterName, filterStatus} = action;
            let tasks = JSON.parse(localStorage.getItem('books'));
        
                tasks =  tasks.filter((item) =>{
                    return item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
                });
                if(filterStatus !== ''){
                    tasks = tasks.filter((item) =>{
                        return item.status === filterStatus;
                    });
                }
              
          
            return tasks;
        default:
            return state;
    }
}
export default myReducer;