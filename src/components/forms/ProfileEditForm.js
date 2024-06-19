'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { useAppSelector } from '@/lib/hooks';
import { selectUser } from '@/lib/features/user/userSlice';
import FloatingLabelInput from '../ui/FloatingLabelInput'
import useUserHook from '@/hooks/useUserHook';


function ProfileEditForm(){
    const user = useAppSelector(selectUser);

    const { updateUser } = useUserHook()
    const [ formData, setFormData ] = useState({
        "FName": user.FName,
        "SName": user.SName,
        "email": user.email,
        "phone": user.phone,
        "password": ""
    })

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const resp = await updateUser(user.id, formData)
        if (resp.status === 'Success'){
            toast.success(resp.message)
        } else {
            toast.error(resp.message)
        }

    }
    return(
        <form className=' mx-24 mt-10' onSubmit={handleSubmit}>
            <div className='flex space-x-24'>
                <FloatingLabelInput name={"FName"} label={"First Name"} value={formData.FName} handleChange={handleChange}  />
                <FloatingLabelInput name={"SName"} label={"Second Name"} value={formData.SName} handleChange={handleChange} />
            </div>
            <div className='flex space-x-24'>
                <FloatingLabelInput type='email' name={"email"} label={"Email"} value={formData.email} handleChange={handleChange}  />
                <FloatingLabelInput name={"phone"} label={"phone"} value={formData.phone} handleChange={handleChange} />
            </div>
            <div className='flex'>
                <FloatingLabelInput type='password' name={"password"} label={"Password"} value={formData.password} handleChange={handleChange}  />
            </div>
            <div className=' flex justify-center items-center'>
                <button type='submit' className="border bg-[#083778e7] rounded text-white py-1 hover:bg-[#083778] w-1/2">Submit</button>
            </div>
        </form>
    )
}


export default  ProfileEditForm;