import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
    {
        id: 1,
        name: 'Home',
        path: "/"
    },
    {
        id: 2,
        name: 'About',
        path: '#about'
    },
    {
        id: 3,
        name: 'Contact',
        path: '#contact'
    },
    {
        id: 3,
        name: 'Signup',
        path: '/auth/signup'
    },
]
function Navbar() {
  return (
    <div className='flex justify-between px-16  items-center py-2 border-b-2 shadow-lg shadow-[#619ff527] fixed w-full bg-white'>
        <div>
            <Image 
                src={'/static/images/logo1.png'} 
                height={40} width={40} 
                alt='brand logo' 
            />
        </div>
        <div className='space-x-36'>
            { links.map((link, key) => {
                return (
                    <Link key={key} href={link.path}>{link.name}</Link>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar