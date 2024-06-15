'use client'

import React, { useState } from 'react'
import SideNavigation from '../components/SideNavigation';
import TopBar from '@/components/TopBar';
import UsersTable from './components/usersTable';
import { users } from "../../../../data";

function UsersPage(){

    return (
        <div className="flex">
            <SideNavigation />
            {/* <h1>Active User: {user.userType} {user.FName} {user.SName}</h1>
            <Counter /> */}
            <div className="w-full">
                <TopBar />
                <div className="mx-10 mt-10 space-y-5">
                    <span className='font-bold text-xl'>Users</span>
                    <UsersTable data={users} />
                </div>
            </div>
        </div>
    )
}

export default UsersPage;