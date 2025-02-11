"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

export default function StayUpdated() {
  return (
    <div className="h-fit py-16 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="flex h-fit p-14 max-lg:px-6 max-lg:py-8 w-[80%] max-lg:w-[85%] max-lg:flex-col max-lg:gap-6 mx-auto justify-between bg-white rounded-lg shadow-2xl">
        
        {/* Left Section */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-[48%] max-lg:w-full flex flex-col gap-6"
        >
          <h3 className="uppercase tracking-widest text-5xl max-lg:text-2xl font-bold text-green-600">
            Stay Updated
          </h3>
          <p className="tracking-wider text-xl max-lg:text-lg font-semibold text-gray-700">
            Subscribe to our newsletter for the latest updates, 
            including schedules, speakers, and key announcements. 
            Don't miss out on the opportunity to be part of 
            the future of technology in Lagos State.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex w-[48%] max-lg:w-full h-fit gap-4 flex-col bg-black p-10 max-lg:p-6 rounded-lg shadow-2xl"
        >
          <h3 className="tracking-widest text-white text-4xl max-lg:text-xl font-bold">
            SEND US A MESSAGE
          </h3>
          <input
            className="p-4 rounded-md max-lg:p-2 max-lg:text-sm border border-gray-300"
            type="text"
            placeholder="Your Name..."
          />
          <input
            type="email"
            className="p-4 rounded-md max-lg:p-2 max-lg:text-sm border border-gray-300"
            placeholder="Your Email..."
          />
          <textarea
            placeholder="Message"
            className="p-4 rounded-md max-lg:p-2 h-32 max-lg:text-sm border border-gray-300"
          ></textarea>
          <button className="w-fit h-fit bg-green-500 rounded-3xl text-white hover:bg-green-600 duration-300 transition-all py-3 px-6 text-lg tracking-wider uppercase shadow-2xl">
            Submit Message
          </button>
        </motion.div>
      </div>
    </div>
  );
}
