'use client'

import TimeCalculator from '@/lib/TimeCalulator';
import React, { useState } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiUser2Fill } from "react-icons/ri";
import SelectInput from './SelectInput';


function Card({data}){
    const [optionValue, setOptionValue ] = useState(data.status)

    const time = TimeCalculator(data.start, data.end)

    const handleChange = (e)=>{
        setOptionValue(e.target.value)
    }
    return (
        <div className='border rounded-lg px-4 py-2 shadow-lg flex flex-col space-y-6 mx-2 mb-4'>
            <div className='flex justify-between items-center font-bold'>
                <h1 className='text-xl font bold'>{data.title}</h1>
                <span className={`h-10 w-10 border bg-[${data.color}]`}></span>
            </div>
            <div className='flex justify-between'>
                <div className='flex space-x-2'>
                    <FaRegCalendarAlt size={20}/>
                    <span>{data.end}</span>
                </div>
                <div className='flex'>
                    <MdOutlineTimer size={20} />
                    {time}
                </div>
            </div>
            <div className='flex'>
                <div className='flex items-center space-x-2'>
                    <div className='border bg-[#083778] rounded-full p-1'>
                        <RiUser2Fill size={20}  color={'white'} />
                    </div>
                    <span>Assinged By {data.assigned_by}</span>
                </div>
            </div>
            <div className='space-x-4'>
                <span>Status</span>
                <SelectInput value={optionValue} handleChange={handleChange}  />
            </div>
        </div>
    )
}

export default Card;