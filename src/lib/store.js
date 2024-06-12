import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'

export const  makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

