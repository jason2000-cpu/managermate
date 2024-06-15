'use client'

import React, { useState } from 'react';
import TaskViewModal from '../modals/TaskViewModal';

const TasksTable = ({ data, onActionClick }) => {
    const [isTaskViewModalOpen, setIsTaskViewModalOpen] = useState(false);
    const [taskInView, setTaskInView] = useState({})

    const handleModalOpen = (item)=>{
        setTaskInView(item);
        setIsTaskViewModalOpen(true);
    }

    const handleCloseModal = ()=>{
        setIsTaskViewModalOpen(false)
    }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b">Title</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Description</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Assigned To</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Status</th>
            <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{item.title}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              <td className="py-2 px-4 border-b">{item.assigned_to}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
              <td className="py-2 px-4 border-b">
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
