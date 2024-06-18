'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react';
import useTaskHook from '@/hooks/useTasksHook';
import { ToastContainer, toast } from "react-toastify";
import useUserHook from '@/hooks/useUserHook';

function TaskViewModal({ isTaskViewModalOpen, handleCloseModal, task }){
    if (!isTaskViewModalOpen) return null;

    const { deleteTask, updateTask } = useTaskHook();

    const { users } = useUserHook();
    const employees = users.filter(user => user.userType === 'user')
    const user = JSON.parse(localStorage.getItem("activeUser"));

    const [taskInView, setTaskInView] = useState({
        title: task.title,
        description: task.description,
        start: task.start,
        end: task.end,
        assigned_to: task.assigned_to,
        assigned_by: `${user.FName} ${user.SName}`
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskInView({
          ...taskInView,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(taskInView);
        const res = await updateTask(task.id, taskInView);
        console.log("UPDATING TASK RESPONSE:::", res);
        if (res.status === "Success"){
          toast.success("Task Updated Successfully!")
        } else {
          toast.error("Error While Updating Task")
        }

        handleCloseModal();
      };

      const handleTaskDelete = async () =>{
        const resp = await deleteTask(task.id);
        console.log("RESPONSE ON DELETE:::", resp);
        handleCloseModal()
      }
    return (
        <Dialog open={isTaskViewModalOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-xl  ">
              <Dialog.Title className="text-lg font-bold">
                <div className='flex justify-between items-center'>
                    <span>Task View</span>
                    <span
                        className="cursor-pointer"
                        onClick={handleCloseModal}
                    >
                         X
                    </span>
                </div>
              </Dialog.Title>
              <div className="mt-4">
                <div className="mb-4 space-y-8">
                    <div className='w-full space-y-4'>
                            <div className='w-full'>
                                <label htmlFor='title'  className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                className="border p-2 rounded w-full"
                                type="test"
                                placeholder="Title"
                                name='title'
                                value={taskInView.title}
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <lable htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</lable>
                                <textarea
                                className="border p-2 rounded w-full h-[10rem] outline-none"
                                type="date"
                                name='description'
                                placeholder="Write a Small Description...."
                                value={taskInView.description}
                                onChange={handleChange}
                                ></textarea>
                            </div>
                            {task.assigned_to ? null : (
                              <div className='my-6 space-x-4'>
                                <span className='font-semibold'>Assign To </span>
                                <select 
                                  className='border w-40 px-1 h-7 rounded-md'
                                  onChange={handleChange}
                                  name='assigned_to'
                                  value={taskInView.assigned_to}
                                >
                                  {employees.map((employee, key)=>{
                                    return (
                                      <option key={key} value={employee.id}>{`${employee.FName} ${employee.SName}`}</option>
                                    )
                                  })}
                                </select>
                              </div>
                            )}
                    </div>
                    <div className='flex mt-5 justify-between'>
                        <div>
                            <label htmlFor='start'>Start Date</label>
                            <input
                                className="border p-2 rounded w-full"
                                type="date"
                                name='start'
                                placeholder="Start Date"
                                value={taskInView.start}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='end'>Due Date</label>
                            <input
                                className="border p-2 rounded w-full "
                                type="date"
                                name='end'
                                placeholder="Due Date"
                                value={taskInView.end}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <button 
                        type="submit" 
                        className="bg-[#083778] text-white py-2 px-4 rounded hover:bg-[#083778e1] w-full"
                        onClick={handleSubmit}
                        >
                    Update Task
                    </button>
                    <button 
                        type="submit" 
                        className="bg-[#780808] text-white py-2 px-4 rounded hover:bg-[#780808c7] w-full"
                        onClick={handleTaskDelete}
                        >
                    Delete Task
                    </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      
    )
}

export default TaskViewModal;