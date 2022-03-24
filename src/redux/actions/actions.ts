import { StateProduct } from "../reducers/productReducer"
import { ActionTypes } from "./actions-types"


export const setProducts = (products :  []) =>{

    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}


export const selectedProduct = (product : StateProduct) =>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeSelectedProduct = () =>{
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}