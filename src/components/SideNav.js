'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { BiTask } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";


const links =[
    {
        id: 1,
        name: "Task",
        icon: <BiTask size={24}/>
    },
    {
        id: 2,
        name: "Paticipants",
        icon: <HiUsers size={24} />
    },
    {
        id: 3,
        name: "Calender",
        icon: <FaRegCalendarAlt size={24} />
    },
    {
        id: 4,
        name: "Settings",
        icon: <IoMdSettings  size={24}/>
    }

]

function SideNav(){
    const [active, setActive] = useState(false);
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='w-[12%] h-[100vh] border shadow-lg'>
            <div className='flex justify-center mt-4'>
                <Image src={'/static/images/logo2.png'} width={150} height={150} alt='logo' />
            </div>
            <div className='mt-20'>
                { links.map((link) => {
                    return (
                        <div className={`flex py-2 mx-1 my-6 space-x-4 ${active ? 'border text-white bg-[#083778] rounded': null}`}>
                            <span>{link.icon}</span>
                            <span className='text-xl'>{link.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideNav;