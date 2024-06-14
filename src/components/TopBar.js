'use client'

import React, { useState } from  'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";


function TopBar(){
    return (
        <div className='border px-10 flex justify-between w-full py-2 shadow-md'>
            <div className='flex space-x-2'>
                <BsPersonWorkspace size={24} color='#083778' />
                <span className='font-bold text-[#083778]'>
                    Working Space
                </span>
            </div>
            <div className='flex space-x-4'>
                <div>
                    <input className=' w-[18rem] border-2 border-[#083778] rounded px-2 h-8' type='text' placeholder='Search anything..'/>
                    <IoSearch size={24}  color='#083778' className='absolute top-3 right-24'/>
                </div>
                <IoNotifications size={24}  className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default TopBar;