import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    id: 2,
    title: 'Research and Strategy Development',
    description:
      'We analyze your market, competitors, and audience to develop a comprehensive strategy tailored to your goals.',
  },
  {
    id: 3,
    title: 'Implementation',
    description:
      'We execute the strategy with precision, launching campaigns and developing assets necessary for success.',
  },
  {
    id: 4,
    title: 'Monitoring and Optimization',
    description:
      'We continuously track performance metrics and refine strategies to ensure maximum results.',
  },
  {
    id: 5,
    title: 'Reporting and Communication',
    description:
      'We provide transparent updates and data-driven insights to keep you informed and aligned with progress.',
  },
  {
    id: 6,
    title: 'Continual Improvement',
    description:
      'We review outcomes regularly and optimize processes to support long-term growth and innovation.',
  },
];

const WorkingProcess = () => {
  // By default, first section is open (active = 1)
  const [active, setActive] = useState(1);

  const toggleStep = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-10 text-white">
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:gap-2">
        <h2 className="inline-block bg-lime-400 text-black text-3xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-2 md:mb-0">
          Our Working Process
        </h2>
        <p className="text-gray-700 md:ml-2 text-base font-medium">
          Step-by-Step Guide to Achieving<br /> Your Business Goals
        </p>
      </div>
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`rounded-2xl border border-gray-300 bg-gray-100 shadow-[0_5px_0_0_rgba(0,0,0,1)] transition-all duration-300 ${
              active === step.id ? 'bg-lime-400 text-black' : 'bg-gray-100 text-black'
            }`}
          >
            <div
              className="flex items-center justify-between px-6 py-6 cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold">{`0${step.id}`}</span>
                <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
              </div>
              <img
                src={active === step.id ? '/assets/Minusicon.png' : '/assets/Plusicon.png'}
                alt="toggle"
                className="w-10 h-10"
              />
            </div>
            {active === step.id && (
              <>
                <hr className="border-t border-black mx-6" />
                <p className="px-6 pb-6 pt-3 text-base md:text-lg">
                  {step.description}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;