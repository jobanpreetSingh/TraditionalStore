
export const addCartDetailsAction = (data, type) => {
    // console.log("inside action", data, type);

    return {

        type: type,
        payload: {
            data
        }

    }
}

export const customerShippingDetailsAction = (data, type) => {
    return {
        type: type,
        payload: {
            data
        }
    }
}

export const userLoginAction = (type, data) => {
    return {
        type: type,
        payload: {
            data
        }
    }
}

export const placedOrderDetailsAction = (type, data) => {
    return {
        type: type,
        payload: {
            data
        }
    }
}
