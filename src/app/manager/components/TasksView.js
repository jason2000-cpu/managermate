'use client'

import React, { useState } from 'react'
import TasksTable from './tabels/TasksTable';
import { todos } from '../../../../data';

const filterOptions = ['all', 'inprogress', 'complete'];

function TasksView(){
    const [filter, setFilter] = useState('all');
    const handleActionClick = (task) => {
        console.log('Action clicked for task:', task);
        // Implement further action logic here
      };

    const handleChange = (e) =>{
        setFilter(e.target.value)
    }
    const filteredTodos = filter !== 'all' ? todos.filter(todo =>  todo.status === filter) : todos 
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Tasks</h1>
          <div className='my-6 space-x-4'>
            <span className='font-semibold'>Filter</span>
            <select value={filter} className='border w-32 px-1 border-black h-7 rounded-md' onChange={handleChange}>
                { filterOptions.map((option) =>{
                    return (
                        <option value={option}>{option}</option>
                    )
                })}
            </select>
          </div>
          <TasksTable data={filteredTodos} onActionClick={handleActionClick} />
        </div>
      );
};


export default TasksView;