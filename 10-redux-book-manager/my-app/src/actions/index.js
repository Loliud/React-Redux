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

export const onToggleForm = () =>{
    return {
        type: types.ON_TOGGLE_FORM
    }
}

export const onExitForm = () =>{
    return {
        type: types.ON_EXIT_FORM
    }
}

export const onOpenForm = () =>{
    return {
        type: types.OPEN_FORM
    }
}