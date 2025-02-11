"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Link from "next/link";

const MediaPage: React.FC = () => {
  const handleClose = () => {
    // Redirect to homepage or close the tab/window
    window.location.href = "/"; // Redirect to homepage
    // window.close(); // Close the current tab/window (may not work in all browsers)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] w-full max-w-2xl text-center"
        style={{
          background: "linear-gradient(145deg, #1a1a1a, #262626)",
        }}
      >
        <h1 className="text-4xl font-bold text-[#00ff7f] mb-4">
          Media Page
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          We're working on something exciting! Check back soon for updates.
        </p>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="px-6 py-2 bg-green-500 text-white text-sm font-bold rounded-full hover:bg-green-600 transition-all"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default MediaPage;