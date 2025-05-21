import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#F4F4F4] rounded-[32px] px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-4 md:py-6 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
      {/* Left Text Section */}
      <div className="text-left max-w-xl w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-3 md:mb-4">
          Let’s make things happen
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-4 md:mb-6">
          Contact us today to learn more about how our digital <br className="hidden sm:block"/> marketing services can help your business grow and <br className="hidden sm:block"/> succeed online.
        </p>
        <button className="bg-[#151515] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-base font-medium hover:opacity-90 transition w-full sm:w-auto">
          Get your free proposal
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-6 md:mt-0 md:ml-10 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] h-[180px] sm:h-[220px] md:h-[260px] flex items-center justify-center">
        <img
          src="/assets/cta.png"
          alt="Call to Action Illustration"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default CallToAction;