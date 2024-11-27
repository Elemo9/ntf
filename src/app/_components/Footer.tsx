"use client";
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from "../../../public/assets/Tech fair 8.png"

export default function Footer() {
  return (
    <div className='h-fit py-24 w-full flex flex-col items-center justify-center bg-black'>
        <div className='h-[300px] max-xl:h-fit max-xl:gap-8 flex max-xl:flex-col justify-start items-center w-[85%] mx-auto'>

            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[33%] max-xl:w-full h-full flex flex-col gap-5 '>
                <Image src={logoImg} alt='' className='w-[250px] max-lg:w-[150px] aspect-auto'/>
                <p className='italic text-green-500 text-xs mt-[-50px]'>...where innovation meets impact</p>
                <div className='flex flex-col gap-4 '>
                    <h3 className='text-white text-xl tracking-widest uppercase'>Social Handles</h3>
                    <div className='flex gap-4 w-fit'>
                        <FaFacebook size={25} color='green' className='cursor-pointer'/>
                        <FaX size={25} color='green' className='cursor-pointer'/>
                        <FaYoutube size={25} color='green' className='cursor-pointer'/>
                        <FaInstagram size={25} color='green' className='cursor-pointer'/>
                    </div>
                </div>
                {/* <p className='text-white'>For Partnership, Sponsorship, and general inquiries reach out to us anytime.</p> */}
            </motion.div>
            
            {/* <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[23%] max-xl:w-full flex flex-col gap-5 h-full'>
                <h3 className='text-2xl font-semibold text-white uppercase tracking-widest'>About the Event</h3>
                <p className='text-white w-[80%]'>Call Miss Dolapo: 09162468852</p>
                <p className='text-white w-[80%]'>Event location and dates are to be announced.</p>
            </motion.div> */}
            
            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[33%] mt-10 max-lg:mt-0 max-xl:w-full flex flex-col gap-5 h-full justify-start items-start'>
                <h3 className='text-xl font-semibold text-white uppercase tracking-widest'>Contact Us</h3>
                <p className='text-white text-sm w-[85%]'>For Inquiries: Inquiry@naijatechfair.com</p>
                <p className='text-white text-sm w-[85%]'>For Bookings: bookings@naijatechfair.com</p>
                <p className='text-white text-sm w-[85%]'>For Sponsorship: Sponsor@naijatechfair.com</p>
                <p className='text-white text-sm w-[85%]'>For Partnership: Partnership@naijatechfair.com</p>
                <p className='text-white text-sm w-[85%]'>Call/WhatsApp Only: 08055529521</p>

                
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='flex mt-10 max-lg:mt-0 flex-col gap-5 w-[33%] max-xl:w-full h-full'>
                <h3 className='text-white text-xl font-semibold uppercase tracking-widest'>Subscribe to our newsletter</h3>
                <p className='text-white text-xs tracking-widest'>Stay informed with the latest updates, announcements, 
                and behind-the-scenes insights from Naija Tech Fair. Be the first to know about event schedules, 
                speaker line-ups, and special activities planned for the upcoming editions.</p>
                <div className='flex h-[60px]'>
                    <input placeholder='Email' type='email' className='p-2 h-full' />
                    <button className='w-fit h-full bg-green-500 text-white py-3 px-6'>Subscribe</button>
                </div>
            </motion.div>
        </div>
        <div className='w-[85%] mx-auto h-fit justify-end flex max-lg:flex-col max-lg:mt-6 max-lg:w-[90%]'>
            <p className='text-white w-[33%] max-lg:w-full text-sm'>Copyright © 2024, All rights reserved.  </p>
            <p className='text-white w-[33%] max-lg:w-full cursor-pointer'>
                <Link href={"https://stripeedge.com/"} target='_blank'>
                This event is owned and organized by Naija Tech Fair Projects Limited, with website management by <span className='text-green-500 hover:text-green-700'>StripeEdge Systems.</span> 
                </Link>
            </p>                
        </div>
    </div>
  )
}
