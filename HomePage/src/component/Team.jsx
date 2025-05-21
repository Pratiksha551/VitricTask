import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      experience: "10+ years of experience in digital marketing. Expert in SEO, PPC, and content strategy",
      image: "/assets/t1.png",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: "/assets/t2.png",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: "/assets/t3.png",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: "/assets/t4.png",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      experience: "4+ years of experience in social media marketing. Proficient in content creation, scheduling, analyzing metrics, and building engagement",
      image: "/assets/t5.png",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      image: "/assets/t6.png",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-[60px] lg:px-[100px]">

         <div className="mb-16 flex flex-col md:flex-row md:items-end md:gap-2">
        <h2 className="inline-block bg-lime-400 text-black text-3xl md:text-2xl font-semibold px-4 py-2 rounded-md mb-2 md:mb-0">
         Team
        </h2>
        <p className="text-gray-700 md:ml-2 text-base font-medium">
          Meet the skilled and experienced team behind our <br/>successful digital marketing strategies
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-6 shadow-[0_5px_0_0_rgba(0,0,0,1)] relative"
            >
              {/* Image, Name, Role in a row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-gray-600">{member.role}</p>
                </div>
              </div>

              {/* LinkedIn Icon */}
              <div className="absolute top-4 right-4 w-6 h-6">
                <img
                  src="/assets/link.png"
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Divider */}
              <hr className="w-full border-t border-gray-300 my-4" />

              {/* Experience Description */}
              <div className="text-sm font-semibold text-gray-700 text-left">
                {member.experience}
              </div>
            </div>
          ))}
        </div>
      </div>
     <div className="flex justify-end mt-8">
        <button className="bg-[#151515] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-base font-medium hover:opacity-90 transition w-full sm:w-auto">
          See all team
        </button>
      </div>
    </section>
  );
};

export default Team;
