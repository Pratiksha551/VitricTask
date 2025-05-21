import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-12 px-4 sm:px-8 md:px-[60px] lg:px-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Navigating the <br /> digital landscape <br /> for success
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#request-quote"
              className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-900 transition w-full sm:w-auto"
            >
              Book a consultation
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 w-full">
          <img
            src="/assets/Illustration.png"
            alt="Hero Illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Company Logos Row */}
      <div className="px-0 sm:px-8 md:px-[60px] lg:px-[100px] mt-12">
        <div className="flex flex-nowrap items-center gap-8 sm:gap-12 overflow-x-auto">
          <img src="/assets/amazon.png" alt="Amazon" className="h-8 sm:h-10 filter grayscale opacity-80" />
          <img src="/assets/dribble.png" alt="Dribbble" className="h-8 sm:h-10 filter grayscale opacity-80" />
          <img src="/assets/hubspot.png" alt="HubSpot" className="h-8 sm:h-10 filter grayscale opacity-80" />
          <img src="/assets/notion.png" alt="Notion" className="h-8 sm:h-10 filter grayscale opacity-80" />
          <img src="/assets/netflix.png" alt="Netflix" className="h-8 sm:h-10 filter grayscale opacity-80" />
          <img src="/assets/zoom.png" alt="Zoom" className="h-8 sm:h-10 filter grayscale opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;