'use client'

import React, { useState } from 'react'


function Input({ name, value, label, handleChange}){
    return (
        <div>
            <label></label>
            <input 
                value={value}
                name={name}
                onChange={handleChange}
                className='border-b-2 outline-none '
                placeholder={label}
            />
        </div>
    )
}

export default Input;