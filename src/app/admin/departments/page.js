'use client'

import React, { useState } from 'react'
import PageTitle from '@/components/ui/PageTitle';
import DepartmentModal from '@/app/manager/components/modals/DepartmentModal';
import DepartmentsTable from '@/app/manager/components/tabels/DepartMentsTable';
import useDepartmentHook from '@/hooks/useDepartmentHook';

function AdminDepartments(){
    const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false);

    const handleOpenModal = () => {
            setDepartmentModalOpen(true)
        };

    const handleCloseModal = () => {
        setDepartmentModalOpen(false);
        };
    const { departments } = useDepartmentHook()
    const handleActionClick =()=>{
        alert("Action Button Clicked!")
    }
    return (
        <div className="p-6">
            <PageTitle title={'Manage Departments'} />
            <div className='space-y-10'>
                <div className="flex justify-between mx-28 ">
                    <div className='flex justify-end w-full space-x-10'>
                        <button onClick={()=>handleOpenModal('department')} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                            Create New Department
                        </button>
                        <DepartmentModal isOpen={isDepartmentModalOpen} handleCloseModal={handleCloseModal} />
                    </div>
                </div>
                <DepartmentsTable data={departments} onActionClick={handleActionClick} />
            </div>
        </div>
    )
}

export default AdminDepartments;