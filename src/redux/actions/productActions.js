import { SET_PRODUCTS, SELECTED_PRODUCT } from "../constants/actionTypes"

export const setproducts = (products) => { 
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}