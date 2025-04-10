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
                    href="/about/picture-of-beautiful-projects"
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
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
//     null
//   );

//   const aboutLinks = [
//     { href: "/about", label: "What we do" },
//     {
//       href: "/about/how-we-calculate-our-audience",
//       label: "How we calculate our audiences",
//     },
//     { href: "/about/our-story", label: "Our story" },
//     { href: "/about/our-work", label: "Our Work" },
//     { href: "/about/picture-of-the-screen", label: "Picture Of the Screen" },
//     {
//       href: "/about/picture-of-beautiful-projects",
//       label: "Picture Of beautification projects",
//     },
//     {
//       href: "/about/picture-of-factory-&-few-screens",
//       label: "Picture Of factory & few screens",
//     },
//     {
//       href: "/about/picture-&-vidoes-of-indoor-projects",
//       label: "Picture & videos of indoor projects",
//     },
//     { href: "/about/meet-the-team", label: "Meet the team" },
//     { href: "/about/client-gallery", label: "Client gallery" },
//   ];

//   const outdoorLinks = [
//     { href: "/outdoor/all-locations", label: "All locations" },
//     { href: "/outdoor/led-on-wheels", label: "LED on Wheels" },
//     { href: "/outdoor/formats", label: "Formats" },
//   ];

//   const toggleMobileDropdown = (dropdown: string) => {
//     setMobileOpenDropdown(mobileOpenDropdown === dropdown ? null : dropdown);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-input border-b">
//       <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="/logonew.png"
//             alt="Company Logo"
//             width={70}
//             height={70}
//             className="transform scale-110"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-grow justify-center h-full">
//           <NavigationMenu>
//             <NavigationMenuList className="h-full gap-0">
//               <NavigationMenuItem className="h-full">
//                 <Link href="/" legacyBehavior passHref>
//                   <NavigationMenuLink className="group inline-flex h-full items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-black hover:text-white data-[active]:bg-black data-[state=open]:bg-black rounded-none">
//                     Home
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem className="h-full">
//                 <NavigationMenuTrigger className="h-full hover:bg-black hover:text-white data-[state=open]:bg-black data-[state=open]:text-white rounded-none">
//                   About Us
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="rounded-none border">
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="w-[400px] bg-white"
//                   >
//                     {aboutLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className="block p-3 text-sm hover:bg-black hover:text-white border-b last:border-b-0"
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem className="h-full">
//                 <NavigationMenuTrigger className="h-full hover:bg-black hover:text-white data-[state=open]:bg-black data-[state=open]:text-white rounded-none">
//                   Outdoor Advertising
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="rounded-none border">
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="w-[300px] bg-white"
//                   >
//                     {outdoorLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className="block p-3 text-sm hover:bg-black hover:text-white border-b last:border-b-0"
//                       >
//                         {link.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem className="h-full">
//                 <Link href="/indoor-advertising" legacyBehavior passHref>
//                   <NavigationMenuLink className="group inline-flex h-full items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-black hover:text-white data-[active]:bg-black data-[state=open]:bg-black rounded-none">
//                     Indoor Advertising
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem className="h-full">
//                 <Link href="/sme-advertising" legacyBehavior passHref>
//                   <NavigationMenuLink className="group inline-flex h-full items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-black hover:text-white data-[active]:bg-black data-[state=open]:bg-black rounded-none">
//                     SME Advertising
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>

//               <NavigationMenuItem className="h-full">
//                 <Link href="/career" legacyBehavior passHref>
//                   <NavigationMenuLink className="group inline-flex h-full items-center justify-center px-4 text-sm font-medium transition-colors hover:bg-black hover:text-white data-[active]:bg-black data-[state=open]:bg-black rounded-none">
//                     Career
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Desktop Contact Button */}
//         <div className="hidden md:flex h-full">
//           <Button className="bg-black hover:bg-black/90 h-full rounded-none px-6 text-white">
//             Contact
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="rounded-none">
//                 {isOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] p-0 rounded-none">
//               <div className="flex flex-col h-full">
//                 <div className="flex-1 overflow-y-auto">
//                   <Link
//                     href="/"
//                     className="block w-full p-4 text-left border-b hover:bg-black hover:text-white"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Home
//                   </Link>

//                   <div className="border-b">
//                     <button
//                       className="flex w-full items-center justify-between p-4 text-left hover:bg-black hover:text-white"
//                       onClick={() => toggleMobileDropdown("about")}
//                     >
//                       <span>About Us</span>
//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform ${
//                           mobileOpenDropdown === "about" ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {mobileOpenDropdown === "about" && (
//                       <div className="bg-white">
//                         {aboutLinks.map((link) => (
//                           <Link
//                             key={link.href}
//                             href={link.href}
//                             className="block w-full p-4 pl-8 text-sm hover:bg-black hover:text-white border-b"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <div className="border-b">
//                     <button
//                       className="flex w-full items-center justify-between p-4 text-left hover:bg-black hover:text-white"
//                       onClick={() => toggleMobileDropdown("outdoor")}
//                     >
//                       <span>Outdoor Advertising</span>
//                       <ChevronDown
//                         className={`h-4 w-4 transition-transform ${
//                           mobileOpenDropdown === "outdoor" ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {mobileOpenDropdown === "outdoor" && (
//                       <div className="bg-white">
//                         {outdoorLinks.map((link) => (
//                           <Link
//                             key={link.href}
//                             href={link.href}
//                             className="block w-full p-4 pl-8 text-sm hover:bg-black hover:text-white border-b"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <Link
//                     href="/indoor-advertising"
//                     className="block w-full p-4 text-left border-b hover:bg-black hover:text-white"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Indoor Advertising
//                   </Link>

//                   <Link
//                     href="/sme-advertising"
//                     className="block w-full p-4 text-left border-b hover:bg-black hover:text-white"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     SME Advertising
//                   </Link>

//                   <Link
//                     href="/career"
//                     className="block w-full p-4 text-left border-b hover:bg-black hover:text-white"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Career
//                   </Link>
//                 </div>

//                 <Button
//                   className="w-full rounded-none bg-black hover:bg-black/90 py-6 text-white"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Contact
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
