import React from 'react';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  MenuIcon,
}  from "@heroicons/react/24/outline";

function Header() {
  return (
    <div>
        <div className="flex justify-between max-w-6xl"> 
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
            <Image 
              src="https://links.papareact.com/ocw" 
              layout="fill"
              objectFit="contain"
            />

        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer" >
            <Image 
              src="https://links.papareact.com/jjm" 
              layout="fill"
              objectFit="contain"
            />
        </div>
        <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input 
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md" 
              type="text" 
              placeholder="Search"
            />
          
        </div>
       </div>
    </div>
  )
}

export default Header;
