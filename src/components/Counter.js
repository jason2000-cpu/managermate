'use client'

import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '@lib/slices/counterSlice';
import { increment, decrement, incrementByTwo } from '@/lib/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button className='border' onClick={() => dispatch(increment())}>Increment</button>
      <button className='border' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='border' onClick={() => dispatch(incrementByTwo(3))}>Increment By Two</button>
    </div>
  );
};

export default Counter;
