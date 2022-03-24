import { ActionTypes } from "../actions/actions-types"



type Action = {
    type : string,
    payload : StateProduct | StateProduct['product'][]
}

export type StateProduct = {
    product : {
        id : number,
        title : string,
        category : string,
        price : number,
        description : string,
        image : string
    }
    
}

export type StateProducts = {
    products : StateProduct['product'][]
}

const initialProductsState : StateProducts ={
    products : []
}

const initialProductState = {
    product : {}
} as StateProduct

export const productReducer = (state = initialProductsState, action : Action )=>{

    
    switch(action.type){

        case ActionTypes.SET_PRODUCTS : return{
            ...state,
            products : action.payload
        }

        default : return state;
    }

}

export const selectedProductReducer = (state = initialProductState, action : Action )=>{

    
    switch(action.type){

        case ActionTypes.SELECTED_PRODUCT : return{
            ...state,
            product : action.payload
        }

        default : return state;
    }

}
