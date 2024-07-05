'use client'

import React, { useState } from 'react'
import UsersTable from './components/usersTable';
import useUserHook from '@/hooks/useUserHook';

function UsersPage(){
    const { users } = useUserHook();

    const emmployees = users.filter(user => user.userType === 'user');

    return (
        <>
            <div className="mx-10 mt-10 space-y-5">
                <span className='font-bold text-xl'>Users</span>
                <UsersTable data={emmployees} />
            </div>
        </>
    )
}

export default UsersPage;