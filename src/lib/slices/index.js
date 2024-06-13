// slices/index.js
import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

export default rootReducer;
