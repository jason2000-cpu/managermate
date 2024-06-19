'use client'

import React from 'react'
import DepartmentsTable from './tabels/DepartMentsTable';
import useDepartmentHook from '@/hooks/useDepartmentHook';

function DepartmentView(){
  const { departments } = useDepartmentHook()
  const handleActionClick =()=>{
      alert("Action Button Clicked!")
  }
  return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Departments</h1>
        <DepartmentsTable data={departments} onActionClick={handleActionClick} />
      </div>
    );
}

export default DepartmentView;