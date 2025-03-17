// "use client";
// import React, { useState } from "react";
// import { motion } from "motion/react";
// import Link from "next/link";

// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children,
// }: {
//   setActive: (item: string) => void;
//   active: string | null;
//   item: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div onMouseEnter={() => setActive(item)} className="relative">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-white hover:opacity-[0.9] font-normal uppercase"
//       >
//         {item}
//       </motion.p>
//       {active === item && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}
//           className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
//         >
//           <motion.div
//             transition={transition}
//             layoutId="active"
//             className="bg-black backdrop-blur-sm overflow-hidden border border-white/[0.2] shadow-xl"
//           >
//             <motion.div layout className="w-max h-full p-4">
//               {children}
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// const Navbar = () => {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <nav
//       onMouseLeave={() => setActive(null)}
//       className="fixed top-0 left-0 w-full bg-black z-50 shadow-input flex items-center justify-between px-8 py-4"
//     >
//       {/* Arkay Logo */}
//       <div className="text-white text-2xl font-bold uppercase">Arkay</div>

//       {/* Menu Items */}
//       <div className="flex space-x-6 text-sm ">
//         <MenuItem setActive={setActive} active={active} item="Home">
//           <DropdownLink href="/">Home</DropdownLink>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <DropdownLink href="/services/design">Design</DropdownLink>
//           <DropdownLink href="/services/development">Development</DropdownLink>
//           <DropdownLink href="/services/consulting">Consulting</DropdownLink>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Projects">
//           <DropdownLink href="/projects/web">Web Projects</DropdownLink>
//           <DropdownLink href="/projects/mobile">Mobile Projects</DropdownLink>
//           <DropdownLink href="/projects/branding">
//             Branding Projects
//           </DropdownLink>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <DropdownLink href="/products/1">Product 1</DropdownLink>
//           <DropdownLink href="/products/2">Product 2</DropdownLink>
//           <DropdownLink href="/products/3">Product 3</DropdownLink>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Contact">
//           <DropdownLink href="/contact">Contact</DropdownLink>
//         </MenuItem>
//       </div>
//     </nav>
//   );
// };

// const DropdownLink = ({
//   children,
//   href,
// }: {
//   children: React.ReactNode;
//   href: string;
// }) => {
//   return (
//     <Link
//       href={href}
//       className="block text-white hover:bg-white/[0.1] py-2 transition"
//     >
//       {children}
//     </Link>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isContact = false,
  hasDropdown = false, // New prop to indicate if the item has a dropdown
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  isContact?: boolean;
  hasDropdown?: boolean; // New prop
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative h-full flex items-center"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer hover:opacity-[0.9] font-normal flex items-center ${
          isContact
            ? "bg-blue-500 text-white px-6 h-full flex items-center" // Full height for Contact
            : "text-black" // Black text for other items
        }`}
      >
        {item}
        {/* Add down arrow for items with dropdown */}
        {hasDropdown && (
          <span className="ml-1 text-xs">&#9660;</span> // Tiny down arrow
        )}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 0 }} // Start dropdown from navbar end
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-full left-1/2 transform -translate-x-1/2" // No gap between navbar and dropdown
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white backdrop-blur-sm overflow-hidden border border-black/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-input flex items-center justify-between h-12"
    >
      {/* Arkay Logo with padding */}
      <div className="text-black text-2xl font-bold pl-8">Arkay</div>

      {/* Menu Items with padding */}
      <div className="flex space-x-6 text-sm h-full items-center pr-8">
        <MenuItem setActive={setActive} active={active} item="Home">
          <DropdownLink href="/">Home</DropdownLink>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
          hasDropdown={true} // Add dropdown arrow
        >
          <DropdownLink href="/services/design">Design</DropdownLink>
          <DropdownLink href="/services/development">Development</DropdownLink>
          <DropdownLink href="/services/consulting">Consulting</DropdownLink>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          hasDropdown={true} // Add dropdown arrow
        >
          <DropdownLink href="/projects/web">Web Projects</DropdownLink>
          <DropdownLink href="/projects/mobile">Mobile Projects</DropdownLink>
          <DropdownLink href="/projects/branding">
            Branding Projects
          </DropdownLink>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Products"
          hasDropdown={true} // Add dropdown arrow
        >
          <DropdownLink href="/products/1">Product 1</DropdownLink>
          <DropdownLink href="/products/2">Product 2</DropdownLink>
          <DropdownLink href="/products/3">Product 3</DropdownLink>
        </MenuItem>
        {/* Contact with Full Blue Background */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          isContact={true}
        >
          <DropdownLink href="/contact">Contact</DropdownLink>
        </MenuItem>
      </div>
    </nav>
  );
};

const DropdownLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="block text-black hover:bg-gray-100 py-2 transition"
    >
      {children}
    </Link>
  );
};

export default Navbar;