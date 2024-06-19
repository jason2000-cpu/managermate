'use client'

import Nav from '@/components/Nav'
import React from 'react'
import { usePathname } from 'next/navigation'

import { BsFillGridFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { FcDepartment } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";


const links = [
    {
        id: 1,
        name: "Dashboard",
        path: "/manager",
        icon: <BsFillGridFill size={20} />
    },
    {
        id: 1,
        name: "Departments",
        path: "/manager/departments",
        icon: <FcDepartment size={20} />
    },
    {
        id: 1,
        name: "Users",
        path: "/manager/users",
        icon: <HiUsers size={20} />
    },
    {
        id: 1,
        name: "Settings",
        path: "/manager/settings",
        icon: <IoMdSettings size={20} />
    },
]

function SideNavigation(){
    const pathname = usePathname();
    const absPath = pathname.split("/")[2]
    return (
        <Nav links={links} absPath={ absPath} />
    )
}

export default SideNavigation;