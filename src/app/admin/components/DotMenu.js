'use client'

import React, { useState } from 'react';
import useUserHook from '@/hooks/useUserHook';
import { HiDotsHorizontal } from "react-icons/hi";
import { toast } from 'react-toastify';

function  DotsMenu({ row }){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { deleteUser, updateUser } = useUserHook();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = async () => {
    const res = await deleteUser(row.id)
    if (res.status === 'Success'){
      toast.success('User Deleted!')
    } else {
      toast.error("An Error Occured While Deleting User!")
    }
    setIsMenuOpen(false);
  };

  const handlePromote = async() => {
    if (row.userType === 'user') {
      const updatedUser = {...row, userType: 'manager'}
      const res = await updateUser(row.id, updatedUser)
    
      if (res.status === 'Success') {
        toast.success('User Promoted to Manager')
      } else {
        toast.error('An Error Occured While Promoting User')
      }
    }


    setIsMenuOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md focus:outline-none"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleMenu}
          >
          <HiDotsHorizontal  size={24}/>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handlePromote}
            >
              Promote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DotsMenu;
