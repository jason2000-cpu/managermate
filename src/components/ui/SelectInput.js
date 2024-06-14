'use client'

import React, { useState } from 'react'

const options = ["incomplete", "inprogress", "complete"];

function SelectInput({ value, handleChange }){
    return (
        <select
            className='border rounded h-8 w-32'
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