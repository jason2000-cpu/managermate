'use client'

import Nav from '@/components/Nav'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

import { BsFillGridFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { FcDepartment } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";


const links = [
    {
        id: 1,
        name: "Dashboard",
        path: "/admin",
        icon: <BsFillGridFill size={20} />
    },
    {
        id: 1,
        name: "Departments",
        path: "/admin/departments",
        icon: <FcDepartment size={20} />
    },
    {
        id: 1,
        name: "Settings",
        path: "/admin/settings",
        icon: <IoMdSettings size={20} />
    },
]

function SideNavigation(){
    const pathname = usePathname();
    const absPath = pathname.split("/")[2]
    console.log("Absolute Path::", absPath, pathname);
    return (
        <Nav links={links} absPath={ absPath} />
    )
}

export default SideNavigation;