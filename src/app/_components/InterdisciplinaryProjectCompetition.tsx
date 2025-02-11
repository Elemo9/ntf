"use client";
import Image from 'next/image';
import React from 'react';
import techOneImage from "../../../public/assets/inter.jpg";
import { motion } from "framer-motion";
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
          viewport={{ once: false, amount: 0.3 }}
          className='w-[48%] h-full flex justify-center items-center max-lg:w-full'>
          <Image src={techOneImage} alt='' width={800} height={800} />
        </motion.div>
        <div className='w-[48%] h-full flex items-center justify-center max-lg:w-full'>
          <div className='flex flex-col gap-4'>
            <motion.h3
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className='text-4xl tracking-wide font-extrabold max-lg:text-3xl'>
              Naija Tech Fair Interdisciplinary Project Competition
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className='text-base tracking-wide font-bold leading-8 max-lg:text-sm max-lg:leading-8'>
              Join the Naija Tech Fair's Interdisciplinary Project Competition, where university and polytechnic students from diverse fields come together to tackle real-world challenges through innovation.
               We’re inviting universities to register teams of up to five students, encouraging collaborative projects that bridge technology, science, and other disciplines. Compete for mentorship, exposure,
                and the opportunity to showcase your solution at Naija Tech Fair! (Limited to Schools in Lagos state)
            </motion.p>
            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdx9ylRuhfGk0uLUyXE7tEhWmNSw_lgETMGQ3PvxB5sO4299g/viewform?usp=sf_link"} target='_blank'>
              <button
                className="transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-700 hover:scale-105 hover:text-yellow-400 hover:glow bg-black"
                onClick={() => {}}
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterdisciplinaryProjectCompetition;
