'use client'

import React from 'react'
import DepartmentView from '../components/DeparmentsView';
import SideNavigation from '../components/SideNavigation';
import TopBar from '@/components/TopBar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
            <ToastContainer 
                position='top-right'
                theme='dark'
            />
        </>
    )
}


export default AdminDepartments;