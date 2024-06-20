import Image from 'next/image'
import ContactForm from './forms/ContactForm'

import { ImFacebook } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactSection(){
    return (
        <section id='contact' className="my-10">
            <h1 className="text-3xl font-light">Contacts Us</h1>
            <div className='flex space-x-4 my-10'>
                <div className='border w-1/2 px-10 pt-10 shadow-lg'>
                    <span className='font-extrabold text-2xl'>Write To Us</span>
                    <ContactForm />
                </div>
                <div className='border w-1/2 px-10 py-4 rounded-e-full flex flex-col justify-center items-center shadow-lg'>
                    <span className='font-extrabold text-2xl'>Call Us</span> 
                    <div className='mx-10 mt-10'>
                        <span>We Are Just A Phone Call Away. <br/> We are available 24/7, 7 days a week.</span>
                        <span className='flex justify-between my-10'>
                            <div><ImFacebook size={20}/></div>
                            <div><SlSocialTwitter  size={20}/></div>
                            <div><BsInstagram size={20} /></div>
                            <div><FaLinkedinIn size={20} /></div>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}