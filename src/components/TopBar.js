'use client'

import React, { useState } from  'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";


function TopBar(){
    return (
        <div className='border px-10 flex justify-between w-full py-2'>
            <div className='flex space-x-2'>
                <BsPersonWorkspace size={24} color='#083778' />
                <span>
                    Working Space
                </span>
            </div>
            <div className='flex space-x-4'>
                <input className='border rounded px-2 h-8' type='text' placeholder='Search anything..'/>
                <IoNotifications size={24}  className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default TopBar;