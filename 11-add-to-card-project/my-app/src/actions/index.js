import *as types from '../constants/ActionTypes';


 export const addToCard = (product) =>{
    return{
        type: types.ADD_TO_CARD,
        product,
        quantity: 1
    }
};


export const showListBuys = () =>{
    return{
        type: types.SHOW_LIST_BUYS,
        
    }
}

export const showProducts = ()=>{
    return {
        type: types.SHOW_PRODUCTS
    };
}
export const onDeleteProduct = (card) =>{
    return {
        type: types.DELETE_CARD,
        card
    }
}