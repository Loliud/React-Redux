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

export const onChangeStatus = (id) =>{
    return {
        type: types.ON_CHANGE_STATUS,
        id
    }
}

export const onRemoveBook = (id) =>{
    return{
        type: types.ON_REMOVE_BOOK,
        id
    }
}

export const onEditTask = (task) =>{
    return {
        type : types.ON_EDIT_TASK,
        task
    }
}

export const onClearContentTast = () =>{
    return {
        type: types.ON_CLEAR_TASK
    }
}