"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import tech_image from "../../../public/assets/WhatsApp Image 2024-11-01 at 14.22.37_107d699d.jpg";

export default function Workshop() {
    const [read_all, set_read_all] = useState(false)
    const handle_Read_all = () => {
        set_read_all(!read_all)
    }
  return (
    <div className='w-full h-fit bg-black flex items-center justify-center'>
        <div className='w-[90%] justify-between flex max-lg:flex-col-reverse max-lg:gap-8 h-screen max-lg:h-fit max-lg:py-16'>
            <div className='flex flex-col gap-3 text-white w-[50%] h-full justify-center max-lg:w-full'>
                <h3 className='text-5xl max-lg:text-2xl uppercase tracking-widest'>Workshop 1: <span className='text-green-500'>Engine Building</span></h3>
                <p className='text-sm tracking-widest leading-8'>
                    At the Naija Tech Fair Osun edition, we're excited to introduce a unique hands-on workshop 
                    where children can experience the thrill of engineering by assembling a real car engine. 
                    This interactive session is designed to spark curiosity and passion for STEM fields in young minds, offering them a 
                    chance to understand the inner workings of automotive technology.
                </p>
                {
                    !read_all &&
                    <button className='transition-all duration-300 w-fit h-fit text-sm px-6 py-3 text-white bg-green-500 rounded-lg' onClick={handle_Read_all}>Read More</button>
                }

                {
                    read_all &&
                    <p className='text-sm tracking-widest leading-8 transition-all duration-300'>
                        Guided by expert instructors, participants will learn the basics of mechanical engineering, teamwork, 
                        and problem-solving as they piece together engine components. This workshop not only builds technical 
                        skills but also nurture creativity, critical thinking, and a love for innovation.
                    </p>
                }
                {
                    read_all &&
                    <p className='text-sm tracking-widest leading-8 transition-all duration-300'>
                        Join us at Naija Tech Fair to give children an unforgettable experience that 
                        could ignite their journey into the world of technology and engineering!
                    </p>
                }
                {
                    read_all && 
                    <button className='transition-all duration-300 w-fit h-fit text-sm px-6 py-3 text-white bg-green-500 rounded-lg' onClick={handle_Read_all}>Read Less</button>
                }
            </div>
            <div className='h-full w-[50%] max-lg:w-full items-center flex justify-center'>
                <Image src={tech_image} alt='' className='w-[600px] aspect-auto'/>
            </div>
        </div>
    </div>
  )
}
