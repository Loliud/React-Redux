import *as types from '../constants/ActionTypes';


let data = JSON.parse(localStorage.getItem('listBuys'));
let inititalState = data ? data : [];



let myReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.ADD_TO_CARD:
            let newProduct = {
                product: action.product,
                quantity: action.quantity
            };
            state.push(newProduct);
            localStorage.setItem('listBuys' ,JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;



