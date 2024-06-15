'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react';

function DepartmentModal({ isOpen, handleCloseModal }){
    if (!isOpen) return null;

    const [newDepartment, setNewDepartment] = useState({
      name: '',
      description: '',
      start: '',
      end: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewDepartment({
        ...newDepartment,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(newDepartment)
      handleCloseModal();
    };
    return (
        <Dialog open={isOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-xl  ">
              <Dialog.Title className="text-lg font-bold">
                <div className='flex justify-between items-center'>
                    <span>New Department</span>
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
                                value={newDepartment.title}
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <lable htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</lable>
                                <textarea
                                className="border p-2 rounded w-full h-[10rem] outline-none"
                                type="date"
                                placeholder="Write a Small Description...."
                                value={newDepartment.description}
                                onChange={handleChange}
                                ></textarea>
                            </div>
                    </div>
                    <div className='flex mt-5 justify-between'>
                        <div>
                            <label htmlFor='start'>Start Date</label>
                            <input
                                className="border p-2 rounded w-full"
                                type="date"
                                placeholder="Start Date"
                                value={newDepartment.start}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor='end'>Due Date</label>
                            <input
                                className="border p-2 rounded w-full "
                                type="date"
                                placeholder="Due Date"
                                value={newDepartment.end}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="bg-[#083778] text-white py-2 px-4 rounded hover:bg-[#083778e1] w-full"
                    onClick={handleSubmit}
                    >
                  Create New Task
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      
    )
}

export default DepartmentModal;
