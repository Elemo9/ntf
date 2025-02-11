"use client";
import Image from "next/image";
import React from "react";
import techOneImage from "../../../public/assets/proxy-image (4).jpeg"; // Importing the image directly
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

export default function UnlockTheFutureOfInnovation() {
  return (
    <div className="flex w-full items-center justify-center h-fit max-lg:py-12 bg-black">
      <div className="flex h-[800px] w-[80%] max-lg:w-[85%] mx-auto justify-between max-lg:h-fit max-lg:flex-col max-lg:gap-8 max-lg:py-16">
        
        {/* Image Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[48%] h-full flex justify-center items-center max-lg:w-full"
        >
          <Image
            src={techOneImage}
            alt="Unlock The Future"
            width={800}
            height={800}
            className="object-cover rounded-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="w-[48%] h-full flex items-center justify-center max-lg:w-full">
          <div className="flex flex-col gap-8">
            <motion.h3
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl lg:text-5xl font-bold tracking-tight text-white max-lg:text-3xl"
            >
              Unlock The Future of Innovation!
            </motion.h3>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg lg:text-2xl font-medium leading-relaxed tracking-wide text-gray-300 max-lg:text-base"
            >
              The Naija Tech Fair 2025 is the ultimate platform where the brightest minds in technology, innovation, and 
              entrepreneurship come together to shape the future. Over the course of two exhilarating days, 
              Lagos State will transform into Nigeria's hub for cutting-edge technology, hosting innovators, students, startups, and industry leaders. 
              Whether you're a seasoned tech enthusiast, a student with groundbreaking ideas, or an investor seeking the next big thing, 
              LTF 2025 is the event that will take your vision to new heights.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
