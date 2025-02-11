"use client";
import React from "react";
import { FaFacebook, FaX, FaYoutube, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/assets/Tech fair 8.png";

export default function Footer() {
  return (
    <div className="h-fit py-16 w-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      
      {/* Footer Content Wrapper */}
      <div className="h-fit flex flex-wrap justify-between items-start w-[85%] mx-auto gap-10">
        
        {/* Logo and Social Media */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[30%] max-lg:w-full flex flex-col gap-4"
        >
          <Image src={logoImg} alt="Naija Tech Fair Logo" className="w-[180px] max-lg:w-[140px] aspect-auto" />
          <p className="italic text-green-500 text-xs">...where innovation meets impact</p>
          <h3 className="text-green-500 text-md font-bold tracking-widest uppercase">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://facebook.com/naijatechfair" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-green-500 hover:text-green-700 cursor-pointer" />
            </a>
            <a href="https://x.com/naijatechfair" target="_blank" rel="noopener noreferrer">
              <FaX size={20} className="text-green-500 hover:text-green-700 cursor-pointer" />
            </a>
            <a href="https://youtube.com/naijatechfair" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} className="text-green-500 hover:text-green-700 cursor-pointer" />
            </a>
            <a href="https://instagram.com/naijatechfair" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-green-500 hover:text-green-700 cursor-pointer" />
            </a>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="w-[30%] max-lg:w-full flex flex-col gap-3"
        >
          <h3 className="text-green-500 text-md font-bold uppercase tracking-widest">Contact Us</h3>
          <p className="text-white text-sm">For Inquiries: <br /> inquiry@naijatechfair.com</p>
          <p className="text-white text-sm">For Bookings: <br /> bookings@naijatechfair.com</p>
          <p className="text-white text-sm">For Sponsorship: <br /> sponsor@naijatechfair.com</p>
          <p className="text-white text-sm">For Partnership: <br /> partnership@naijatechfair.com</p>
          <p className="text-white text-sm">Call/WhatsApp: <br /> 08055529521</p>
        </motion.div>

        {/* Subscription Section */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-[30%] max-lg:w-full flex flex-col gap-3"
        >
          <h3 className="text-green-500 text-md font-bold uppercase tracking-widest">Subscribe To Our Newsletter</h3>
          <p className="text-white text-sm tracking-wider">
            Get the latest updates on this event, speaker line-ups, and tech showcases.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter email"
              className="p-2 h-[40px] w-[65%] rounded-l-full bg-gray-800 text-white focus:outline-none border border-green-500"
            />
            <button className="w-[25%] h-[40px] bg-green-500 text-white text-xs font-bold rounded-r-full hover:bg-green-600 transition-all">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[85%] mx-auto h-fit flex justify-between items-center max-lg:flex-col max-lg:mt-6 max-lg:w-[90%] pt-6 border-t border-gray-700">
        <p className="text-white text-xs">© 2025 Naija Tech Fair. All rights reserved.</p>
        <p className="text-white text-xs cursor-pointer">
          <Link href={"https://stripeedge.com/"} target="_blank">
            Organized by Naija Tech Fair Projects Ltd | Website Managed by <span className="text-green-500 hover:text-green-700">Stripe Edge Systems</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
