"use client";
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header() {
    const [active, set_active] = useState("home")
    const [open_nav, set_nav] = useState(false);
    const handleTabs = () => {
        set_nav(!open_nav);
    }
  return (
    <nav className='w-full h-[100px] bg-black flex items-center justify-center sticky top-0 left-0 z-50 relative'>
        <div className='flex justify-between w-[80%] max-lg:w-[85%] mx-auto h-fit items-center'>
            <div className='flex h-fit w-fit'>
                <h1 className='text-white text-3xl font-semibold max-xl:text-xl max-lg:text-xl'><span className='text-green-500'>NAIJA </span><span className='text-green-500'>TECH </span><span className='text-green-500'>FAIR</span></h1>
            </div>
            <div className='text-white flex gap-8 h-fit w-fit tracking-wide text-sm max-xl:text-xs max-xl:hidden '>
                <p className={`${active === "home" ? "text-green-500" : "text-white"} tracking-wider font-bold`}>HOME</p>
                <p className={`${active === "book" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>BOOK A STAND</p>
                <p className={`${active === "partnership" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>PARTNERSHIP</p>
                <p className={`${active === "about" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>ABOUT</p>
                <p className={`${active === "contact" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>CONTACT US</p>
                <p className={`${active === "faqs" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>FAQS</p>
                <p className={`${active === "media" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>MEDIA GALLERY</p>
            </div>
            <div className='h-fit w-fit max-sm:text-xs max-md:text-sm max-lg:text-lg max-xl:text-xl flex items-center gap-3 '>
                <button className=' bg-yellow-500 transition-all duration-300 text-white py-2 px-4 font-normal rounded-lg  hover:bg-red-500 w-fit'>GET TICKETS</button>
                <GiHamburgerMenu color='white' size={25} className='cursor-pointer hidden max-xl:flex' onClick={handleTabs}/>
            </div>
        </div> 
        {
            open_nav && 
            <div className={` ${open_nav ? "h-fit" : "hidden"} w-full absolute top-[100px] left-0 flex flex-col bg-black gap-10 border-t-[0.5px] border-gray-500 py-12 transition-all duration-300`}>
                <p className='text-center uppercase tracking-widest text-red-500 xl:hidden'>Home</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>Book a Stand</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>Partnership</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>About</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>Contact Us</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>FAQS</p>
                <p className='text-center text-white uppercase tracking-widest xl:hidden'>Media Gallery</p>
            </div>        

        }
    </nav>
  )
}
