'use client'

import React, { useState } from 'react'
import { departments } from '../../../../data';
import DepartmentsTable from './tabels/DepartMentsTable';

function DepartmentView(){

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