"use client";
import Image from 'next/image'
import React from 'react'
import exhibitionImg from "../../../public/assets/kisspng-display-stand-banner-trade-show-display-exhibit-de-exhibition-stand-design-5b0c4569675d80.0754888715275308574234.png";
import {MdPlayArrow} from "react-icons/md"
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';

export default function ForExhibitors() {
  return (
    <div className='h-fit py-32 w-full flex items-center justify-center bg-white'>
        <div className='flex max-lg:flex-col max-lg:gap-6 h-fit justify-between w-[80%] max-lg:w-[85%] mx-auto'>
            <div className='w-[48%] max-lg:w-full flex flex-col gap-3'>
                <motion.h2 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='text-4xl font-semibold tracking-widest uppercase max-lg:text-2xl'>For Exhibitors: Book Your Stand</motion.h2>
                <motion.p 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='leading-8 text-lg max-lg:text-base tracking-widest mb-12'>Don't miss the chance to showcase your tech products and 
                    services to thousands of attendees, including potential investors and partners. 
                    Secure your stand and get maximum visibility during this landmark event.
                </motion.p>
                <div className='flex gap-6 items-center'>
                    <MdPlayArrow size={40} color='red'/>
                    <p className='text-lg tracking-widest max-lg:text-base'>Early Bird Discount: Available until February 28, 2025</p>
                </div>
                <div className='flex gap-6 items-center'>
                    <MdPlayArrow size={40} color='red'/>
                    <p className='text-lg tracking-widest max-lg:text-base'>Stand Sizes & Packages: Various options to fit your brand's needs</p>
                </div>
            </div>
            <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='flex items-center justify-center w-[50%] max-lg:w-full'>
                <Image src={exhibitionImg} alt='' className='w-[90%] object-cover aspect-auto'/>
            </motion.div>
        </div>
    </div>
  )
}
