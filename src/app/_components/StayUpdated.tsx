"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

export default function StayUpdated() {
  return (
    <div className='h-fit py-16 w-full bg-green-500 flex items-center justify-center'>
        <div className='flex h-fit p-14 max-lg:p-8 w-[80%] max-lg:flex-col max-lg:gap-6 mx-auto justify-between bg-white rounded-lg shadow-2xl'>
            
            <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[48%] max-lg:w-full flex flex-col gap-3'>
                <h3 className='uppercase tracking-widest text-4xl max-lg:text-xl font-semibold'>Stay Updated</h3>
                <p className='tracking-widest text-justify max-lg:text-sm'>
                    Subscribe to our newsletter for the latest updates, 
                    including schedules, speakers, and key announcements. 
                    Don't miss out on the opportunity to be part 
                    of the future of technology in Osun State.
                </p>
                <button className='hover:bg-green-500 transition-all shadow-2xl duration-300 w-fit h-fit py-6 max-lg:py-3 max-lg:px-4 px-8 bg-black uppercase tracking-widest text-base mt-8 text-white'>Subscribe Now</button>
            </motion.div>
            
            <motion.div 
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='flex w-[48%] max-lg:w-full h-fit gap-3 flex-col bg-black p-8 rounded-lg shadow-2xl '>
                <h3 className='tracking-widest text-white text-3xl max-lg:text-lg font-semibold'>SEND US A MESSAGE</h3>
                <input className='p-4 max-lg:p-2' type='text' placeholder='Your Name...'/>
                <input type="email" className='p-4 max-lg:p-2' placeholder='Your Email...'/>
                <textarea placeholder='Message' className='p-4 max-lg:p-2 h-32'></textarea> 
                <button className='w-fit h-fit bg-red-500 text-white hover:bg-green-500 duration-300 transition-all py-4 px-6 text-sm mt-8 tracking-widest uppercase shadow-2xl'>Submit Message</button>
            </motion.div>
        </div>      
    </div>
  )
}
