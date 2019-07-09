import *as types from '../constants/ActionTypes.js';
export const listAll = () =>{
    return {
        type: types.LIST_ALL
    }
}

export const addNewItem = (task) =>{
    return{
        type: types.ADD_NEW_TASK,
        task
    }
}