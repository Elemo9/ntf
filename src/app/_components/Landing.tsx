"use client";
import React from "react";
import Image from "next/image";
import enterprenuerialImg from "../../../public/assets/pexels-padrinan-3785931.jpg";

export default function Landing() {
  return (
    <div className="w-full h-[70vh] relative">
  
      <div className="h-full w-full flex flex-col gap-9 p-12 bg-transparent items-center justify-center absolute top-0 z-10 animate-breathing">
        <h2 className="text-5xl lg:text-7xl font-extrabold tracking-widest text-white text-center">
          Welcome to <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-400 to-deepGreen animate-textGlow drop-shadow-lg">
            NAIJA{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-deepGreen animate-textGlow drop-shadow-lg">
            TECH{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-deepGreen animate-textGlow drop-shadow-lg">
            FAIR{" "}
          </span>
          (Lagos Edition) 2025
        </h2>
        <p className="text-lg lg:text-3xl font-semibold tracking-wide text-white text-center">
          Date: April 24th to 25th | Location: Lagos State, Nigeria
        </p>
      </div>

      <Image
        src={enterprenuerialImg}
        alt="Naija Tech Fair Background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        priority
      />
    </div>
  );
}
