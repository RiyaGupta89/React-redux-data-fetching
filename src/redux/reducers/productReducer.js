import {SET_PRODUCTS} from "../constants/actionTypes"

const initialState = {
    products: [],
    loading: true
}

const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS: 
            return{
                ...state,
                products: action.payload,
                loading:false
            }
        default: 
            return state
    }
}

export default productReducer