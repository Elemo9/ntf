"use client";
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import logoImg from "../../../public/assets/Tech fair 8.png"
export default function Header() {
    const [active, set_active] = useState("home")
    const [open_nav, set_nav] = useState(false);
    const handleTabs = () => {
        set_nav(!open_nav);
    }
  return (
    <nav className='w-full h-fit max-lg:h-[100px] pb-6 max-lg:pb-1 bg-black flex items-center justify-center sticky top-0 left-0 z-50 relative'>
        <div className='flex justify-between w-[90%] max-lg:w-[95%] mx-auto h-fit items-center'>
            <div className='flex flex-col h-fit w-fit'>
                <Image src={logoImg} alt='' className='w-[180px] max-lg:w-[140px] aspect-auto cursor-pointer'/>
                <p className='text-xs italic text-green-500 mt-[-30px] max-lg:mt-[-20px] max-lg:text-[10px] lg:flex'>...where innovation meets impact</p>
            </div>
            <div className='text-white flex gap-8 h-fit w-fit tracking-wide text-xs max-xl:text-xs max-xl:hidden '>
                <p className={`${active === "home" ? "text-green-500" : "text-white"} tracking-wider font-bold`}>HOME</p>
                <p className={`${active === "about" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>ABOUT</p>
                <p className={`${active === "partnership" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>PARTNERSHIP</p>
                <p className={`${active === "book" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>BOOK A STAND</p>
                <p className={`${active === "contact" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>CONTACT US</p>
                <p className={`${active === "faqs" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>FAQS</p>
                <p className={`${active === "media" ? "text-green-500" : "text-white"} cursor-pointer hover:text-green-500`}>MEDIA GALLERY</p>
            </div>
            <div className='h-fit w-fit max-sm:text-xs max-md:text-sm max-lg:text-lg max-xl:text-xl flex items-center gap-3 '>
                <button className=' bg-yellow-500 transition-all duration-500 text-white py-2 px-4 font-normal rounded-lg max-lg:text-[10px] hover:bg-green-500 w-fit'>GET TICKETS</button>
                <GiHamburgerMenu color='white' size={25} className='cursor-pointer hidden max-xl:flex' onClick={handleTabs}/>
            </div>
        </div> 
        {
            open_nav && 
            <div className={` ${open_nav ? "h-fit" : "hidden"} w-full absolute top-[100px] left-0 flex flex-col bg-black gap-10 border-t-[0.5px] border-gray-500 py-12 transition-all duration-300`}>
                <p className='text-center uppercase tracking-widest text-green-500 xl:hidden'>Home</p>
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
