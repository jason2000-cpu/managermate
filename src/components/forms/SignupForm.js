'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { loginDispatch } from '@/lib/features/user/userSlice';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import FloatingLabelInput from "../ui/FloatingLabelInput"
import useUserHook from "@/hooks/useUserHook";
import CustomBtn from '../ui/CustomBtn';

function SignupForm({ toast }){
    const router = useRouter();
    const dispatch = useDispatch();
	const { register } = useUserHook();
	const [phone, setPhone] = useState('');
	const [form, setForm] = useState({
		"FName": null,
		"SName": null,
		"email": null,
		"phone": "+254",
		"password": null,
		"Cpassword": null
	})


	const handlePhoneInput = (value) => {
		setForm({...form, "phone": value})
		console.log("PHONE NUMBER:::", value)
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name] :value
		})

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(form)
		const res = register(form)
        if (res.status == 'success') {
            dispatch(loginDispatch(res.messsage))
            toast.success("Registration Successfull!")
            router.push(`/${user.id}/dashboard`)
        } else {
            toast.error("User Registration Failed")
        }
	}
    return (
        <div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex  space-x-2">
                <FloatingLabelInput
                    className="cursor-pointer"
                    label="First name"
                    type="text"
                    name={"FName"}
                    value={form.FName}
                    handleChange={handleChange}
                    />
                <FloatingLabelInput
                    className="cursor-pointer"
                    label="Second name"
                    type="text"
                    name={"SName"}
                    handleChange={handleChange}
                    value={form.SName}
                    />
            </div>
            <div className="flex  space-x-2">
                <FloatingLabelInput
                    className="cursor-pointer"
                    label="Email"
                    type="email"
                    name={"email"}
                    value={form.email}
                    handleChange={handleChange}
                    />
                <div className="my-6">
                    <PhoneInput
                        className='h-[50px] mt-[-10px]'
                        country={'ke'}
                        value={form.phone}
                        name={"phone"}
                        onChange={handlePhoneInput}
                        inputStyle={{
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        height:'100%',
                        outline: 'none'
                        }}
                        inputProps={{required: true}}
                        containerStyle={{ width: '100%' }}
                    />
                </div>
            </div>
            <div className="flex  space-x-2">
                <FloatingLabelInput
                    className="cursor-pointer"
                    name={"password"}
                    value={form.password}
                    label="Password"
                    type="password"
                    handleChange={handleChange}
                    />
                <FloatingLabelInput
                    className="cursor-pointer"
                    name={"Cpassword"}
                    label="Confirm password"
                    value={form.Cpassword}
                    type="password"
                    handleChange={handleChange}
                />
            </div>
            <CustomBtn type={"submit"} text={"Signup"} />
        </form>
    </div>
    )
}

export default SignupForm