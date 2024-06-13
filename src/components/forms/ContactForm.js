'use client'

import React, { useState } from "react"
import Input from "../ui/Input"

function ContactForm(){
    const [formData, setFormData] = useState({
        'FName': null,
        'SName': null,
        'phone': null,
        'email': null,
        'messagebody': null
    })

    const handleChange = (e) =>{
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-10 mt-10 py-4" >
                <div className="flex space-x-10">
                    <Input name={'FName'} value={formData.FName} label={'First Name'} handleChange={handleChange} />
                    <Input name={'SName'} value={formData.SName} label={'Second Name'} handleChange={handleChange} />
                </div>
                <div className="flex space-x-10">
                    <Input name={'email'} value={formData.email} label={'Email'} handleChange={handleChange} />
                    <Input name={'phone'} value={formData.phone} label={'Phone'} handleChange={handleChange} />
                </div>
                <textarea 
                    className="border w-full h-[12rem] p-2 rounded" 
                    placeholder="Write Message" 
                    name="messagebody" 
                    onChange={handleChange}
                    ></textarea>

                <button type="submit" className="border w-36 rounded bg-[#5F53B2] text-white h-8">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;