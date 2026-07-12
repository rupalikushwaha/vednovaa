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
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            CORE Framework
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Specialized programs designed to prepare students for
            future-ready careers across multiple domains.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.bg} rounded-3xl p-6 sm:p-8 text-white overflow-hidden relative min-h-[280px] sm:min-h-[300px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2`}
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full"></div>

              {/* Letter — comes first/top on mobile, switches to the right on sm+ */}
              <div className="order-1 sm:order-2 relative z-10 flex items-center justify-center w-full sm:w-[150px] md:w-[220px] h-[100px] sm:h-[150px] md:h-[220px]">
                <span className="text-[90px] sm:text-[130px] md:text-[180px] lg:text-[220px] font-black text-white/95 leading-none select-none">
                  {program.letter}
                </span>
              </div>

              {/* Content */}
              <div className="order-2 sm:order-1 w-full sm:max-w-[55%] relative z-10 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  {program.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed mb-4 sm:mb-6">
                  {program.description}
                </p>

                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramSection;