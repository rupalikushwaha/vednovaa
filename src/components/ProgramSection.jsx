import React from "react";
import {
  Clock3,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Mechanical Engineering",
    age: "18+ Years",
    duration: "8 Modules",
    description:
      "Learn CAD Design, Manufacturing, Industrial Automation, Robotics, and Smart Factory concepts.",
    price: "₹4,250 / Month",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500",
    bg: "bg-indigo-500",
  },
  {
    title: "CSE & IT",
    age: "18+ Years",
    duration: "8 Modules",
    description:
      "Master Web Development, AI, Cyber Security, Cloud Computing, and Data Structures.",
    price: "₹4,250 / Month",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
    bg: "bg-orange-400",
  },
  {
    title: "Mechatronics",
    age: "18+ Years",
    duration: "8 Modules",
    description:
      "Explore Robotics, PLC Programming, Embedded Systems, Sensors, and Automation.",
    price: "₹4,250 / Month",
    image:
      "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=500",
    bg: "bg-green-500",
  },
  {
    title: "Commerce",
    age: "18+ Years",
    duration: "8 Modules",
    description:
      "Develop skills in Finance, Business Analytics, Accounting, Marketing, and Entrepreneurship.",
    price: "₹4,250 / Month",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500",
    bg: "bg-purple-500",
  },
];

const ProgramSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Choose the Right Program
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Specialized programs designed to prepare students for
            future-ready careers across multiple domains.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.bg} rounded-3xl p-7 text-white overflow-hidden relative min-h-[280px]`}
            >
              <div className="flex justify-between items-start h-full">
                {/* Left Content */}
                <div className="max-w-[55%]">
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full border border-white/40 text-xs font-medium">
                      {program.age}
                    </span>

                    <span className="px-3 py-1 rounded-full border border-white/40 text-xs font-medium flex items-center gap-1">
                      <Clock3 size={12} />
                      {program.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {program.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <button className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-xl">
                    {program.price}
                  </button>
                </div>

                {/* Right Image */}
                <div className="flex flex-col justify-between items-end h-full">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-40 h-40 rounded-full object-cover border-4 border-white/20"
                  />

                  <button className="mt-5 flex items-center gap-2 text-white font-medium">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;