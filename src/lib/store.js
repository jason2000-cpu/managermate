import { configureStore, combineSlices } from '@reduxjs/toolkit'
import { userSlice } from './features/user/userSlice'

const rootReducer = combineSlices(userSlice)
export const  makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

