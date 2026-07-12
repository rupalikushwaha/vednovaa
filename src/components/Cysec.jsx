import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Phishing Simulation",
    desc: "Train students with realistic phishing attack simulations in a safe environment.",
  },
  {
    title: "Cyber Awareness",
    desc: "Build cyber security awareness through interactive learning experiences.",
  },
  {
    title: "Performance Analytics",
    desc: "Track student readiness, engagement, and cybersecurity knowledge.",
  },
  {
    title: "Real-World Scenarios",
    desc: "Expose learners to practical cyber incidents and attack simulations.",
  },
  {
    title: "Institution Dashboard",
    desc: "Monitor institutional cyber readiness with centralized reporting.",
  },
];

const Cysec = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-100 via-white to-blue-50">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-r from-blue-100 via-[#004aad]/20 to-[#004aad]/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20 lg:py-24">

        {/* Hero */}
        <div className="text-center">

          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100 text-[#004aad] font-medium mb-6 text-xs sm:text-sm md:text-base">
            AI Powered Cyber Security Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Build Future-Ready
            <br />
            Students With
            <span className="text-[#004aad]"> A-CySec</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transform traditional cybersecurity education into practical,
            simulation-driven learning with AI-powered phishing simulations,
            cyber awareness programs, and institutional readiness analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <button className="bg-[#004aad] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition text-sm sm:text-base">
               <Link  to="/contactus">Request Demo</Link>
            </button>

           
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-2xl border border-blue-100 max-w-5xl w-full">

            <img
              src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_1000/v1782669101/Screenshot_82_q5cgfx.png"
              alt="A-CySec Dashboard"
              className="w-full rounded-xl sm:rounded-2xl"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] ring-1 ring-[#004aad]/10"></div>
          </div>
        </div>

        {/* Features Heading */}
        <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-2 py-12 sm:py-16 md:py-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100 text-[#004aad] text-xs sm:text-sm font-medium mb-4">
            A-CySec Simulation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Build a Cyber-Aware Student
            <br />
           Community
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Empower your institution with AI-powered cyber simulations, phishing campaigns, behavioral analytics, and practical cybersecurity readiness assessments.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">

          {/* Gauge Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900">
              Experiential Learning
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Support learning through participation, observation, and practical engagement.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-48 sm:h-56 flex items-center justify-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <div className="absolute inset-0 rounded-full border-[10px] sm:border-[12px] border-blue-100"></div>

                <div
                  className="absolute inset-0 rounded-full border-[10px] sm:border-[12px] border-transparent border-t-[#004aad] border-r-[#5B7CFF] rotate-45"
                ></div>

                <div className="absolute w-2 h-12 sm:h-16 bg-[#004aad] left-1/2 top-1/2 -translate-x-1/2 -translate-y-full rotate-45 origin-bottom rounded-full"></div>

                <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-[#004aad] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Integration Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900">
              Skill Enhancement
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Equip students with essential cybersecurity awareness and digital literacy skills.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-48 sm:h-56 relative overflow-hidden">
              <svg
                viewBox="0 0 300 200"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d="M30 150 Q150 40 270 150"
                  stroke="#dbeafe"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M60 170 Q150 80 240 170"
                  stroke="#c7d2fe"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>

              <div className="absolute top-10 sm:top-14 left-6 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500"></div>
              <div className="absolute top-6 sm:top-8 left-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 -translate-x-1/2"></div>
              <div className="absolute top-10 sm:top-14 right-6 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500"></div>

              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 bg-[#004aad] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap">
                Integrations
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900">
              Outcome-Based Education
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
             Enable measurable learning outcomes through simulation-driven activities.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-48 sm:h-56 flex items-end gap-3 sm:gap-4 px-6 sm:px-8 pb-6 sm:pb-8">
              <div className="w-8 sm:w-10 h-20 sm:h-24 bg-blue-100 rounded-t-lg"></div>
              <div className="w-8 sm:w-10 h-32 sm:h-40 bg-[#004aad] rounded-t-lg"></div>
              <div className="w-8 sm:w-10 h-16 sm:h-20 bg-blue-200 rounded-t-lg"></div>
              <div className="w-8 sm:w-10 h-24 sm:h-32 bg-blue-100 rounded-t-lg"></div>
              <div className="w-8 sm:w-10 h-12 sm:h-16 bg-blue-200 rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6">

          {/* Automation */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900">
Student Capability Development
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
Improve awareness, critical thinking, and responsible technology usage.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-56 sm:h-64 relative overflow-hidden">
              <div className="absolute top-8 sm:top-10 left-8 sm:left-10 right-8 sm:right-10 bottom-8 sm:bottom-10 bg-white rounded-xl shadow-md border"></div>

              <div className="absolute top-16 sm:top-20 left-16 sm:left-20 w-28 sm:w-32 h-9 sm:h-10 bg-[#004aad] rounded-full"></div>

              <div className="absolute right-16 sm:right-20 bottom-12 sm:bottom-14 w-16 h-16 sm:w-20 sm:h-20 border-[6px] sm:border-[8px] border-[#004aad] rounded-full"></div>

              <div className="absolute right-8 sm:right-10 bottom-5 sm:bottom-6 w-10 sm:w-12 h-3 sm:h-4 bg-[#004aad] rotate-45 rounded"></div>
            </div>
          </div>

          {/* Workflow Chart */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-gray-900">
Institutional Innovation
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
Demonstrate commitment to modern and industry-aligned learning methodologies.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-56 sm:h-64 p-4 sm:p-6">
              <svg viewBox="0 0 400 180" className="w-full h-full">
                <path
                  d="M0 120 
                     C40 80,80 100,120 60
                     S200 100,240 70
                     S320 120,400 40"
                  fill="none"
                  stroke="#004aad"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                <circle cx="240" cy="70" r="7" fill="#004aad" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      </div>
    </section>
  );
};

export default Cysec;