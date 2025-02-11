"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

import showcaseImg from "../../../public/assets/showcase.webp";
import studentImg from "../../../public/assets/studentproject.jpg";
import exhibitionImg from "../../../public/assets/exhibition.webp";
import handsOnImg from "../../../public/assets/hands-on.jpg";
import hackathonImg from "../../../public/assets/hackathon.jpg";
import pitchImg from "../../../public/assets/pitch.jpeg";
import networkingImg from "../../../public/assets/networking.webp";

export default function WhyAttendLTF2025() {
  const sections = [
    {
      title: "Student Project Spotlight",
      text: `Many brilliant student projects are left forgotten after graduation. 
        Naija Tech Fair is here to change that. We will provide a platform for 
        students to showcase their final year projects, giving them the exposure 
        they deserve. Projects will be reviewed and rated by experts, 
        helping students gain visibility and recognition in the tech ecosystem.`,
      img: studentImg,
    },
    {
      title: "Exhibitions & Demos",
      text: `Explore the latest in AI, IoT, blockchain, cybersecurity, and 
        much more as innovators demonstrate how tech is solving real-world challenges.`,
      img: exhibitionImg,
    },
    {
      title: "Hands-On Workshops & Seminars",
      text: `Dive deep into the latest trends with expert-led workshops on topics like AI, 
        cybersecurity, and entrepreneurship. These sessions are designed to empower 
        attendees with practical skills and knowledge to drive innovation forward.`,
      img: handsOnImg,
    },
    {
      title: "Hackathons & Competitions",
      text: `Engage in tech challenges designed to solve regional and global issues. 
        Test your problem-solving abilities, collaborate with others, and compete for prizes that can launch your next big idea.`,
      img: hackathonImg,
    },
    {
      title: "Pitch Your Startup",
      text: `Got an idea that can change the world? Seize the moment by pitching your 
        startup or tech solution to a panel of top investors and industry leaders, 
        and get the funding and partnerships to take your venture to the next level.`,
      img: pitchImg,
    },
    {
      title: "Networking & Collaboration",
      text: `Connect with industry leaders, investors, policymakers, and fellow innovators. 
        Build relationships that can lead to groundbreaking collaborations and opportunities for investment.`,
      img: networkingImg,
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col items-center bg-black gap-5 py-24">
      <motion.h2
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-6xl text-white font-bold max-lg:text-3xl uppercase tracking-widest"
      >
        Why Attend LTF 2025
      </motion.h2>

      {/* Showcase Your Innovation Section */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full mt-10"
      >
        <Image
          alt="Showcase Your Innovation"
          src={showcaseImg}
          className="object-cover w-full h-[350px] md:h-[500px] lg:h-[800px]"
          width={1920}
          height={800}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center p-10 max-lg:p-5">
          <div className="max-w-2xl text-left">
            <h2 className="text-white font-bold text-4xl max-lg:text-2xl tracking-wider uppercase bg-opacity-75 p-2 inline-block">
              Showcase Your Innovation
            </h2>
            <p className="font-normal text-lg text-white leading-8 tracking-widest mt-4 bg-opacity-75 p-4 inline-block max-lg:text-sm max-lg:leading-6">
              Join top tech companies and emerging startups as they present
              innovative solutions that could redefine industries and transform lives. 
              Students, too, will have a unique opportunity to elevate their final year 
              projects from the shelf to the spotlight, with the chance to gain recognition, mentorship, and funding.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="flex flex-col items-center justify-center w-[90%] max-lg:w-[85%] max-lg:gap-10 mt-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } max-lg:flex-col h-[400px] max-lg:h-fit justify-between w-full`}
          >
            <motion.div
              variants={fadeIn("up", 0.1 * (index + 1))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="w-[48%] max-lg:w-full h-full flex items-center justify-center"
            >
              <Image
                alt={section.title}
                src={section.img}
                className="w-full max-lg:w-full object-cover h-[350px] rounded-lg"
                width={700}
                height={350}
              />
            </motion.div>

            <div className="w-[2px] max-lg:hidden bg-gray-400 relative">
              <div className="rounded-full border-4 bg-green-500 w-[30px] absolute top-1/2 left-[-600%] h-[30px]"></div>
            </div>

            <motion.div
              variants={fadeIn("down", 0.1 * (index + 1))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col gap-5 w-[48%] max-lg:w-full justify-center py-6 h-full"
            >
              <h2 className="text-white font-semibold text-3xl max-lg:text-xl tracking-wider uppercase">
                {section.title}
              </h2>
              <p className="font-normal text-base text-white leading-8 tracking-widest w-[90%] max-lg:w-full">
                {section.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
