'use client'

import React, { useState } from 'react'
import FloatingLabelInput from '../ui/FloatingLabelInput'
import CustomBtn from '../ui/Button';


function ProfileEditForm(){
    const user = JSON.parse(localStorage.getItem("activeUser"));
    const [ formData, setFormData ] = useState({
        "FName": user.FName,
        "SName": user.SName,
        "email": user.email,
        "phone": user.phone,
        "password": null
    })

    const handleChange = (e)=>{
        e.preventDefault();
        const { name, value } = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <form className=' mx-24 mt-10'>
            <div className='flex space-x-24'>
                <FloatingLabelInput name={"FName"} label={"First Name"} value={formData.FName} handleChange={handleChange}  />
                <FloatingLabelInput name={"Sname"} label={"Second Name"} value={formData.SName} handleChange={handleChange} />
            </div>
            <div className='flex space-x-24'>
                <FloatingLabelInput name={"email"} label={"Email"} value={formData.email} handleChange={handleChange}  />
                <FloatingLabelInput name={"phone"} label={"phone"} value={formData.phone} handleChange={handleChange} />
            </div>
            <div className='flex'>
                <FloatingLabelInput name={"password"} label={"Password"} value={formData.password} handleChange={handleChange}  />
            </div>
            <div className=' flex justify-center items-center'>
                <button type='submit' className="border bg-[#083778e7] rounded text-white py-1 hover:bg-[#083778] w-1/2">Submit</button>
            </div>
        </form>
    )
}


export default  ProfileEditForm;