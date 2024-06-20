'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { BiTask } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";

import Nav from './Nav';
import LogoutBtn from './ui/LogoutBtn';



const links =[
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        icon: <BsFillGridFill size={20}/>
    },
    {
        id: 2,
        name: "Paticipants",
        path: "/dashboard/participants",
        icon: <HiUsers size={20} />
    },
    {
        id: 3,
        name: "Calender",
        path: "/dashboard/calendar",
        icon: <FaRegCalendarAlt size={20} />
    },
    {
        id: 4,
        name: "Settings",
        path: "/dashboard/settings",
        icon: <IoMdSettings  size={20}/>
    }

]

function SideNav(){
    const [active, setActive] = useState(false);
    const pathname = usePathname();
    const absPath = pathname.split("/")[2]
    return (
        <div>
            <Nav links={links} absPath={absPath} />
        </div>
    )
}

export default SideNav;