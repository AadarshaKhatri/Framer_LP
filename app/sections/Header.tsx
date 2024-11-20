"use client"
import React, { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
   
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="sticky top-0">
      <div className="flex flex-row justify-between items-center py-5 px-5">
        <div>
          <h2 className="text-sm font-bold text-black">Logo Here</h2>
        </div>
        
     
        <div>
          <button onClick={handleClick}>
              <LuMenuSquare className="text-gray-900 cursor-pointer md:hidden" size={24} />
          </button>
        </div>
        <div className="hidden md:flex">
        <nav className="flex flex-row gap-x-5 justify-center items-center">
          <a className="text-gray-600 font-light" href="#">About Us</a>
          <a className="text-gray-600 font-light" href="#">Products</a>
          <a className="text-gray-600 font-light" href="#">Contact Us</a>
          <a className="text-gray-600 font-light" href="#">Help and Support</a>
          <button className="text-white bg-black p-4 rounded-lg">Get Started for free</button>
        </nav>
      </div>
      </div>

    
      {isMenuOpen && (
               <>
               <div className="fixed inset-0 bg-white z-10 md:hidden" />
              
            
               <div className="fixed top-0 left-0 w-full h-full bg-white z-20 md:hidden">
                 <div className="p-4">
                   <nav className="flex flex-col gap-y-5">
                    <div className="w-full flex flex-row justify-end">
                    <button onClick={handleClick}>
                      <RxCross2 className="text-gray-900 cursor-pointer " size={24} />
                    </button>
                    </div>
                    
                   
                     <a className="text-gray-600 font-light hover:bg-gray-100 p-2 rounded-md" href="#">About Us</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Products</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Contact Us</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Help and Support</a>
                     <button className="text-white bg-black p-4 rounded-lg">Get Started for free</button>
                   </nav>
                 </div>
               </div>
             </>
      )}
     
      
    </header>
  );
}
