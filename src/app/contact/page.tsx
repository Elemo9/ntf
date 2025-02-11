"use client";
import React from "react";
import { FaFacebook, FaX, FaYoutube, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "next/image";
import logoImg from "../../../public/assets/Tech fair 8.png";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">

      <div
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] w-full max-w-5xl"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #262626)',
        }}
      >
        {/* Logo and Social Media */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4 mb-8"
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

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-green-500 text-md font-bold uppercase tracking-widest">Contact Us</h3>
          <p className="text-gray-300 text-sm">For Inquiries: <br /> inquiry@naijatechfair.com</p>
          <p className="text-gray-300 text-sm">For Bookings: <br /> bookings@naijatechfair.com</p>
          <p className="text-gray-300 text-sm">For Sponsorship: <br /> sponsor@naijatechfair.com</p>
          <p className="text-gray-300 text-sm">For Partnership: <br /> partnership@naijatechfair.com</p>
          <p className="text-gray-300 text-sm">Call/WhatsApp: <br /> 08055529521</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-8 flex flex-col gap-3"
        >
          <h3 className="text-green-500 text-md font-bold uppercase tracking-widest">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 h-[40px] w-full rounded-full bg-gray-800 text-white focus:outline-none border border-green-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-2 h-[120px] w-full rounded-lg bg-gray-800 text-white focus:outline-none border border-green-500 resize-none"
              required
            />
            <button
              type="submit"
              className="w-[150px] position- center h-[40px] bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;