import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = ({ isDarkmode, setIsDarkmode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My work", href: "#work" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScroll
          ? "bg-white dark:bg-darkTheme bg-opacity-50 backdrop-blur-lg shadow-sm"
          : "dark:bg-transparent"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] h-full w-full overflow-hidden">
        <Image
          src={assets.header_bg_color}
          alt="navbar background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar container */}
      <div className="px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} className="w-28 cursor-pointer" alt="logo" />
        </a>

        {/* Desktop links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-70"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                className="font-Ovo font-bold text-black dark:text-white"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side buttons */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            className="cursor-pointer"
            onClick={() => setIsDarkmode((prev) => !prev)}
          >
            <Image
              src={isDarkmode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6 filter contrast-200 brightness-110"
            />
          </button>

          {/* Contact button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo font-boldfont-Ovo font-bold text-black dark:text-white"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3 " alt="arrow" />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkTheme z-50
          transform transition-transform duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={isDarkmode ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5"
          />
        </div>

        {/* Menu links */}
        <ul className="flex flex-col gap-6 px-8 pt-20 font-Ovo font-bold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-black dark:text-white hover:opacity-70 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
