'use client'

import React, { useState } from 'react'

const options = ["incomplete", "inprogress", "complete"];

function SelectInput({ value, handleChange }){
    return (
        <select
            className='rounded h-8 w-32 dark:text-gray-300 dark:bg-gray-500 outline-none bg-transparent'
            value={value}
            onChange={handleChange}
        >
            {options.map((option, key)=>{
                return (
                    <option key={key} value={option}>{option}</option>
                )
            })}
        </select>
    )
}

export default SelectInput;