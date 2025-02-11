"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import stripeEdgeLogo from "../../../public/assets/stripe.png";

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] w-full max-w-4xl"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #262626)",
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-[#00ff7f]">Our Partner(s)</h1>
          <p className="text-gray-300 text-center">
            We are proud to collaborate with industry leaders who share our vision
            for innovation and excellence.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg w-full max-w-md">
            <div className="w-[150px] h-[150px] flex items-center justify-center">
              <Image
                src={stripeEdgeLogo}
                alt="Stripe Edge Systems Limited Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#00ff7f]">
              Stripe Edge Systems Limited
            </h2>
            <p className="text-gray-300 text-center">
              Limitless Possibilities
            </p>
            <a
              href="https://stripeedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-green-500 text-white text-sm font-bold rounded-full hover:bg-green-600 transition-all"
            >
              Visit Website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnersPage;