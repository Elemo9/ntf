"use client";
import Image from 'next/image'
import React from 'react'
import showcaseImg from "../../../public/assets/WhatsApp Image 2024-10-09 at 12.53.42_aed98bd9.jpg";
import studentImg from "../../../public/assets/WhatsApp Image 2024-10-08 at 18.40.19_0db63cc4.jpg";
import exhibitionImg from "../../../public/assets/exhibitionanddemosImage.webp"
import exhibitionImg2 from "../../../public/assets/WhatsApp Image 2024-10-08 at 16.28.34_dfcea667.jpg"
import handsOnImg from "../../../public/assets/WhatsApp Image 2024-10-09 at 12.40.27_98d62fa2.jpg";
import hackathonImg from "../../../public/assets/WhatsApp Image 2024-10-08 at 15.48.02_75a78c30.jpg";
import pitchImg from "../../../public/assets/proxy-image.jpeg";
import networkingImg from "../../../public/assets/WhatsApp Image 2024-10-09 at 12.44.43_56be49fb.jpg";
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';

export default function WhyAttendOTF2025() {
  return (
    <div className='w-full h-fit flex flex-col items-center bg-black gap-5 py-24'>
        <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className='text-6xl text-white font-bold max-lg:text-3xl uppercase tracking-widest'>Why Attend OTF 2025</motion.h2>
        <div className='flex flex-col items-center justify-center w-[90%] max-lg:w-[85%] max-lg:gap-10 mt-20 '>
           
            {/* Showcase Your Innovation */}
            <div className='flex max-lg:flex-col h-[400px] max-lg:h-fit justify-between w-full'>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}                     
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={studentImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                    
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>                

                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Showcase Your Innovation</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Join top tech companies and emerging startups 
                        as they present innovative solutions that could redefine industries and transform lives. 
                        Students, too, will have a unique opportunity to elevate their final year 
                        projects from the shelf to the spotlight, with the chance to gain recognition, mentorship and funding.
                    </p>
                </motion.div>

            </div>
            
            {/* Student Project Spotlight */}
            <div className='flex max-lg:flex-col-reverse h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Student Project Spotlight</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Many brilliant student projects are left forgotten after graduation. 
                        Naija Tech Fair is here to change that. We will provide a platform for 
                        students to showcase their final year projects, giving them the exposure 
                        they deserve. Projects will be reviewed and rated by experts, 
                        helping students gain visibility and recognition in the tech ecosystem.
                    </p>
                </motion.div>
                
                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>                
                
                <motion.div 
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={exhibitionImg2} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>
            </div>
            
            {/* Exhibitions & Demos */}
            <div className='flex max-lg:flex-col h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div
                    variants={fadeIn("right", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={exhibitionImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div> 

                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Exhibitions & Demos</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Explore the latest in AI, IoT, blockchain, cybersecurity, and 
                        much more as innovators demonstrate how tech is solving real-world challenges.
                    </p>
                </motion.div>

            </div>
            {/* Hands-On Workshops & Seminars */}
            <div className='flex max-lg:flex-col-reverse h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div 
                    variants={fadeIn("right", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Hands-On Workshops & Seminars</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Dive deep into the latest trends with expert-led workshops on topics like AI, 
                        cybersecurity, and entrepreneurship. These sessions are designed to empower 
                        attendees with practical skills and knowledge to drive innovation forward.
                    </p>
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>

                <motion.div 
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={handsOnImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>

            </div>
            {/* Hackathons & Competitions */}
            <div className='flex max-lg:flex-col h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div 
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={hackathonImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>  

                <motion.div 
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Hackathons & Competitions</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Engage in tech challenges designed to solve regional and global issues. 
                        Test your problem-solving abilities, collaborate with others, and compete for prizes that can launch your next big idea.
                    </p>
                </motion.div>
            </div>
            {/* Pitch our Startup */}
            <div className='flex max-lg:flex-col-reverse h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Pitch Your Startup</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                    Got an idea that can change the world? Seize the moment by pitching your 
                    startup or tech solution to a panel of top investors and industry leaders, 
                    and get the funding and partnerships to take your venture to the next level.
                    </p>
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>      

                <motion.div 
                    variants={fadeIn("down", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={showcaseImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>
            </div>
            {/* Networking & Collaboration */}
            <div className='flex max-lg:flex-col h-[400px] max-lg:h-fit justify-between w-full'>
                
                <motion.div 
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='w-[48%] max-lg:w-full h-full flex items-center justify-center'>
                    <Image alt='' src={networkingImg} className='w-[90%] max-lg:w-full object-cover h-[350px] '/>
                </motion.div>

                <div className='w-[2px] max-lg:hidden bg-gray-400 relative'>
                    <div className='rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]'></div>
                </div>   

                <motion.div 
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}
                    className='flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full'>
                    <h2 className='text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase'>Networking & Collaboration</h2>
                    <p className='font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full'>
                        Connect with industry leaders, investors, policymakers, and fellow innovators. 
                        Build relationships that can lead to groundbreaking collaborations and opportunities for investment.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
