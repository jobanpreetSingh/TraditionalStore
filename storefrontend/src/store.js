/* eslint-disable import/no-anonymous-default-export */
import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import rootreducer from './Reducer/index'

export const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)

export default { store, persistor };