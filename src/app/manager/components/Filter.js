import React, { useState } from 'react'

function Filter({filter, handleChange, filterOptions}) {

    return (
        <div className='space-x-4'>
            <span className='font-semibold'>Filter</span>
            <select value={filter} className='border w-32 px-1 border-black h-7 rounded-md dark:bg-gray-600' onChange={handleChange}>
                { filterOptions.map((option) =>{
                    return (
                        <option value={option}>{option}</option>
                    )
                })}
            </select>
      </div>
    );
}

export default Filter;
