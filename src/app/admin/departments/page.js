'use client'

import React from 'react'
import DepartmentView from '../components/DeparmentsView';
import SideNavigation from '../components/SideNavigation';
import TopBar from '@/components/TopBar';

function AdminDepartments(){
    return (
        <>
            <div>
                <div className="flex">
                    <SideNavigation />
                    <div className="w-full">
                    <TopBar />
                    <div className="p-6">
                        <DepartmentView />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminDepartments;