'use client'

import React, { useState} from 'react'
import DepartmentModal from '../components/modals/DepartmentModal';
import DepartmentView from '../components/DepartmentView';
import PageTitle from '@/components/ui/PageTitle';

function DepartmentsPage(){
    return (
        <div className='mx-10 mt-4 space-y-5'>
            <PageTitle title={'Departments'} />
            <div className=' mx-4'>
                <DepartmentView />
            </div>
        </div>
    )
}

export default DepartmentsPage;