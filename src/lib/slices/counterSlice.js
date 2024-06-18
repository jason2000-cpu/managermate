import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByTwo: (state, val) =>{
      console.log("Value to Add::",val.payload)
      state.value = val.payload
    }
  },
});

export const { increment, decrement, incrementByTwo } = counterSlice.actions;
export default counterSlice.reducer;
