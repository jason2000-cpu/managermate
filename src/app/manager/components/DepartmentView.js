'use client'

import React, { useState } from 'react'
import DepartmentsTable from './tabels/DepartMentsTable';
import DepartmentModal from './modals/DepartmentModal';
import useDepartmentHook from '@/hooks/useDepartmentHook';


function DepartmentView(){
  const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false);
  const { departments } = useDepartmentHook()

  const handleOpenModal = () => {
          setDepartmentModalOpen(true)
    };
  
    const handleCloseModal = () => {
      setDepartmentModalOpen(false);
    };
  const handleActionClick =()=>{
      alert("Action Button Clicked!")
  }
  return (
    <>
      <div className="flex justify-between">
          <div className='flex justify-end w-full space-x-10'>
          <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
              Create New Department
          </button>
              <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} />
          </div>
      </div>
      <div className="p-6">
        <DepartmentsTable data={departments} onActionClick={handleActionClick} />
      </div>
    </>
    );
}

export default DepartmentView;