import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <header className="bg-white  top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-[100px] py-4 mt-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/Logo.png" alt="Logo" className="h-6 w-auto mr-2" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-700 font-medium hover:text-lime-600 transition"
            >
              {link}
            </a>
          ))}

          {/* Request a Quote Button */}
          <a
            href="#request-quote"
            className="ml-4 px-4 py-2 border border-black text-black rounded-md font-semibold transition bg-transparent hover:bg-gray-100"
            style={{ background: "transparent" }}
          >
            Request a quote
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <img
              src={isOpen ? '/assets/close-icon.png' : '/assets/menu-icon.png'}
              alt="menu"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-[100px] pb-4 pt-2 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-gray-800 font-medium border-b pb-2 hover:text-lime-600 transition"
            >
              {link}
            </a>
          ))}

          {/* Mobile "Request a quote" Button */}
          <a
            href="#request-quote"
            className="block w-full text-center px-4 py-2 border border-black text-black rounded-md font-semibold transition bg-transparent hover:bg-gray-100"
            style={{ background: "transparent" }}
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;