'use client'

import React, { useState } from "react"

function UsersTable({ data }){

    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Contact</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Assigned Task</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Department</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{`${item.FName} ${item.SName}`}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b flex justify-center">
                        {/* {item.assignedTask ? <div>Assigned</div> : <div>Not Assigned</div>} */}
                        <div className={`border rounded-full flex justify-center px-2 font-semibold ${item.assignedTask ? 'bg-green-500' : 'bg-red-400'}`}>
                            {item.assignedTask ? 'Assigned' : 'Not Assigned'}
                        </div>
                        </td>
                  <td className="py-2 px-4 border-b">{item.department}</td>
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
        </div>
      );
}

export default UsersTable;