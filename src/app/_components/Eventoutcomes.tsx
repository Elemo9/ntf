"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

export default function EventOutcomes() {
  return (
    <div className='h-fit py-40 w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900'>
        <div className='flex w-[90%] max-lg:w-[85%] justify-between mx-auto flex-col gap-8'>
            <h3 className='text-5xl text-green-500 font-bold uppercase text-center'>Event Outcomes</h3>
            <div className='w-full h-fit flex max-xl:flex-col max-lg:gap-12 justify-between mt-12'>                
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true, amount:0.3}}
                    className='flex flex-col border-r border-gray-400 max-lg:border-none gap-4 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-4'>
                    
                    <h2 className='text-green-500 tracking-widest font-bold uppercase text-xl'>Student Empowerment</h2>
                    <p className='text-gray-300 text-base tracking-wider leading-7'>
                        A platform that propels student projects into the limelight, 
                        with expert ratings, recognition, and potential real-world application.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true, amount:0.3}}
                    className='flex border-r border-gray-400 max-lg:border-none flex-col gap-4 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-4'>
                    
                    <h2 className='text-green-500 tracking-widest font-bold uppercase text-xl'>Increased Innovation</h2>
                    <p className='text-gray-300 text-base tracking-wider leading-7'>
                        Exposure to the latest technologies and trends to inspire growth in businesses and startups.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true, amount:0.3}}
                    className='flex border-r border-gray-400 max-lg:border-none flex-col gap-4 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-4'>
                    
                    <h2 className='text-green-500 tracking-widest font-bold uppercase text-xl'>Entrepreneurial Growth</h2>
                    <p className='text-gray-300 text-base tracking-wider leading-7'>
                        A venue for startups to gain visibility, attract investors, and kickstart tech-based enterprises.
                    </p>
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:true, amount:0.3}}
                    className='flex flex-col gap-4 w-[23%] max-xl:w-full max-xl:items-center max-xl:justify-center h-fit p-4'>
                    
                    <h2 className='text-green-500 tracking-widest font-bold uppercase text-xl'>Economic Development</h2>
                    <p className='text-gray-300 text-base tracking-wider leading-7'>
                        The fair will drive investments and innovations that contribute to Lagos State's socio-economic growth.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  );
}
