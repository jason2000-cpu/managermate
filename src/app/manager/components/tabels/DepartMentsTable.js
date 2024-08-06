'use client'

import React, { useState } from 'react'
import DepartmentViewModal from '../modals/DepartmentViewModal';

function DepartmentsTable({ data }){  
  const [ isDepartmentModalOpen, setDepartmentInViewModalOpen] = useState(false);
  const [ departmentInView, setDepartmentInView ] = useState({})

    const handleModalOpen = (item)=>{
        setDepartmentInView(item);
        setDepartmentInViewModalOpen(true)
    }

    const handleCloseModal = ()=>{
      setDepartmentInViewModalOpen(false)
    }

    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-500">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Name</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Code</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Contact</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">HOD</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Employees</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Date Created</th>
                <th className="py-2 px-4 bg-gray-100 dark:bg-gray-600 border-b dark:border-b-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.name}</td>
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.code}</td>
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.contactEmail}</td>
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.HOD}</td>
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{
                    item.employees.length <= 0 ? "No Employees" : `${item.employees.length} Employees`
                  }</td>
                  <td className="py-2 px-4 border-b dark:border-b-gray-600">{item.date_created}</td>
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
          <DepartmentViewModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal}  department={departmentInView}/>
        </div>
      );
}

export default DepartmentsTable;