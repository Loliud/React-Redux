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
            if (checkId(state, newProduct) >= 0) {
                alert(messages.MSG_CARD_IS_ADDED);
            } else {
                state.push(newProduct);
                localStorage.setItem('listBuys', JSON.stringify(state));
            }
            return [...state];
        // xoa 1 san pham trong gio hang
        case types.DELETE_CARD:
            var index = checkId(state, action.card);
            state.splice(index, 1);
            localStorage.setItem('listBuys', JSON.stringify(state));
            return [...state];
        // tang so luong cua san pham trong gio hang
        case types.ON_UP_PRODUCT:
            var index = checkId(state, action.card);
            if (state[index].product.inventory > state[index].quantity) {
                state[index].quantity++;
                localStorage.setItem('listBuys', JSON.stringify(state));
            } else {
                alert(messages.MSG_INVENTORY_IS_EMPTY);
            }
            return [...state];
        // giam so luong san pham trong gio hang
        case types.ON_DOWN_PRODUCT:
            var index = checkId(state, action.card);
            if (state[index].quantity > 1) {
                state[index].quantity--;
                localStorage.setItem('listBuys', JSON.stringify(state));
            } else {
                alert('Số lượng sản phẩm phải từ 1!');
            }
            return [...state];
        // submit mua hang va remove state
        case types.ON_PURCHASE:
            alert(messages.MSG_ADD_TO_CARD_SUCCESS);
            state = [];
            localStorage.setItem('listBuys', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

// tim id cua san pham

let checkId = (listBuys, card) => {
    let index;
    for (let i = 0; i < listBuys.length; i++) {
        if (listBuys[i].product.id === card.product.id) {
            index = i;
            break;
        }
    }
    return index;
}

export default myReducer;





