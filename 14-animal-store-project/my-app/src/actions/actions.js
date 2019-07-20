import *as types from '../constants/ActionTypes';
import callApi from '../utils/callerApi';




export const onFetchProductsRequest = () =>{
    return (dispatch) =>{
        callApi('AnimalStore', 'GET', null)
        .then((res) =>{
            dispatch(fetchProducts(res.data));
        });
    }
}


export const fetchProducts = (products) =>{
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}