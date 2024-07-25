'use client'

import React, { useState } from  'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdLightMode, MdModeNight, MdNightlife } from 'react-icons/md';


function TopBar(){
    const [ theme, setTheme ] = useState('dark');

    // const toggleTheme = () => {
    //     theme === 'dark' ? setTheme('light') : setTheme('dark')
    //     alert("Current Theme", theme)
    // }
    const toggleTheme = () =>{
        document.documentElement.classList.toggle('dark');
    }
    
    return (
        <div className='px-10 flex justify-between w-full py-2 shadow-md dark:border-b-2 dark:border-gray-600 dark:shadow-xl'>
            <div className='flex space-x-2'>
                <BsPersonWorkspace size={24} color='#083778' />
                <span className='font-bold text-[#083778]'>
                    Working Space
                </span>
            </div>
            <div className='flex space-x-4'>
                <div className='flex'>
                    <input className=' w-[18rem] border-2 border-[#083778] rounded px-2 h-8 dark:bg-gray-500' type='text' placeholder='Search anything..'/>
                    <IoSearch size={24}  color='#083778' className='absolute top-3 right-32'/>
                </div>
                <IoNotifications size={24}  className='cursor-pointer'/>
                {
                    theme == 'light' ? <MdModeNight  size={24} onClick={toggleTheme} className='cursor-pointer'/> : 
                                    <MdLightMode size={24} onClick={toggleTheme} className='cursor-pointer' />
                }
            </div>
        </div>
    )
}

export default TopBar;