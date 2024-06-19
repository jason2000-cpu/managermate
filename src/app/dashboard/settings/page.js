'use client'

import React, { useState } from 'react'
import SideNav from '@/components/SideNav';
import TopBar from '@/components/TopBar';
import ProfileEditForm from '@/components/forms/ProfileEditForm';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Settings(){
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePictureUrl, setProfilePictureUrl] = useState('/static/images/user1.jpg');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePictureUrl(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };


    return (
        <div>
        <div className="flex">
            <SideNav />
            <div className="w-full">
              <TopBar />
              <div className='m-10'>
                <span className='text-2xl font-bold'>Edit Your Profile Information</span>
                <div className='flex justify-center items-center space-x-4'>
                    <div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="file"
                          id="file-input"
                          style={{ display: 'none' }}
                          onChange={handleFileChange}
                        />
                        {profilePictureUrl ? (
                          <img
                            src={profilePictureUrl}
                            alt="Profile"
                            width={100}
                            height={100}
                            className='rounded-full'
                          />
                        ) : (
                          <span className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                            No Image
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => document.getElementById('file-input').click()}
                          className="text-blue-600 hover:underline"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                </div>
                <ProfileEditForm />
              </div>
            </div>
        </div>
        <ToastContainer
          theme='dark'
          position='top-right' 
         />
    </div>
    )
}


export default Settings;