'use client'

import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const userSlice = createSlice({
    name: 'user',
    initialState: {


        
        value: null,
    },
    reducers: {
        loginDispatch: (state, val) =>{
            console.log("USER DATA IN REDUX::", val.payload)
            state.value = val.payload
            localStorage.setItem("activeUser", JSON.stringify(val.payload))
            console.log("VALUE AFTER SETTING:::", state.value)
        },

        logoutDispatch: (state) =>{
            state.value = null,
            localStorage.clear()
        }
    }

});

export const { loginDispatch, logoutDispatch } = userSlice.actions;
export default userSlice.reducer;