import { configureStore, combineSlices } from '@reduxjs/toolkit'
import { userSlice } from './features/user/userSlice'


const saveState = (state) => {
    try {
        const serializedUser = JSON.stringify(state.user);
        localStorage.setItem('activeUser', serializedUser)
    } catch (err){

    }
}

const rootReducer = combineSlices(userSlice)

export const  makeStore = () => {
    const store =  configureStore({
        reducer: rootReducer
    });

    store.subscribe(()=> {
        saveState(store.getState())
    })

    return store;
}

