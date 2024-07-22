'use client'

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import LogoutBtn from "./ui/LogoutBtn"

function Nav({ links, absPath }){
    return (
        <div className='w-50 h-[100vh] border shadow-lg flex flex-col items-center dark:border-[#00000033] dark:shadow-xl'>
            <div className='relative h-28 w-28'>
                <Image 
                    src={'/static/images/logo2.png'}
                    fill
                    className="object-contain"
                    alt='logo' 
                    priority={true} 
                    />
            </div>
            <div className='mt-6'>
                { links.map((link, key) => {
                    return (
                        <Link key={key} href={link.path} className={`items-center flex py-2 px-2 mx-1 my-4 space-x-2 ${absPath === link.path ? 'border text-white bg-[#083778] rounded': null}`}>
                            <span>{link.icon}</span>
                            <span className='text-xl'>{link.name}</span>
                        </Link>
                    )
                })}
                <LogoutBtn />
            </div>
        </div>
    )
}

export default Nav;