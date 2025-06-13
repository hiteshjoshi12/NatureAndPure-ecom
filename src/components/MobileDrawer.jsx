import { FaTimes } from "react-icons/fa";

const menuItems = [
  "FACE", "BATH & BODY", "HAIR", "MAKEUP", "GIFTING", "TRAVEL MINIS",
  "MOM & BABY", "MEN", "WELLNESS", "FRAGRANCE", "ABOUT US", "EXCLUSIVES!"
];

function MobileDrawer({ open, onClose, setHoveredMenu }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <ul className="mt-10 space-y-5">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block text-gray-800 text-lg font-medium hover:text-yellow-800"
                onClick={onClose}
              >
                {item}
                {item === "GIFTING" && (
                  <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">NEW</span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="block mt-8 text-gray-800 hover:text-yellow-800 text-base font-medium"
        >
          ACCOUNT
        </a>
      </div>
    </div>
  );
}

export { MobileDrawer };
