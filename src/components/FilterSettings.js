'use client'

import React, { useState } from 'react'

import { IoFilter } from "react-icons/io5";
import { TbCalendarClock } from "react-icons/tb";


function FilterSettings(){
    return (
        <div className='flex mx-10 my-4 space-x-6'>
            <div className='flex space-x-2  border rounded-full bg-gray-200 py-1 px-3'>
                <IoFilter size={24} />
                <span>Filter</span>
            </div>
            <div className='flex space-x-2 border rounded-full bg-gray-200 p-1 px-3'>
                <TbCalendarClock size={24} />
                <span>Due Date</span>
            </div>
        </div>
    )
}

export default FilterSettings;