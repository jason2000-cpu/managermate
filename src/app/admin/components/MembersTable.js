'use client'

import React, { useState } from "react"
import Image from 'next/image'
import DotsMenu from "./DotMenu";

function MembersTable({ data }){

    return (
        <div className="">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-100 border-b">Employee</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Department</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Availability</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Role</th>
                <th className="py-2 px-4 bg-gray-100 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="">
                  <td className="py-2 px-4 border-b ">
                    <div className=" flex space-x-2 items-center">
                        <div className="">
                            <img width={50} height={50} src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.FName}`} alt="avatar" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold">{user.FName} {user.SName}</span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b text-center">{user.department}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex justify-center">
                        {
                            user.assignedTask ? (
                                <div className="border bg-[#ffebeb] rounded-full text-[#ff0606] p-2 font-semibold">Busy</div>
                            ): (
                                <div className="border bg-[#edfff0] rounded-full text-[#19af55] p-1 font-semibold">Available</div>
                                )
                        }
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b text-center">{user.userType}</td>
                  <td className="py-2 px-4 border-b text-center"><DotsMenu /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <TaskViewModal isTaskViewModalOpen={isTaskViewModalOpen} handleCloseModal={handleCloseModal}  task={taskInView}/> */}
        </div>
    )
}

export default MembersTable;