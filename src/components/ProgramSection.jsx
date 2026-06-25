import React from "react";

const programs = [
  {
    title: "CONCEPT",
    description:
      "Understand the core concepts and expectations that drive real-world industry standards.",
    letter: "C",
    bg: "bg-indigo-500",
  },
  {
    title: "OPERATION",
    description:
      "Learn the operational workflows and methodologies used by professionals daily.",
    letter: "O",
    bg: "bg-orange-400",
  },
  {
    title: "REAL-WORLD EXECUTION",
    description:
      "Apply your knowledge through practical, hands-on tasks that mirror real scenarios.",
    letter: "R",
    bg: "bg-green-500",
  },
  {
    title: "EVALUATION",
    description:
      "Demonstrate your skills and receive actionable feedback for continuous improvement.",
    letter: "E",
    bg: "bg-purple-500",
  },
];

const ProgramSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            CORE Framework
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
              className={`${program.bg} rounded-3xl p-8 text-white overflow-hidden relative min-h-[300px]`}
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

              <div className="flex justify-between items-center h-full">
                
                {/* Left Content */}
                <div className="max-w-[55%] relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {program.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <button className="bg-white text-gray-900 font-semibold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Right Letter */}
                <div className="flex items-center justify-center w-[220px] h-[220px]">
                  <span className="text-[180px] md:text-[220px] font-black text-white/95 leading-none select-none">
                    {program.letter}
                  </span>
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
