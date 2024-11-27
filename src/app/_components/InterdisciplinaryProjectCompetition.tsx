"use client"
import Image from 'next/image'
import React from 'react'
import techOneImage from "../../../public/assets/WhatsApp Image 2024-11-03 at 08.50.03_ab747a73.jpg"
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

function InterdisciplinaryProjectCompetition() {
  return (
    <div className='flex w-full items-center justify-center h-fit max-lg:py-12'>
        <div className='flex h-[800px] w-[80%] max-lg:w-[85%] mx-auto justify-between max-lg:h-fit max-lg:flex-col max-lg:gap-8 max-lg:py-16'>
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
                        className='text-3xl tracking-wider font-extrabold max-lg:text-2xl'>Naija Tech Fair Interdisciplinary Project Competition</motion.h3>
                    <motion.p
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}} 
                        className='text-sm tracking-wider font-normal leading-8 max-lg:text-xs max-lg:leading-8'>Join the Naija Tech Fair's Interdisciplinary Project Competition, 
                        where university and polytechnic students from diverse fields come together to tackle real-world challenges through innovation. 
                        We're inviting universities to register teams of up to five students, encouraging collaborative projects that bridge technology, 
                        science, and other disciplines. Compete for mentorship, exposure, and the opportunity to showcase your solution at Naija Tech Fair! 
                        (Limited to Schools in Lagos state)

                    </motion.p>
                    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdx9ylRuhfGk0uLUyXE7tEhWmNSw_lgETMGQ3PvxB5sO4299g/viewform?usp=sf_link"} target='_blank'>
                        <button className='tracking-wide rounded-lg shadow-2xl mt-6 w-fit h-fit py-4 px-12 bg-yellow-500 text-white cursor-pointer hover:bg-green-500 transition-all duration-300'>Register Now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterdisciplinaryProjectCompetition