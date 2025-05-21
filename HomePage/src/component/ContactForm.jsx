import React, { useState } from 'react';

const ContactForm = () => {
  const [contactType, setContactType] = useState('sayHi');

  return (
    <section className="bg-white mb-16 py-6 px-4 sm:px-8 md:px-[60px] lg:px-[100px]">
      {/* Heading */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:gap-2">
        <h2 className="inline-block bg-lime-400 text-black text-3xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-2 md:mb-0">
          Contact Us
        </h2>
        <p className="text-gray-700 md:ml-2 text-base font-medium">
          Connect with Us: Let's Discuss Your<br /> Digital Marketing Needs
        </p>
      </div>

      {/* Form Section Container */}
      <div className="bg-[#F5F5F5] rounded-[45px] w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-stretch gap-10 py-6 relative overflow-hidden">
        
        {/* Form Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-[60px] lg:px-[100px]">
          {/* Radio Buttons */}
          <div className="flex gap-4 mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="sayHi"
                className="accent-[#00C4B4] mr-2"
                checked={contactType === 'sayHi'}
                onChange={() => setContactType('sayHi')}
              />
              <span className="text-sm font-medium">Say Hi</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="getQuote"
                className="accent-[#00C4B4] mr-2"
                checked={contactType === 'getQuote'}
                onChange={() => setContactType('getQuote')}
              />
              <span className="text-sm font-medium">Get a Quote</span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C4B4] text-gray-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C4B4] text-gray-500 text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C4B4] text-gray-500 text-sm resize-none"
                required
              ></textarea>
            </div>
            <div
              onClick={() => alert('Message sent!')}
              className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl font-medium text-sm text-center cursor-pointer hover:bg-gray-800 transition"
            >
              Send Message
            </div>
          </div>
        </div>

        {/* Image Section - No Padding, Full Right */}
        <div className="flex-1 w-full h-full hidden md:flex items-center justify-end">
          <img
            src="/assets/formimage.png"
            alt="Form Illustration"
            className="w-full h-full object-cover rounded-r-[45px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
