'use client'

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react';
import useDepartmentHook from '@/hooks/useDepartmentHook';
import { toast } from 'react-toastify';
import useUserHook from '@/hooks/useUserHook';


function DepartmentViewModal({ isOpen, handleCloseModal, department }) {
    if (!isOpen) return null;

    const { updateDepartment, deleteDepartment, departments } = useDepartmentHook();
    const { users } = useUserHook()
    const [departmentInView, setDepartmentInView] = useState({
        ...department,
        name: department.name,
        HOD: department.HOD,
        description: department.description,
        contactEmail: department.contactEmail,
        parentDepartment: department.parentDepartment
      })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setDepartmentInView({
            ...departmentInView,
            [name]: value
        })
    }

    const handleDepartmentDelete =  () =>{
        deleteDepartment(department)
        .then(response => {
            console.log("DELETE REPONSE:::",response)
            if (response.status === 'Success') {
                toast.success(response.message)
            } else {
                toast.error(response.message)
            }
        })

        handleCloseModal();
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const resp = updateDepartment(department.id, departmentInView)
        
        if (resp.status === "Success"){
            toast.success(resp.message)
        } else {
            toast.error(resp.message)
        }
        handleCloseModal();
    }

    return (
        <Dialog open={isOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-xl  ">
              <Dialog.Title className="text-lg font-bold">
                <div className='flex justify-between items-center'>
                    <span>View Department</span>
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
                                <label htmlFor='name'  className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                className="border p-2 rounded w-full"
                                type="test"
                                name='name'
                                placeholder="Department Name"
                                value={departmentInView.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className='w-full'>
                                <label htmlFor='HOD'  className="block text-sm font-medium text-gray-700 mb-1">HOD</label>
                                <input
                                className="border p-2 rounded w-full"
                                type="test"
                                name='HOD'
                                placeholder="HOD"
                                value={departmentInView.HOD}
                                onChange={handleChange}
                                />
                            </div>
                    </div>
                            
                    <div>
                        <lable htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</lable>
                        <textarea
                        className="border p-2 rounded w-full h-[10rem] outline-none"
                        type="date"
                        name='description'
                        placeholder="Write a Small Description...."
                        value={departmentInView.description}
                        onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className='flex mt-5 justify-between items-center'>
                        <div className='flex flex-col'>
                            <label htmlFor='contactEmail' className='block text-sm font-medium text-gray-700 mb-2'>Contact Email</label>
                            <input
                                className="border p-2 rounded w-full"
                                type="email"
                                name='contactEmail'
                                placeholder="email"
                                value={departmentInView.contactEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="invoices" className="block text-sm font-medium text-gray-700 mb-2">Parent Department</label>
                            <select
                                id="invoices"
                                value={departmentInView.parentDepartment}
                                name='parentDepartment'
                                onChange={handleChange}
                                className=" border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 w-[16rem]"
                            >
                                <option value={departmentInView.HOD}>Select Department</option>
                                {departments.map((department, key) => (
                                    <option key={key} value={department.name}>{department.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <button 
                        type="submit" 
                        className="bg-[#083778] text-white py-2 px-4 rounded hover:bg-[#083778e1] w-full"
                        onClick={handleSubmit}
                        >
                    Update Department
                    </button>
                    <button 
                        type="submit" 
                        className="bg-[#780808] text-white py-2 px-4 rounded hover:bg-[#780808c7] w-full"
                        onClick={handleDepartmentDelete}
                        >
                    Delete Department
                    </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      
    )

}

export default DepartmentViewModal;