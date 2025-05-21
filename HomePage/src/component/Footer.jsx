import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white max-w-6xl mx-auto rounded-t-[50px]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-[100px] lg:px-[100px] py-8">
        {/* Top Row: Logo, Navigation, Social Icons */}
        <div className="flex flex-col gap-8 md:gap-10 md:flex-row md:items-center md:justify-between border-b border-gray-600 pb-8">
          {/* Logo + Navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/logo2.png" alt="Positivus Logo" className="w-6 h-6" />
              <span className="text-xl font-semibold">Positivus</span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#" className="hover:text-gray-300">About us</a>
              <a href="#" className="hover:text-gray-300">Services</a>
              <a href="#" className="hover:text-gray-300">Use Cases</a>
              <a href="#" className="hover:text-gray-300">Pricing</a>
              <a href="#" className="hover:text-gray-300">Blog</a>
            </nav>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 mt-2 md:mt-0">
            <a href="#"><img src="/assets/social1.png" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src="/assets/social2.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/assets/social3.png" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>

        {/* Second Row: Contact Info and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#C4F440]">Contact us:</h3>
            <p className="text-sm">Email: info@positivus.com</p>
            <p className="text-sm">Phone: 555-567-8901</p>
            <p className="text-sm">
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          {/* Newsletter Signup */}
          <div className="flex-1 max-w-sm">
            <div className="flex gap-3 bg-[#263435] rounded-lg p-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 bg-transparent border border-gray-500 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4F440]"
              />
              <div
                onClick={() => alert('Subscribed!')}
                className="px-4 py-2 bg-[#C4F440] text-black rounded-lg font-medium text-sm cursor-pointer hover:bg-[#A8D136] transition"
              >
                Subscribe to news
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;