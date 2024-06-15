'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { departments } from '../../../../../data';

function DepartmentModal({ isOpen, handleCloseModal }){
    if (!isOpen) return null;

    const [newDepartment, setNewDepartment] = useState({
      name: '',
      HOD: '',
      description: '',
      contactEmail: '',
      parentDepartment: ''
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
                    <div className='flex mt-5 space-x-4'>
                            <div className='w-full'>
                                <label htmlFor='name'  className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                className="border p-2 rounded w-full"
                                type="test"
                                placeholder="Department Name"
                                value={newDepartment.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='HOD'  className="block text-sm font-medium text-gray-700 mb-1">HOD</label>
                                <input
                                className="border p-2 rounded w-full"
                                type="test"
                                placeholder="HOD"
                                value={newDepartment.HOD}
                                onChange={handleChange}
                                />
                            </div>
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

                    <div className='flex mt-5 justify-between items-center'>
                        <div className='flex flex-col'>
                            <label htmlFor='contactEmail' className='block text-sm font-medium text-gray-700 mb-2'>Contact Email</label>
                            <input
                                className="border p-2 rounded w-full"
                                type="email"
                                placeholder="email"
                                value={newDepartment.contactEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="invoices" className="block text-sm font-medium text-gray-700 mb-2">Parent Department</label>
                            <select
                                id="invoices"
                                value={newDepartment.parentDepartment}
                                onChange={handleChange}
                                className=" border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-[16rem]"
                            >
                                <option value="creditCard">Select Department</option>
                                {departments.map((department, key) => (
                                    <option key={key} value={department.name}>{department.name}</option>
                                ))}
                            </select>
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
