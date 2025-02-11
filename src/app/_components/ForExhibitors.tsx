"use client";
import Image from 'next/image';
import React from 'react';
import exhibitionImg from "../../../public/assets/bookstand.png";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

export default function ForExhibitors() {
  return (
    <div className="relative h-fit py-24 w-full flex items-center justify-center bg-black">
      {/* Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500"></div>

      <div className="flex max-lg:flex-col max-lg:gap-6 h-fit justify-between w-[85%] max-lg:w-[90%] mx-auto">
        
        {/* Text Section */}
        <div className="w-[48%] max-lg:w-full flex flex-col gap-6">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-semibold tracking-widest uppercase text-white max-lg:text-3xl"
          >
            For Exhibitors: Book Your Stand
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="leading-[1.8rem] text-lg font-medium text-white max-lg:text-base tracking-wide mb-8"
          >
            Don't miss the chance to showcase your tech products and
            services to thousands of attendees, including potential investors and partners.
            Secure your stand and get maximum visibility during this landmark event.
          </motion.p>

          <div className="flex gap-4 items-center">
            <MdPlayArrow size={40} color="green" />
            <p className="text-lg font-medium text-white tracking-wide max-lg:text-base">
              Early Bird Discount: Available until March 20, 2025
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <MdPlayArrow size={40} color="green" />
            <p className="text-lg font-medium text-white tracking-wide max-lg:text-base">
              Stand Sizes & Packages: Various options to fit your brand's needs
            </p>
          </div>

          <div className="mt-6">
            <Link href="/book">
              <button className="transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400 hover:bg-green-600">
                Book a Stand
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center w-[50%] max-lg:w-full"
        >
          <Image
            src={exhibitionImg}
            alt="Exhibition Stand"
            className="w-[90%] object-cover aspect-auto"
          />
        </motion.div>

      </div>
    </div>
  );
}