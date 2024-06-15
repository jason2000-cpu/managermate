'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import useUserHook from '@/hooks/useUserHook'
import FloatingLabelInput from '../ui/FloatingLabelInput'
import CustomBtn from '../ui/Button'
import { useSelector, useDispatch } from 'react-redux'
import { loginDispatch } from '@/lib/slices/userSlice'


function LoginForm({ toast }){
	const { login } = useUserHook();
	const router = useRouter()
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		"username": null,
		"password": null
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const res = login(form)
		console.log(res)
		if (res.status === 'Success') {
			dispatch(loginDispatch(res.message))
			toast.success("Login Successfull!")
			console.log("User Type:::",res.message.userType)
			switch (res.message.userType){
				case "admin":
					router.push("/admin")
					break;
				case "manager":
					router.push("/manager")
					break;
				default:
					router.push("/dashboard")
			}
		} else {
			toast.error("Login Failed. Please check your credentials")
		}

	}
    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <FloatingLabelInput
                className="cursor-pointer"
                label="username/email"
                type="text"
                name={"username"}
                value={form.username}
                handleChange={handleChange}
                />
            <FloatingLabelInput
                className="cursor-pointer"
                label="password"
                type="password"
                name={"password"}
                value={form.password}
                handleChange={handleChange}
            />
            <CustomBtn type="submit" text={"Login"} />
        </form>
    )
}

export default LoginForm;