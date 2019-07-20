import *as types from '../constants/ActionTypes';
let initialState = [

];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            var index = findIndex(state, action.id) ;
            state.splice(index, 1);
            return [...state];

        case types.UPDATE_PRODUCT:
             index = findIndex(state, action.id);
            state[index] = action.productIsUpdated; 
            return [...state];
        default:
            return [...state];
    }
}

const findIndex = (products, id) =>{
    let result = -1;
    products.forEach((product, index)=>{
        if(product.id === id){
            result = index;
        }
    }); 
    return result;
}


export default myReducer;