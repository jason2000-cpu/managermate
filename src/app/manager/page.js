'use client'

import React, { useState } from 'react'
import { useAppSelector } from '@/lib/hooks';
import { selectUser } from '@/lib/features/user/userSlice';

import TaskModal from './components/modals/TaskModal';
import TasksView from './components/TasksView';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ManagersPage(){
    const user = useAppSelector(selectUser)
    console.log("LOGGED IN USER:::: ", user)
    const [isTaskModalOpen, setTaskModalOpen ]  = useState(false);
  
    const handleOpenModal = () => {
        setTaskModalOpen(true)
    };
  
    const handleCloseModal = () => {
      setTaskModalOpen(false);
    };
  
    return (
        <>
            <div className="flex justify-between mx-28 mt-10">
                <div className='flex justify-end w-full space-x-10'>
                <button onClick={()=>handleOpenModal('task')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Create New Task
                </button>
                {/* <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Create New Department
                </button> */}
                    <TaskModal isOpen={isTaskModalOpen} handleCloseModal={handleCloseModal} toast={toast} />
                    {/* <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} /> */}
                </div>
            </div>
            <div className=' mx-4'>
                <TasksView />
            </div>
        </>
    )
}

export default ManagersPage;