'use client'

import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";

function  DotsMenu(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = () => {
    alert('Delete action');
    setIsMenuOpen(false);
  };

  const handlePromote = () => {
    alert('Promote action');
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
          {/* <span className="sr-only">Open options</span> */}
          {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 110-4 2 2 0 010 4zm4-2a2 2 0 100 4 2 2 0 000-4zm4 0a2 2 0 110 4 2 2 0 010-4z" />
          </svg> */}
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
