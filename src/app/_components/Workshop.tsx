"use client";
import React, { useState } from "react";
import Image from "next/image";
import workshopImg from "../../../public/assets/workshop.jpg";

export default function Workshop() {
  const [read_all, set_read_all] = useState(false);

  const handle_Read_all = () => {
    set_read_all(!read_all);
  };

  return (
    <div className="w-full h-fit bg-black flex items-center justify-center">
      <div className="w-[90%] justify-between flex max-lg:flex-col-reverse max-lg:gap-8 h-screen max-lg:h-fit max-lg:py-16">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-white w-[50%] h-full justify-center max-lg:w-full">
          <h3 className="text-5xl max-lg:text-3xl font-bold">
            Workshop 1: <span className="text-green-500">Engine Building</span>
          </h3>
          <p className="text-base lg:text-lg font-medium leading-8 tracking-wide">
            At the Naija Tech Fair Lagos edition, we're excited to introduce a unique hands-on workshop
            where children can experience the thrill of engineering by assembling a real car engine.
            This interactive session is designed to spark curiosity and passion for STEM fields in young minds, offering them a
            chance to understand the inner workings of automotive technology.
          </p>
          <div className="flex items-start">
            {!read_all && (
              <button
                className="transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400 hover:glow"
                onClick={handle_Read_all}
              >
                Read More
              </button>
            )}
          </div>

          {read_all && (
            <>
              <p className="text-base lg:text-lg font-medium leading-8 tracking-wide transition-all duration-300">
                Guided by expert instructors, participants will learn the basics of mechanical engineering, teamwork,
                and problem-solving as they piece together engine components. This workshop not only builds technical
                skills but also nurtures creativity, critical thinking, and a love for innovation.
              </p>
              <p className="text-base lg:text-lg font-medium leading-8 tracking-wide transition-all duration-300">
                Join us at Naija Tech Fair to give children an unforgettable experience that
                could ignite their journey into the world of technology and engineering!
              </p>
              <div className="flex items-start">
                <button
                  className="transition-all duration-300 text-white py-2 px-5 font-bold text-sm rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400 hover:glow"
                  onClick={handle_Read_all}
                >
                  Read Less
                </button>
              </div>
            </>
          )}
        </div>

        {/* Image Section */}
        <div className="h-full w-[50%] max-lg:w-full items-center flex justify-center">
          <Image
            src={workshopImg}
            alt="Tech Fair Workshop"
            className="w-[600px] aspect-auto"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
