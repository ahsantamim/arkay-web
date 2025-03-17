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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close all dropdowns when toggling the menu
  };

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
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
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-input flex items-center justify-between h-16 px-8">
      {/* Arkay Logo */}
      <div className="text-black text-2xl font-bold">Arkay</div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <RxCross2 className="w-6 h-6" />
        ) : (
          <GiHamburgerMenu className="w-6 h-6" />
        )}
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden md:flex space-x-6 text-sm h-full items-center">
        <Link href="/" className="text-black hover:opacity-80">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("Services")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown("Services")}
            className="text-black hover:opacity-80 flex items-center"
          >
            Services <FaAngleDown className="ml-1 text-xs" />
          </button>
          {openDropdown === "Services" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 bg-white shadow-lg p-4"
            >
              <Link href="/services/design" className="block py-2">
                Design
              </Link>
              <Link href="/services/development" className="block py-2">
                Development
              </Link>
              <Link href="/services/consulting" className="block py-2">
                Consulting
              </Link>
            </motion.div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={() => setOpenDropdown("Projects")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown("Projects")}
            className="text-black hover:opacity-80 flex items-center"
          >
            Projects <FaAngleDown className="ml-1 text-xs" />
          </button>
          {openDropdown === "Projects" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 bg-white shadow-lg p-4"
            >
              <Link href="/services/design" className="block py-2">
                Indoor
              </Link>
              <Link href="/services/development" className="block py-2">
                Outdoor
              </Link>
              <Link href="/services/consulting" className="block py-2">
                Commercial
              </Link>
            </motion.div>
          )}
        </div>

        {/* Add other menu items similarly */}
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
              className="text-black hover:bg-gray-100 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => toggleDropdown("Projects")}
                className="text-black hover:bg-gray-100 py-2 w-full flex items-center justify-between"
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
                  <Link
                    href="/services/design"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Design
                  </Link>
                  <Link
                    href="/services/development"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Development
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                </motion.div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleDropdown("Services")}
                className="text-black hover:bg-gray-100 py-2 w-full flex items-center justify-between"
              >
                Services <FaAngleDown className="text-xs" />
              </button>
              {openDropdown === "Services" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="pl-4"
                >
                  <Link
                    href="/services/design"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Design
                  </Link>
                  <Link
                    href="/services/development"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Development
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                </motion.div>
              )}
            </div>
            <div>
              <button
                onClick={() => toggleDropdown("Services")}
                className="text-black hover:bg-gray-100 py-2 w-full flex items-center justify-between"
              >
                Services <FaAngleDown className="text-xs" />
              </button>
              {openDropdown === "Services" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="pl-4"
                >
                  <Link
                    href="/services/design"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Design
                  </Link>
                  <Link
                    href="/services/development"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Development
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                </motion.div>
              )}
            </div>
            {/* Add other menu items similarly */}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
