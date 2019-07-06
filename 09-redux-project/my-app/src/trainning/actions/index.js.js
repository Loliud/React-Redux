import * as types from  '../constants/ActionTypes';
export const status = () =>{
    return {
        type: types.CHANGE_STATUS
    };
}
export const pet = (pet) =>{
    return {
        type: types.CHANGE_PET,
        pet
    }
}