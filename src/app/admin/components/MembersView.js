'use client'

import React, { useState } from 'react'
import MembersTable from './MembersTable';
import useUserHook from '@/hooks/useUserHook';

function MembersView(){
    const { users } = useUserHook()

    return (
        <div className='space-y-10 mt-4'>
            <span className='font-bold text-xl my-16'>Manage Members</span>
            <MembersTable  data={users}/>
        </div>
    )
}

export default MembersView;