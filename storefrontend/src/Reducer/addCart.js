import {
    addCartDetailsConstant,
    DeleteConstant,
    CustomerShippingDetailsConstant,
    USER,
    PLACED_PRODUCT_DETAILS
} from '../constants'

const productDetailsIntialState = { data: [] }

export const addSelectedDetailsProductsReducer = (state = productDetailsIntialState, action) => {
    //console.log("id find.....", state.data)

    switch (action.type) {
        case DeleteConstant: state.data && state.data.splice(action.payload.data, 1)

            return {
                ...state,
                data: [
                    ...state.data

                ]

            }

        case addCartDetailsConstant: return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }

        default: return state;
    }

}

const customerShippingDetailsIntialState = {
    data: []
}
export const customerShippingDetailsReducer = (state = customerShippingDetailsIntialState, action) => {

    switch (action.type) {
        case CustomerShippingDetailsConstant:

            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        default:
            return state
    }

}

const userLoginIntialState = false;
export const userLoginReducer = (state = userLoginIntialState, action) => {
    if (action.type === USER) {
        return state = action.payload
    }
    return state;
}

const placedOrderDetailsIntialState = {
    data: []
}
export const placedOrderDetailsReducer = (state = placedOrderDetailsIntialState, action) => {
    if (action.type === PLACED_PRODUCT_DETAILS) {
        return {
            ...state,
            data: [
                ...state.data,
                action.payload
            ]
        }
    }
    return state;
}
