'use client'

import React, { useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideNavigation from '../components/SideNavigation';
import TopBar from '@/components/TopBar';
import DepartmentModal from '../components/modals/DepartmentModal';
import DepartmentView from '../components/DepartmentView';

function DepartmentsPage(){
    const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false);

    const handleOpenModal = () => {
            setDepartmentModalOpen(true)
      };
    
      const handleCloseModal = () => {
        setDepartmentModalOpen(false);
      };
    return (
        <>
            <div className="flex">
                <SideNavigation />
                {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
                <Counter /> */}
                <div className="w-full">
                    <TopBar />
                    <div className="flex justify-between mx-28 mt-10">
                        <div className='flex justify-end w-full space-x-10'>
                        {/* <button onClick={()=>handleOpenModal('task')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                            Create New Task
                        </button> */}
                        <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                            Create New Department
                        </button>
                            {/* <TaskModal isOpen={isTaskModalOpen} handleCloseModal={handleCloseModal} /> */}
                            <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} />
                        </div>
                    </div>
                    <div className=' mx-4'>
                        <DepartmentView />
                    </div>
                </div>
            </div>
            <ToastContainer
                    position="top-right"
                    theme="dark"
                />
        </>
    )
}

export default DepartmentsPage;