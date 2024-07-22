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
        alert("Current Theme", theme)
        document.documentElement.classList.toggle('dark');
    }
    
    return (
        <div className='border px-10 flex justify-between w-full py-2 shadow-md dark:bg-gray-500 dark:border-none dark:text-[#ffffff8f]'>
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
                {
                    theme == 'light' ? <MdModeNight  size={24} onClick={toggleTheme} className='cursor-pointer'/> : 
                                    <MdLightMode size={24} onClick={toggleTheme} className='cursor-pointer' />
                }
            </div>
        </div>
    )
}

export default TopBar;