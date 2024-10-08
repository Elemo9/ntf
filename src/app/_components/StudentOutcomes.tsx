"use client";
import Image from 'next/image'
import React from 'react'
import studentImg from "../../../public/assets/proxy-image (10).jpeg";
import innovationImg from "../../../public/assets/proxy-image (8).jpeg";
import enterprenuerialImg from "../../../public/assets/proxy-image (6).jpeg";
import economicImg from "../../../public/assets/proxy-image (5).jpeg";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

export default function StudentOutcomes() {
  return (
    <div className='h-fit py-36 w-full items-center justify-center bg-black'>
        <div className='flex  w-[80%] justify-between mx-auto flex-col gap-4'>
            <h3 className='text-4xl text-white font-semibold uppercase text-center'>Event Outcomes</h3>
            <div className='w-full h-fit flex max-xl:flex-col max-lg:gap-4 justify-between mt-20'>                
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-3 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-2'>
                    <Image alt='' src={studentImg} className='w-full h-[400px] object-cover'/>
                    <h2 className='text-white tracking-widest font-semibold text-center uppercase text-sm'>Student Empowerment</h2>
                    <p className='text-white text-sm tracking-widest leading-6'>
                        A platform that propels student projects into the limelight, 
                        with expert ratings, recognition, and potential real-world application.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-3 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-2'>
                    <Image alt='' src={innovationImg} className='w-full h-[400px] object-cover'/>
                    <h2 className='text-white tracking-widest font-semibold text-center uppercase text-sm'>Increased Innovation</h2>
                    <p className='text-white text-sm tracking-widest leading-6'>
                        Exposure to the latest technologies and trends to inspire growth in businesses and startups.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-3 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-2'>
                    <Image alt='' src={enterprenuerialImg} className='w-full h-[400px] object-cover'/>
                    <h2 className='text-white tracking-widest font-semibold text-center uppercase text-sm'>Entrepreneurial Growth</h2>
                    <p className='text-white text-sm tracking-widest leading-6'>
                        A venue for startups to gain visibility, attract investors, and kickstart tech-based enterprises.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-3 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-2'>
                    <Image alt='' src={economicImg} className='w-full h-[400px] object-cover'/>
                    <h2 className='text-white tracking-widest font-semibold text-center uppercase text-sm'>Economic Development</h2>
                    <p className='text-white text-sm tracking-widest leading-6'>
                        The fair will drive investments and innovations that contribute to Osun State's socio-economic growth.
                    </p>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}
