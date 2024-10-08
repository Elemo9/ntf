"use client"
import Image from 'next/image'
import React from 'react'
import techOneImage from "../../../public/assets/proxy-image (4).jpeg"
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';

function UnlockTheFutureOfInnovation() {
  return (
    <div className='flex w-full items-center justify-center h-fit p-12'>
        <div className='flex h-[800px] w-[80%] max-lg:w-[95%] mx-auto justify-between max-lg:h-fit max-lg:flex-col max-lg:gap-6 max-lg:py-16'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[48%] h-full flex justify-center items-center max-lg:w-full'>
                <Image src={techOneImage} alt='' width={800} height={800}/>
            </motion.div>
            <div className='w-[48%] h-full flex items-center justify-center max-lg:w-full'>
                <div className=' flex flex-col gap-4 '>
                    <motion.h3
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}} 
                        className='text-4xl font-extrabold max-lg:text-2xl'>Unlock The Future of Innovation!</motion.h3>
                    <motion.p
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}} 
                        className='text-sm font-normal leading-8 max-lg:text-xs max-lg:leading-8'>The Osun Tech Fair 2025 is the ultimate platform where the brightest minds in technology, innovation, and 
                        entrepreneurship come together to shape the future. Over the course of three exhilarating days, 
                        Osun State will transform into Nigeria's hub for cutting-edge technology, hosting innovators, students, startups, and industry leaders. 
                        Whether you're a seasoned tech enthusiast, a student with groundbreaking ideas, or an investor seeking the next big thing, 
                        OTF 2025 is the event that will take your vision to new heights.
                    </motion.p>
                    <button className='mt-6 shadow-md w-fit h-fit py-4 px-12 bg-yellow-500 text-white cursor-pointer hover:bg-red-500 transition-all duration-300'>Register Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnlockTheFutureOfInnovation