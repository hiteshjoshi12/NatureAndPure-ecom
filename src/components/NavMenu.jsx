import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  "FACE",
  "BATH & BODY",
  "HAIR",
  "MAKEUP",
  "GIFTING",
  "TRAVEL MINIS",
  "MOM & BABY",
  "MEN",
  "WELLNESS",
  "FRAGRANCE",
  "ABOUT US",
  "EXCLUSIVES!",
];

export default function NavMenu({ hoveredMenu, setHoveredMenu }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center gap-6 py-3 border-t relative z-20">
        {menuItems.map((item) => (
          <div
            key={item}
            onMouseEnter={() => setHoveredMenu(item)}
            onMouseLeave={() => setHoveredMenu(null)}
            className="relative"
          >
            <a
              href="#"
              className={`text-gray-700 hover:text-yellow-800 text-sm font-medium px-2 py-1 transition ${
                item === "GIFTING" ? "flex items-center" : ""
              }`}
            >
              {item}
              {item === "GIFTING" && (
                <span className="ml-1 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                  NEW
                </span>
              )}
            </a>
          </div>
        ))}
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <button
        className="md:hidden flex items-center px-4 py-3"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <FaBars className="text-2xl text-gray-800" />
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl text-gray-800" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-gray-700 hover:text-yellow-800 text-base font-medium px-2 py-2 rounded transition ${
                item === "GIFTING" ? "flex items-center" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {item}
              {item === "GIFTING" && (
                <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                  NEW
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-200/30  z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
