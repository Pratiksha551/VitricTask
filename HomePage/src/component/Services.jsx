import React from 'react';

const services = [
  {
    icon: '/assets/s1.png',
    title: ['Search Engine', 'Optimization'],
    arrowIcon: '/assets/blackicon.png',
    bgColor: 'bg-gray-100', // Light gray
    textColor: 'text-black',
    tagColor: 'bg-[#B9FF66]',
  },
  {
    icon: '/assets/s2.png',
    title: ['Pay-Per-Click', 'Advertising'],
    arrowIcon: '/assets/blackicon.png',
    bgColor: 'bg-[#B9FF66]',
    textColor: 'text-black',
    tagColor: 'bg-white text-black',
  },
  {
    icon: '/assets/s3.png',
    title: ['Social Media', 'Marketing'],
    arrowIcon: '/assets/whiteicon.png',
    bgColor: 'bg-black',
    textColor: 'text-white',
    tagColor: 'bg-white text-black',
  },
  {
    icon: '/assets/s4.png',
    title: ['Content', 'Creation'],
    arrowIcon: '/assets/blackicon.png',
    bgColor: 'bg-gray-100', // Light gray
    textColor: 'text-black',
    tagColor: 'bg-[#B9FF66]',
  },
  {
    icon: '/assets/s5.png',
    title: ['Email', 'Marketing'],
    arrowIcon: '/assets/blackicon.png',
    bgColor: 'bg-[#B9FF66]', // Same as 2nd
    textColor: 'text-black',
    tagColor: 'bg-white text-black',
  },
  {
    icon: '/assets/s6.png',
    title: ['Analytics &', 'Reporting'],
    arrowIcon: '/assets/whiteicon.png',
    bgColor: 'bg-black', // Same as 3rd
    textColor: 'text-white',
    tagColor: 'bg-[#B9FF66] text-black',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-[100px] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-2xl font-bold text-black mb-2 md:mb-0">
            <span className="bg-[#B9FF66] px-2 py-1 rounded-[5px]">Services</span>
          </h2>
          <p className="text-gray-700 max-w-2xl text-base font-semibold leading-relaxed md:ml-6 mb-0">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.textColor} rounded-3xl p-8 border-1 border-black shadow-[0_5px_0_0_rgba(0,0,0,1)] flex justify-between items-center min-h-[250px]`}
            >
              {/* Left Content */}
              <div className="flex flex-col justify-between h-full">
                {/* Title */}
                <div className={`text-2xl font-bold mb-6 leading-snug ${service.tagColor} px-3 py-1 rounded w-fit`}>
                  {service.title.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 mt-auto">
                  <img src={service.arrowIcon} alt="Arrow Icon" className="h-10 w-10" />
                  <p className="text-2xl font-medium">Learn more</p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0">
                <img src={service.icon} alt={service.title.join(' ')} className="h-90 w-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
