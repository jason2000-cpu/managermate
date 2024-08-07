'use client'

import React, { useState } from 'react';
import TaskViewModal from '../modals/TaskViewModal';
import useUserHook from '@/hooks/useUserHook';

const TasksTable = ({ data }) => {
  const { getUser } = useUserHook();

  const [isTaskViewModalOpen, setIsTaskViewModalOpen] = useState(false);
  const [taskInView, setTaskInView] = useState({})

  const handleModalOpen = (item)=>{
      setTaskInView(item);
      setIsTaskViewModalOpen(true);
  }

  const handleCloseModal = ()=>{
      setIsTaskViewModalOpen(false)
  }

  function daysRemaining(dueDate) {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const timeDifference = dueDateObj - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining >= 1 ? daysRemaining : 0;
  }

  function getUserName(id){
    const resp = getUser(id);
    const user = resp.message
    return `${user.FName} ${user.SName}`
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full dark:bg-gray-500">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Title</th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Due</th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Assigned To</th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Status</th>
            <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.title}</td>
              <td className="py-2 px-4 border-b dark:border-b-gray-600">{`${daysRemaining(item.end)} days`}</td>
              <td className="py-2 px-4 border-b dark:border-b-gray-600">
                  {item.assigned_to ?  getUserName(item.assigned_to)  : <span className='bg-[#782c08] text-white rounded-full p-2'>Not Assigned</span>  }
              </td>
              <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.status}</td>
              <td className="py-2 px-4 border-b dark:border-b-gray-600">
                <button 
                  className="bg-[#083778] text-white py-1 px-3 rounded hover:bg-blue-600"
                  onClick={() => handleModalOpen(item)}
                >
                  Action
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TaskViewModal isTaskViewModalOpen={isTaskViewModalOpen} handleCloseModal={handleCloseModal}  task={taskInView}/>
    </div>
  );
};

export default TasksTable;
