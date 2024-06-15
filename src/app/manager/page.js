'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Counter from '@/components/Counter';
import SideNavigation from './components/SideNavigation';
import TopBar from '@/components/TopBar';
import TaskModal from './components/modals/TaskModal';
import DepartmentModal from './components/modals/DepartmentModal';
import TasksView from './components/TasksView';

function ManagersPage(){
    const user = useSelector((state) => state.user);
    // const user = JSON.parse(localStorage.getItem("activeUser"))
    console.log("LOGGED IN USER:::: ", user)
    const [isTaskModalOpen, setTaskModalOpen ]  = useState(false);
  
    const handleOpenModal = () => {
        setTaskModalOpen(true)
    };
  
    const handleCloseModal = () => {
      setTaskModalOpen(false);
    };
  
    return (
        <div className="flex">
            <SideNavigation />
            {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
            <Counter /> */}
            <div className="w-full">
                <TopBar />
                <div className="flex justify-between mx-28 mt-10">
                    <div className='flex justify-end w-full space-x-10'>
                    <button onClick={()=>handleOpenModal('task')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                        Create New Task
                    </button>
                    {/* <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                        Create New Department
                    </button> */}
                        <TaskModal isOpen={isTaskModalOpen} handleCloseModal={handleCloseModal} />
                        {/* <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} /> */}
                    </div>
                </div>
                <div className=' mx-4'>
                    <TasksView />
                </div>
            </div>
        </div>
    )
}

export default ManagersPage;