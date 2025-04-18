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
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-input ">
      {/* Container with max-w-7xl */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Arkay Logo */}
        <div className="flex items-center mt-1">
          <Link href={"/"}>
            <img
              src="/logonew.png"
              alt="Company Logo"
              width={70}
              height={70}
              className="transform scale-110"
            />
          </Link>
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
        <div className="hidden md:flex flex-grow justify-center  font-semibold space-x-4 text-sm h-full items-end">
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
                    How we calculate our audiences
                  </Link>
                  <Link
                    href="/about/our-story"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Our story
                  </Link>
                  <Link
                    href="/about/our-work"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/about/picture-of-the-screen"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture Of the Screen
                  </Link>
                  <Link
                    href="/about/picture-of-beautification-projects"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture Of beautification projects
                  </Link>
                  <Link
                    href="/about/picture-of-factory-&-few-screens"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture Of factory & few screens
                  </Link>
                  <Link
                    href="/about/picture-&-vidoes-of-indoor-projects"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Picture & videos of indoor projects
                  </Link>
                  <Link
                    href="/about/meet-the-team"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Meet the team
                  </Link>
                  <Link
                    href="/about/client-gallery"
                    className="block w-full text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                  >
                    Client gallery
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
            href="/sme-advertisement"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            SME Adertising
          </Link>
          <Link
            href="/career"
            className="text-black hover:bg-blue-500 hover:text-white h-full flex items-center px-4 transition duration-200"
          >
            Career
          </Link>
        </div>

        {/* Contact Button for Desktop */}
        <div className="hidden md:flex h-full">
          <button className="bg-blue-600 cursor-pointer text-white px-6 h-full hover:bg-gray-900 transition duration-200 flex items-center">
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

              {/* About Us Dropdown */}
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
                    className="pl-4 space-y-2"
                  >
                    {[
                      { href: "/about", label: "What we do" },
                      {
                        href: "/about/how-we-calculate-our-audience",
                        label: "How we calculate our audiences",
                      },
                      { href: "/about/our-story", label: "Our story" },
                      { href: "/about/our-work", label: "Our Work" },
                      {
                        href: "/about/picture-of-the-screen",
                        label: "Picture Of the Screen",
                      },
                      {
                        href: "/about/picture-of-beautification-projects",
                        label: "Picture Of beautification projects",
                      },
                      {
                        href: "/about/picture-of-factory-&-few-screens",
                        label: "Picture Of factory & few screens",
                      },
                      {
                        href: "/about/picture-&-vidoes-of-indoor-projects",
                        label: "Picture & videos of indoor projects",
                      },
                      { href: "/about/meet-the-team", label: "Meet the team" },
                      {
                        href: "/about/client-gallery",
                        label: "Client gallery",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Outdoor Advertising Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("Outdoor Advertising")}
                  className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 w-full flex items-center justify-between transition duration-200"
                >
                  Outdoor Advertising <FaAngleDown className="text-xs" />
                </button>
                {openDropdown === "Outdoor Advertising" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 space-y-2"
                  >
                    {[
                      { href: "/outdoor/locations", label: "All Locations" },
                      {
                        href: "/outdoor/led-on-wheels",
                        label: "LED on Wheels",
                      },
                      { href: "/outdoor/formats", label: "Formats" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm hover:bg-blue-500 hover:text-white px-4 py-2 transition duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Other Simple Links */}
              <Link
                href="/indoor-advertising"
                className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Indoor Advertising
              </Link>
              <Link
                href="/sme-advertisement"
                className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SME Advertising
              </Link>
              <Link
                href="/career"
                className="text-black hover:bg-blue-500 hover:text-white py-2 px-4 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
