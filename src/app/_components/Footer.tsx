"use client";
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='h-fit py-24 w-full flex flex-col items-center justify-center bg-black'>
        <div className='h-[300px] max-xl:h-fit max-xl:gap-8 flex max-xl:flex-col justify-center items-center w-[85%] mx-auto'>

            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[23%] max-xl:w-full h-full flex flex-col gap-5 '>
                <h2 className='uppercase text-4xl font-semibold'><span className='text-green-500'>Naija </span><span className='text-green-500'>Tech </span><span className='text-green-500'>Fair</span></h2>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-white text-xl tracking-widest uppercase'>Social Handles</h3>
                    <div className='flex gap-4 w-fit'>
                        <FaFacebook size={25} color='red' className='cursor-pointer'/>
                        <FaX size={25} color='green' className='cursor-pointer'/>
                        <FaYoutube size={25} color='yellow' className='cursor-pointer'/>
                        <FaInstagram size={25} color='red' className='cursor-pointer'/>
                    </div>
                </div>
                <p className='text-white'>Project Cordinator: Elemo Seyi</p>
                <p className='text-white'>For Partnership, Sponsorship, and general inquiries reach out to us anytime.</p>
            </motion.div>
            
            <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[23%] max-xl:w-full flex flex-col gap-5 h-full'>
                <h3 className='text-2xl font-semibold text-white uppercase tracking-widest'>About the Event</h3>
                <p className='text-white w-[80%]'>Event location and dates are to be announced.</p>
            </motion.div>
            
            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[23%] max-xl:w-full flex flex-col gap-5 h-full justify-start items-start'>
                <h3 className='text-2xl font-semibold text-white uppercase tracking-widest'>Contact Us</h3>
                <p className='text-white w-[85%]'>For Inquiries: Inquiry@naijatechfair.com</p>
                <p className='text-white w-[85%]'>For Bookings: bookings@naijatechfair.com</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='flex flex-col gap-5 w-[23%] max-xl:w-full h-full'>
                <h3 className='text-white text-2xl font-semibold uppercase tracking-widest'>Subscribe to our newsletter</h3>
                <p className='text-white text-xs tracking-widest'>Get news, updates and information about technologies been developed by the younger generation. 
                    Also get early information of event organizers plans in the coming weeks and months.</p>
                <div className='flex h-[60px]'>
                    <input placeholder='Email' type='email' className='p-2 h-full' />
                    <button className='w-fit h-full bg-red-500 text-white py-3 px-6'>Subscribe</button>
                </div>
            </motion.div>

        </div>
        <div className='w-[80%] mx-auto h-fit justify-between flex '>
            <p className='text-white text-sm'>Copyright &#169 2024, All Rights Reserved. </p>
            <p className='text-white cursor-pointer hover:text-green-500 text-sm'>
                <Link href={"https://stripeedge.com/"} target='_blank'>
                    This website was developed and managed by <span className='text-green-500 hover:text-green-500'>StripeEdge Systems</span>
                </Link>
            </p>                
        </div>
    </div>
  )
}
