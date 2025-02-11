"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Link from "next/link";

function PitchYourProduct() {
  return (
    <div
      className="flex w-full items-center justify-center h-fit py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      <div className="flex max-lg:flex-col h-fit w-[80%] max-lg:w-[85%] mx-auto justify-between relative z-10">
        <div className="w-full max-lg:w-full h-full flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl tracking-wider max-lg:text-2xl font-extrabold text-white"
            >
              Pitch Your Product or Startup
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="text-base tracking-wider font-normal leading-8 text-gray-300"
            >
              Ready to take your innovation to the next level? Pitch your project to a panel of 
              top investors and industry professionals at LTF 2025. This is 
              your chance to attract funding, mentorship, and valuable partnerships.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 rounded-lg shadow-lg w-fit h-[150px] p-6 flex flex-col gap-2 relative overflow-hidden transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold tracking-wider text-green-400">
                Pitch day
              </h2>
              <p className="tracking-wider text-sm text-gray-300">
                April 25th, 2025 | Slots: Limited
              </p>
              <div className="w-[50px] h-[50px] rounded-full bg-green-500 absolute bottom-[-10px] right-[-10px] z-20 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">4</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSeKlYdasKIHZ3hXrmuWhlOS7jYmeXeFRxecgyQiCo2OTjOiSg/viewform?usp=sf_link"} target="_blank">
                <button className="transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400">
                  Register Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PitchYourProduct;
