import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import NavMenu from "./NavMenu";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <nav className="w-full bg-white border-b">
      <div className="flex items-center justify-between px-4 md:px-8 py-2 md:py-4">
        {/* Left side (empty for centering) */}
        <div className="flex-1" />
        {/* Center logo */}
        <div className="flex justify-center flex-1">
          <div className="flex flex-col items-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-16 w-16 xs:h-24 xs:w-24 md:h-48 md:w-48 object-contain mx-auto transition-all duration-200"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
          <a
            href="#"
            className="text-gray-800 hover:text-yellow-800 text-xs xs:text-sm font-medium"
          >
            ACCOUNT
          </a>
          <div className="relative">
            <FaShoppingBag className="text-xl xs:text-2xl text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-[10px] xs:text-xs px-1.5">
              0
            </span>
          </div>
        </div>
      </div>
      {/* Menu */}
      <NavMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} />
      {/* Dropdown */}
      <DropdownMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} />
    </nav>
  );
}
