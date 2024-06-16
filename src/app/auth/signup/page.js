'use client'

import React, { useState } from "react";
import Link from "next/link";
import  Image from "next/image"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import SignupForm from "@/components/forms/SignupForm";

export default function Signup(){

	return (
		<>
			<div className="ml-10">
				<div className="mt-4">
					<Image src={'/static/images/logo2.png'} height={100} width={100} alt={'logo'} />
				</div>
				<div className="flex justify-evenly">
					<div className="flex flex-col items-center justify-center  space-y-5">
						<div className="flex flex-col items-center space-y-2">
							<span className="text-3xl font-extrabold">Welcome!</span>
							<span className="text-sm">Please Enter Your details to Signup</span>
						</div>
                        <SignupForm toast={toast} />
                        <div className="flex flex-col w-[100%] items-center px-3">
                            <div className="flex items-center justify-center w-[100%]">
                                <span className="w-[50%]"><hr /></span>
                                <span className="ml-2 mr-2 text-xl">or</span>
                                <span className="w-[50%]"><hr /></span>
                            </div>
                            <span>Signup with</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2" >
                            <div className="flex justify-between w-[100px]">
                                <FcGoogle  size={25}/>
                                <PiMicrosoftOutlookLogo  size={25} color={'blue'}/>
                            </div>
                        </div>
					</div>
					<div className="flex  flex-col items-center">
                        <Image src={'/static/images/banner3.jpg'} width={700} height={700} alt="login banner"  />
						<span>Already have an account ? <Link href={'/auth/login'} className="font-black">Login</Link></span>
					</div>
				</div>

				{/* <Footer /> */}
			</div>
			<ToastContainer position="top-right" />
		</>
	)
}
