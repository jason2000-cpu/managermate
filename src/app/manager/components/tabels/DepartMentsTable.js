'use client'

import React, { useState } from 'react'

function DepartmentsTable({ data }){

    const handleModalOpen = (item)=>{
        alert(`Opening Department ${item.name}`)
    }
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Code</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Contact</th>
                <th className="py-2 px-4 bg-gray-100 border-b">HOD</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Employees</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Date Created</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.code}</td>
                  <td className="py-2 px-4 border-b">{item.contactEmail}</td>
                  <td className="py-2 px-4 border-b">{item.HOD}</td>
                  <td className="py-2 px-4 border-b">{item.emmployees}</td>
                  <td className="py-2 px-4 border-b">{item.date_created}</td>
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
          {/* <TaskViewModal isTaskViewModalOpen={isTaskViewModalOpen} handleCloseModal={handleCloseModal}  task={taskInView}/> */}
        </div>
      );
}

export default DepartmentsTable;