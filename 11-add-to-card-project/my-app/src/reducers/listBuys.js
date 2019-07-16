import *as types from '../constants/ActionTypes';
import *as messages from '../constants/Message';

let data = JSON.parse(localStorage.getItem('listBuys'));
let inititalState = data ? data : [];



let myReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.ADD_TO_CARD:
            let newProduct = {
                product: action.product,
                quantity: action.quantity
            };
            if(checkId(state, newProduct) >= 0){
               alert(messages.MSG_CARD_IS_ADDED);
            }else{
                state.push(newProduct);
                localStorage.setItem('listBuys' ,JSON.stringify(state));
            }
            return [...state];

        case types.DELETE_CARD:
            console.log(action);
            let index =  checkId(state, action.card);
            state.splice(index, 1);
            localStorage.setItem('listBuys' ,JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

let checkId = (listBuys, card) =>{
    let index;
    for(let i = 0; i < listBuys.length; i++){
        if(listBuys[i].product.id === card.product.id){
            index = i;
            break;
        }
    }
    return index;
}

export default myReducer;





