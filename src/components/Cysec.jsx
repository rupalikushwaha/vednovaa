import React from "react";

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}
        <div className="text-center">

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#004aad] font-medium mb-6">
            AI Powered Cyber Security Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Build Future-Ready
            <br />
            Students With
            <span className="text-[#004aad]"> A-CySec</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">
            Transform traditional cybersecurity education into practical,
            simulation-driven learning with AI-powered phishing simulations,
            cyber awareness programs, and institutional readiness analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-[#004aad] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              Request Demo
            </button>

            <button className="border border-[#004aad] text-[#004aad] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="mt-20 flex justify-center">
          <div className="relative bg-white rounded-[32px] p-6 shadow-2xl border border-blue-100 max-w-5xl">

            <img
              src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1781730131/A-CySec_bexi0j.png"
              alt="A-CySec Dashboard"
              className="w-1/2           rounded-2xl"
            />

            <div className="absolute inset-0 rounded-[32px] ring-1 ring-[#004aad]/10"></div>
          </div>
        </div>

        {/* Features Heading */}
        <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#004aad] text-sm font-medium mb-4">
            Features
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            We Offer Wide Range
            <br />
            Of Services
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Empower your institution with AI-powered cyber readiness,
            simulations, analytics, and practical cybersecurity learning.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Gauge Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-xl text-gray-900">
              Fast & Scalable
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Experience lightning-fast performance built to grow with your institution.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-56 flex items-center justify-center">
              <div className="relative w-36 h-36">
                <div className="absolute inset-0 rounded-full border-[12px] border-blue-100"></div>

                <div
                  className="absolute inset-0 rounded-full border-[12px] border-transparent border-t-[#004aad] border-r-[#5B7CFF] rotate-45"
                ></div>

                <div className="absolute w-2 h-16 bg-[#004aad] left-1/2 top-1/2 -translate-x-1/2 -translate-y-full rotate-45 origin-bottom rounded-full"></div>

                <div className="absolute w-5 h-5 bg-[#004aad] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Integration Card */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-xl text-gray-900">
              Custom Integrations
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Connect effortlessly with existing institutional systems.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-56 relative overflow-hidden">
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

              <div className="absolute top-14 left-8 w-10 h-10 rounded-full bg-blue-500"></div>
              <div className="absolute top-8 left-1/2 w-10 h-10 rounded-full bg-indigo-500 -translate-x-1/2"></div>
              <div className="absolute top-14 right-8 w-10 h-10 rounded-full bg-purple-500"></div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#004aad] text-white px-5 py-2 rounded-full text-sm">
                Integrations
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-xl text-gray-900">
              Smart Insights
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Analytics and performance tracking powered by AI.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-56 flex items-end gap-4 px-8 pb-8">
              <div className="w-10 h-24 bg-blue-100 rounded-t-lg"></div>
              <div className="w-10 h-40 bg-[#004aad] rounded-t-lg"></div>
              <div className="w-10 h-20 bg-blue-200 rounded-t-lg"></div>
              <div className="w-10 h-32 bg-blue-100 rounded-t-lg"></div>
              <div className="w-10 h-16 bg-blue-200 rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* Automation */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-xl text-gray-900">
              Intelligent Automation
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Automate simulations, awareness campaigns, and reporting.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-64 relative overflow-hidden">
              <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-xl shadow-md border"></div>

              <div className="absolute top-20 left-20 w-32 h-10 bg-[#004aad] rounded-full"></div>

              <div className="absolute right-20 bottom-14 w-20 h-20 border-[8px] border-[#004aad] rounded-full"></div>

              <div className="absolute right-10 bottom-6 w-12 h-4 bg-[#004aad] rotate-45 rounded"></div>
            </div>
          </div>

          {/* Workflow Chart */}
          <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-bold text-xl text-gray-900">
              Seamless Workflow
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-6">
              Monitor institutional cyber readiness in real time.
            </p>

            <div className="bg-[#f7f9ff] rounded-2xl h-64 p-6">
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