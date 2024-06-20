'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import useUserHook from "@/hooks/useUserHook";
import LoginForm from "@/components/forms/LoginForm";

export default function Login(){
	return (
		<>
			<div className="mx-5">
				<div className="relative w-24 h-24">
					<Image 
						src={'/static/images/logo2.png'}  
						alt={'logo'}
						fill
						className="object-contain"
						/>
				</div>
				<div className="flex justify-evenly">
					<div className="flex flex-col items-center justify-center  space-y-10 w-[25rem]">
						<div className="flex flex-col items-center space-y-2">
							<span className="text-3xl font-extrabold">Welcome Back!</span>
							<span className="text-sm">Please Enter Your Email and Password to Login</span>
						</div>
						<div className="w-full">
							<LoginForm />
							<div className="flex justify-end mt-2">
								<Link href={'/'}>Forgot Password ?</Link>
							</div>
						</div>
							<div className="flex flex-col w-[100%] items-center px-3">
								<div className="flex items-center justify-center w-[100%]">
									<span className="w-[50%]"><hr /></span>
									<span className="ml-2 mr-2 text-xl">or</span>
									<span className="w-[50%]"><hr /></span>
								</div>
								<span>Login with</span>
							</div>
							<div className="flex flex-col items-center space-y-2" >
								<div className="flex justify-between w-[100px]">
									<FcGoogle  size={25}/>
									<PiMicrosoftOutlookLogo  size={25} color={'blue'}/>
								</div>
							</div>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<div className="relative w-[40rem] h-[37rem]">
							<Image 
								src={'/static/images/banner2.jpg'}
								alt="login banner"
								fill
								className="object-contain"
								/>
						</div>
						<span className="">Don&apos;t have an account ? <Link href={'/auth/signup'} className=" font-black">Signup</Link></span>
					</div>
				</div>

				{/* <Footer /> */}
			</div>

			<ToastContainer
				position="top-right"
				theme="dark"
			/>
		</>
	)
}
