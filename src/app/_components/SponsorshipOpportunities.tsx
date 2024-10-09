"use client";
import Image from 'next/image'
import React from 'react'
import sponsorshipImg from "../../../public/assets/proxy-image (1).jpeg";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

function SponsorshipOpportunities() {
  return (
    <div className='h-fit py-36 w-full items-center justify-center bg-black'>
        <div className='flex h-[800px] max-lg:flex-col max-lg:gap-6 w-[80%] max-lg:w-[85%] justify-between mx-auto'>
            
            <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[50%] flex items-center justify-center max-lg:w-full'>
                <Image src={sponsorshipImg} alt='' className='w-[100%] aspect-auto'/>
            </motion.div>

            <motion.div 
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-[48%] h-full max-lg:w-full flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-4xl font-bold tracking-widest text-red-500 uppercase max-lg:text-xl'>Sponsorship & Partnership Opportunities</h2>
                <p className='leading-8 tracking-widest text-lg text-white max-lg:text-sm max-lg:leading-8 '>
                    Align your brand with the largest tech fair in Osun State 
                    and support the advancement of technology in the region. 
                    Sponsorship packages provide unique opportunities for visibility, 
                    collaboration, and thought leadership, 
                    while fostering youth empowerment and entrepreneurial growth.
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default SponsorshipOpportunities