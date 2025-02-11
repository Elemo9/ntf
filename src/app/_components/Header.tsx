"use client";
import React, { useState, useCallback } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/assets/Tech fair 8.png";
import { menuItems, MenuItem } from "../config/menuItems";

export default function Header() {
  const [active, setActive] = useState<MenuItem["name"]>("HOME");
  const [openNav, setOpenNav] = useState(false);

  const handleClick = useCallback((tab: MenuItem["name"]) => {
    setActive(tab);
    setOpenNav(false);
  }, []);

  const toggleNav = useCallback(() => {
    setOpenNav((prev) => !prev);
  }, []);

  return (
    <nav
      className="w-full h-[80px] max-lg:h-[80px] pb-4 max-lg:pb-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-center justify-center sticky top-0 left-0 z-50"
      aria-label="Main navigation"
    >
      <div className="flex justify-between w-[90%] max-lg:w-[95%] mx-auto h-fit items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex flex-col h-fit w-fit focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          onClick={() => handleClick("HOME")}
          aria-label="Go to homepage"
        >
          <Image
            src={logoImg}
            alt="Naija Tech Fair Logo"
            className="w-[150px] max-lg:w-[120px] aspect-auto cursor-pointer"
            priority 
            onError={(e) => {
              console.error("Failed to load logo:", e);
            }}
          />
          <p className="text-xs italic text-green-500 mt-[-20px] max-lg:mt-[-15px] max-lg:text-[10px] lg:flex">
            ..Where Innovation Meets Impact
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="text-white flex gap-6 h-fit w-fit tracking-wide text-sm max-xl:text-xs max-xl:hidden mt-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => handleClick(item.name)}
                className={`${
                  active === item.name ? "text-green-500" : "text-white"
                } cursor-pointer hover:text-green-500 tracking-wider font-bold focus:outline-none focus:ring-2 focus:ring-green-500 rounded transition-colors duration-200`}
                aria-current={active === item.name ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ticket Button and Hamburger Menu */}
        <div className="h-fit w-fit max-sm:text-xs max-md:text-sm max-lg:text-lg max-xl:text-xl flex items-center gap-4 mt-5">
          <button
            className="transition-all duration-300 text-white py-1 px-2 font-bold text-xs rounded-3xl border-2 border-green-500 hover:scale-105 hover:text-yellow-400 hover:glow focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Get tickets"
          >
            GET TICKETS
          </button>
          <button
            onClick={toggleNav}
            className="cursor-pointer hidden max-xl:flex focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
            aria-label="Toggle navigation menu"
          >
            {openNav ? (
              <FaTimes color="white" size={27} aria-hidden="true" />
            ) : (
              <GiHamburgerMenu color="white" size={25} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      {openNav && (
        <div
          className="w-full absolute top-[80px] left-0 flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 gap-10 border-t-[0.5px] border-gray-500 py-10 transition-all duration-300"
          role="menu"
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.name)}
              className={`text-center uppercase tracking-widest ${
                active === item.name ? "text-green-500 glow" : "text-white"
              } xl:hidden cursor-pointer hover:text-green-500 hover:glow focus:outline-none focus:ring-2 focus:ring-green-500 rounded transition-colors duration-200`}
              role="menuitem"
              aria-current={active === item.name ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}