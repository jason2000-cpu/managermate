import React from 'react'


// icons
import { ImFacebook } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";

function Footer() {
  return (
    <div className='w-[100%] h-[440px] bg-black py-10 px-8 text-white flex justify-between pt-20'>
        <div className='space-y-10'>
            <h2 className='text-2xl'>Exclusive</h2>
            <div className='space-y-4'>
                <h4 className='text-xl'>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <div>
                    <input type='email' placeholder='Enter your email'  className='w-[240px] h-[48px]'/>
                    <VscSend size={30}  color={'black'} className='relative bottom-10 left-52'/>
                </div>
            </div>
        </div>
        <div className='space-y-10'>
            <h2 className='text-2xl'>Support</h2>
            <div className='space-y-4'>
                <div>
                    <span className='text-xl'>Address</span>
                    <p>Ralpha Bunche Road, Upper Hill</p>
                    <p>Nairobi, Kenya</p>
                </div>
                <div>
                    <span className='text-xl'>Email</span>
                    <p>info@managermate.com</p>
                </div>
                <div>
                    <span  className='text-xl'>Phone</span>
                    <p>+254797955092</p>
                </div>
            </div>
        </div>

        <div className='space-y-10'>
            <h2 className='text-2xl'>Quick Link</h2>
            <div className='space-y-4'>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
        </div>

        {/* <div className='space-y-10'>
            <h2 className='text-2xl'>Download App</h2>

            <div>
                <span>Save Ksh 200 with App. New User Only</span>
                <div className='flex justify-between  w-[20rem] my-4'>
                    <div className='h-32 w-32'>
                        <img src='/static/images/Qrcode.png' alt='qrcode' className='w-[100%] h-[100%]' />
                    </div>
                    <div className='space-y-4 flex flex-col justify-center'>
                        <div className='h-10 w-40 flex items-center justify-center'>
                            <img src='/static/images/download_playstore.png' className='w-[100%] h-[100%]' alt='playstore' />
                        </div>
                        <div className='h-10 w-40 flex items-center justify-center'>
                            <img src='/static/images/download-appstore.png' alt='app store' className='w-[100%] h-[100%]' />
                        </div>
                    </div>
                </div>
            </div>
            <span className='flex justify-between'>
                <div><ImFacebook size={20}/></div>
                <div><SlSocialTwitter  size={20}/></div>
                <div><BsInstagram size={20} /></div>
                <div><FaLinkedinIn size={20} /></div>
            </span>
        </div> */}
    </div>
  )
}

export default Footer