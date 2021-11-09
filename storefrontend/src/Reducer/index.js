import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {
    addSelectedDetailsProductsReducer,
    customerShippingDetailsReducer,
    userLoginReducer,
    placedOrderDetailsReducer
} from './addCart'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['addSelectedDetailsProductsReducer', 'userLoginReducer', 'placedOrderDetailsReducer']
}

const rootreducer = combineReducers({

    addSelectedDetailsProductsReducer,
    customerShippingDetailsReducer,
    userLoginReducer,
    placedOrderDetailsReducer

})
export default persistReducer(persistConfig, rootreducer)