import *as types from '../constants/ActionTypes';
import *as messages from '../constants/Message';

let data = JSON.parse(localStorage.getItem('listBuys'));
let inititalState = data ? data : [];

let checkNewProduct = (listBuys, newProduct) =>{
    for(let i = 0; i < listBuys.length; i++){
        if(listBuys[i].product.id === newProduct.product.id){
            return true;
        }
    }
}


let myReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.ADD_TO_CARD:
            let newProduct = {
                product: action.product,
                quantity: action.quantity
            };
            if(checkNewProduct(state, newProduct) === true){
               alert(messages.MSG_CARD_IS_ADDED);
            }else{
                state.push(newProduct);
                localStorage.setItem('listBuys' ,JSON.stringify(state));
            }
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;





