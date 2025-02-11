"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

function SponsorshipOpportunities() {
  return (
    <div className='h-fit py-36 w-full items-center justify-center bg-black'>
        <div className='flex flex-col items-center max-lg:items-start justify-center max-lg:justify-start h-[270px] max-lg:flex-col max-lg:gap-6 w-[90%] max-lg:w-[85%] mx-auto'>

            <motion.div 
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:true, amount:0.3}}
                className='w-[100%] h-full max-lg:w-full flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-6xl font-bold tracking-widest text-green-500 uppercase max-lg:text-3xl'>Sponsorship & Partnership Opportunities</h2>
                <p className='leading-8 tracking-widest text-lg font-bold text-white max-lg:text-sm max-lg:leading-8 lg:text-center max-lg:self-start'>
                    Align your brand with the largest tech fair in Lagos State 
                    and support the advancement of technology in the region. 
                    Sponsorship packages provide unique opportunities for visibility, 
                    collaboration, and thought leadership, 
                    while fostering youth empowerment and entrepreneurial growth.
                </p>
                <p className='leading-8 tracking-widest text-lg font-bold text-white max-lg:text-sm max-lg:leading-8 max-lg:self-start'>To Apply to Pitch Your Project or Startup with Industry Leaders and Investors, Fill the form below: </p>
                <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeKlYdasKIHZ3hXrmuWhlOS7jYmeXeFRxecgyQiCo2OTjOiSg/viewform?usp=sf_link"} target='_blank' className='w-fit h-fit max-lg:self-start'>
                    <button className='transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400'>
                        Contact Us             
                    </button>                
                </Link>
            </motion.div>
        </div>
    </div>
  );
}

export default SponsorshipOpportunities;
