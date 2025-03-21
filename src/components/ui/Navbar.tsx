"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close all dropdowns when toggling the menu
  };

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleMouseEnter = (item: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // Adjust the delay as needed
    setHoverTimeout(timeout);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-input py-0.5">
      {/* Container with max-w-7xl */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Arkay Logo */}
        <div className="flex items-center mt-1">
          <img
            src="/logonew.png"
            alt="Company Logo"
            width={70}
            height={70}
            className="transform scale-110"
          />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <RxCross2 className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex flex-grow justify-center space-x-4 text-sm h-full items-center">
          <Link
            href="/"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            Home
          </Link>
          {/*About*/}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("About Us")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("About Us")}
              className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200 cursor-pointer"
            >
              About Us <FaAngleDown className="ml-1 text-xs" />
            </button>
            {openDropdown === "About Us" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 bg-white shadow-lg min-w-[200px]"
              >
                <div className="py-2 space-y-2">
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    What we do
                  </Link>
                  <Link
                    href="/about/how-we-calculate-our-audience"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    How we measure Audience
                  </Link>
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Our story
                  </Link>
                  <Link
                    href="/about/picture-of-the-screen"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture Of the Screen
                  </Link>
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture Of beautification projects
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          {/*Outdoor Advertising*/}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("Outdoor Advertising")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("Outdoor Advertising")}
              className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200 cursor-pointer"
            >
              Outdoor Advertising <FaAngleDown className="ml-1 text-xs" />
            </button>
            {openDropdown === "Outdoor Advertising" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 bg-white shadow-lg min-w-[200px]"
              >
                <div className="py-2 space-y-2">
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    All locations
                  </Link>
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    LED on Wheels
                  </Link>
                  <Link
                    href="/about"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Formats
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
          {/*Project*/}

          <Link
            href="/"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            Indoor Advertising
          </Link>

          <Link
            href="/"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            SME Adertising
          </Link>
          <Link
            href="/"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            Career
          </Link>
        </div>

        {/* Contact Button for Desktop */}
        <div className="hidden md:flex h-full">
          <button className="border-2 border-[#616467] text-black px-4 py-2 cursor-pointer bg-transparent hover:bg-black hover:text-white hover:border-black transition duration-200">
            Contact
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden"
            ref={mobileMenuRef}
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => toggleDropdown("About Us")}
                  className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 w-full flex items-center justify-between transition duration-200"
                >
                  About Us <FaAngleDown className="text-xs" />
                </button>
                {openDropdown === "About Us" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="pl-4"
                  >
                    <div className="space-y-2">
                      <Link
                        href="/about/what-we-do"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        What we do
                      </Link>
                      <Link
                        href="/about/how-we-measure-audience"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        How we measure Audience
                      </Link>
                      <Link
                        href="/about/our-story"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our story
                      </Link>
                      <Link
                        href="/about/picture-of-the-screen"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Picture Of the Screen
                      </Link>
                      <Link
                        href="/about/picture-of-beautification-projects"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Picture Of beautification projects
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleDropdown("Projects")}
                  className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 w-full flex items-center justify-between transition duration-200"
                >
                  Projects <FaAngleDown className="text-xs" />
                </button>
                {openDropdown === "Projects" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="pl-4"
                  >
                    <div className="space-y-2">
                      <Link
                        href="/projects/indoor"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Indoor
                      </Link>
                      <Link
                        href="/projects/outdoor"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Outdoor
                      </Link>
                      <Link
                        href="/projects/commercial"
                        className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Commercial
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
              {/* Contact Button for Mobile */}
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
