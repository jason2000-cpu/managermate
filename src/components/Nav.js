'use client'

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

function Nav({ links, absPath }){
    return (
        <div className='w-[12%] h-[100vh] border shadow-lg'>
            <div className='flex justify-center mt-4'>
                <Image src={'/static/images/logo2.png'} width={150} height={150} alt='logo' />
            </div>
            <div className='mt-20'>
                { links.map((link) => {
                    return (
                        <Link href={link.path} className={`items-center flex py-2 px-2 mx-1 my-6 space-x-2 ${absPath === link.path ? 'border text-white bg-[#083778] rounded': null}`}>
                            <span>{link.icon}</span>
                            <span className='text-xl'>{link.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav;