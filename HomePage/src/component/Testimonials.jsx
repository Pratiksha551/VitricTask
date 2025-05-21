import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      quote: "Positivus helped us reshape our brand and launch a successful campaign. Their creativity and technical skill are unmatched.",
      author: "Jane Doe",
      role: "CEO at Startup Inc",
    },
    {
      quote: "Thanks to Positivus, our online visibility skyrocketed. Their strategic approach and excellent support exceeded our expectations.",
      author: "Mark Lee",
      role: "Head of Growth at FutureTech",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-8xl mx-auto px-4 mb-16 sm:px-8 md:px-[60px] lg:px-[100px]">
      {/* Heading Part */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end md:gap-2">
        <h2 className="inline-block bg-lime-400 text-black text-3xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-2 md:mb-0">
          Testimonials
        </h2>
        <p className="text-gray-700 md:ml-2 text-base font-medium">
          Hear from Our Satisfied Clients: Read Our Testimonials<br />to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonials Section */}
      <section className="bg-black text-white rounded-[32px] py-12">
        <div className="w-full">
          {/* Testimonials - only 1 visible on mobile, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 border border-gray-600 rounded-2xl bg-[#18181B] transition-opacity duration-500 ease-in-out flex flex-col justify-between h-full ${
                  index === currentIndex
                    ? 'opacity-100 block'
                    : 'hidden md:block md:opacity-50'
                }`}
              >
                <p className="text-gray-300 text-sm mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex flex-col mt-auto">
                  <span className="text-lime-400 font-semibold text-sm">{testimonial.author}</span>
                  <span className="text-gray-400 text-xs">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {/* Left Arrow */}
            <button onClick={handlePrev} className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-lime-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button onClick={handleNext} className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;