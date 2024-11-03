"use client";
import React from 'react'
import Image from 'next/image';
import pitchImage from "../../../public/assets/WhatsApp Image 2024-10-08 at 18.46.09_98b87d7c.jpg";
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';

function PitchYourProduct() {
  return (
    <div className='flex w-full items-center justify-center h-fit py-20'>
        <div className='flex max-lg:flex-col h-[800px] w-[80%] max-lg:w-[85%] mx-auto justify-between'>            
            <motion.div 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.3}}
              className='w-[48%] max-lg:w-full h-full flex justify-center items-center'>
                <Image src={pitchImage} alt='' className='w-full aspect-auto'/>
            </motion.div>

            <div className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                <div className=' flex flex-col gap-4 '>
                    <motion.h3 
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false, amount:0.3}}
                      className='text-4xl tracking-wider max-lg:text-2xl font-extrabold'>Pitch Your Product or Startup</motion.h3>
                    <motion.p 
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false, amount:0.3}}
                      className='text-base tracking-wider font-normal leading-8'>
                      Ready to take your innovation to the next level? Pitch your project to a panel of 
                      top investors and industry professionals at OTF 2025. This is 
                      your chance to attract funding, mentorship, and valuable partnerships.
                    </motion.p>
                    <motion.div 
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false, amount:0.3}}
                      className='bg-gray-100 rounded-lg shadow-2xl w-fit h-[150px] p-8 flex flex-col gap-2 relative overflow-hidden'>
                      <h2 className='text-xl font-semibold tracking-wider text-green-500'>Pitch day</h2>
                      
                      <p className='tracking-wider text-sm'>April 18, 2025 | Slots: Limited</p>
                      
                      <div className='w-[60px] h-[60px] rounded-full bg-green-500 absolute bottom-[-15px] right-[-10px] z-20 flex items-center justify-center'>
                        <p className='text-white font-semibold text-xl'>1</p>
                      </div>
                    </motion.div>
                    <motion.button 
                      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once:false, amount:0.3}}
                      className='mt-6 tracking-wider text-lg shadow-2xl rounded-xl w-fit h-fit py-4 px-12 bg-green-500 text-white cursor-pointer hover:bg-red-500 transition-all duration-300'>Register Now</motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PitchYourProduct