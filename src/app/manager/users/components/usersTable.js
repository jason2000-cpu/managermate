'use client'

import React from "react"
import useUserHook from "@/hooks/useUserHook";
import { toast } from "react-toastify";

function UsersTable({ data }){
  const { deleteUser } = useUserHook()

  const handleDelete = (user)=>{
    console.log("USER ID::::",user)
    deleteUser(user.id)
    .then(response => {
      if (response.status === 'Success'){
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    })
  }
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
            {data.map((user, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{`${user.FName} ${user.SName}`}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b flex justify-center">
                      <div className={`border rounded-full flex justify-center px-2 font-semibold ${user.assignedTask ? 'bg-green-500' : 'bg-red-400'}`}>
                          {user.assignedTask ? 'Assigned' : 'Not Assigned'}
                      </div>
                      </td>
                <td className="py-2 px-4 border-b">{user.department}</td>
                <td className="py-2 px-4 border-b">
                  <button 
                    className="bg-[#083778] text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={()=> handleDelete(user)}
                  >
                    Delete
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