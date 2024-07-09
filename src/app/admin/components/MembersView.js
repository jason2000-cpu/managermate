'use client'

import React, { useState } from 'react'
import MembersTable from './MembersTable';
import useUserHook from '@/hooks/useUserHook';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MembersView(){
    const { users } = useUserHook()

    return (
        <div className='space-y-10 mt-4'>
            <span className='font-bold text-xl my-16'>Manage Members</span>
            <MembersTable  data={users}/>
            <ToastContainer position='top-right' />
        </div>
    )
}

export default MembersView;