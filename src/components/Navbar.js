import React, { useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-800 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <div className="text-white font-bold text-xl">PETHOME</div>
        </a>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:items-center ${
            isOpen ? "flex" : "hidden"
          } gap-4`}
        >
          {menuItems.map((item) => (
            <div key={item.name}>
              <href href={item.href} className="text-white hover:text-gray-300">
                {item.name}
              </href>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
