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

export const deleteProductRequest = (id) =>{
    return (dispatch) =>{
        callApi(`AnimalStore/${id}`, 'DELETE', null)
        .then((res) =>{
            dispatch(deleteProduct(id));
        });
    }
}

export const deleteProduct = (id) =>{
    return{
        type: types.DELETE_PRODUCT,
        id
    }
}

export const updateProductRequest = (id, productIsUpdated, callback) =>{
    return (dispatch) =>{
        callApi(`AnimalStore/${id}`, 'PUT', productIsUpdated)
        .then((res)=>{
            dispatch(updateProduct(id, productIsUpdated));
            callback();
        });
    }
}

export const updateProduct = (id, productIsUpdated) =>{
    return {
        type: types.UPDATE_PRODUCT,
        id,
        productIsUpdated
    }
}

export const addProductRequest = (product, callBack) =>{
    return (dispatch) =>{
        callApi('AnimalStore', 'POST', product)
        .then((res) =>{
            dispatch(addProduct(product));
            callBack();
        });
    }
}

export const addProduct = (product) =>{
    return {
        type: types.ADD_PRODUCTS,
        product
    }
}