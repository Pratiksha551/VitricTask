import React from 'react';

const CaseStudies = () => {
  return (
    <section className=" text-white px-[100px] py-20 max-md:px-6">
      {/* Heading */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:gap-2">
        <h2 className="inline-block bg-lime-400 text-black text-3xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-2 md:mb-0">
          Case Studies
        </h2>
        <p className="text-gray-700 md:ml-2 text-base font-medium">
          Explore Real-Life Example Of Our Proven Digital Marketing<br /> Success through our Case Studies.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="bg-[#14141A] rounded-3xl p-10 grid md:grid-cols-3 gap-8 text-gray-300">
        {/* Case 1 */}
        <div className="flex flex-col gap-6 border-r border-gray-700 pr-6 last:border-none">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <a href="#" className="text-lime-400 font-medium flex items-center gap-2 hover:underline">
            Learn more
            <img src="/assets/greenicon.png" alt="Arrow Icon" className="h-5 w-5 inline-block" />
          </a>
        </div>

        {/* Case 2 */}
        <div className="flex flex-col gap-6 border-r border-gray-700 px-6 last:border-none">
          <p>
            For a B2B software company, we developed an SEO strategy that resulted
            in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <a href="#" className="text-lime-400 font-medium flex items-center gap-2 hover:underline">
            Learn more
            <img src="/assets/greenicon.png" alt="Arrow Icon" className="h-5 w-5 inline-block" />
          </a>
        </div>

        {/* Case 3 */}
        <div className="flex flex-col gap-6 pl-6">
          <p>
            For a national retail chain, we created a social media marketing campaign
            that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <a href="#" className="text-lime-400 font-medium flex items-center gap-2 hover:underline">
            Learn more
            <img src="/assets/greenicon.png" alt="Arrow Icon" className="h-5 w-5 inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
