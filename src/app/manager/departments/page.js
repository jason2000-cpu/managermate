'use client'

import React, { useState} from 'react'
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
            <div className="flex justify-between mx-28 mt-10">
                <div className='flex justify-end w-full space-x-10'>
                <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Create New Department
                </button>
                    <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} />
                </div>
            </div>
            <div className=' mx-4'>
                <DepartmentView />
            </div>
        </>
    )
}

export default DepartmentsPage;