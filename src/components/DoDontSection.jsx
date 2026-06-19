import React, { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Shield,
  Database,
  Globe,
  Lock,
  Gamepad2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Criminal Tax Law",
    desc: "Our team of experts provides advisory and support in tax matters.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Estate Planning & Taxation",
    desc: "Comprehensive planning to safeguard your assets.",
    icon: FileText,
  },
  {
    id: 3,
    title: "State & Local Taxation",
    desc: "Navigate state and local tax regulations effectively.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Tax Planning & Compliance",
    desc: "Strategic planning and compliance management.",
    icon: Database,
  },
  {
    id: 5,
    title: "International Taxation",
    desc: "Global tax solutions for modern businesses.",
    icon: Lock,
  },
  {
    id: 6,
    title: "Property Taxes",
    desc: "Property tax advisory and compliance services.",
    icon: FileText,
  },
];

const DoDontSection = () => {
  const [isDo, setIsDo] = useState(true);
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto bg-blue-100 rounded-[40px] shadow-xl p-8 md:p-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-14">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              When people
            </h2>

            <div className="flex items-center gap-4 mt-2">
              <span
                className={`text-4xl md:text-6xl font-bold transition-all ${
                  isDo ? "text-[#004aad]" : "text-red-500"
                }`}
              >
                {isDo ? "do" : "don't"}
              </span>

              {/* Toggle */}
              <button
                onClick={() => setIsDo(!isDo)}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                  isDo ? "bg-[#004aad]" : "bg-gray-400"
                }`}
              >
                <div
                  className={`absolute top-1 w-8 h-8 bg-white rounded-full transition-all duration-300 ${
                    isDo ? "left-11" : "left-1"
                  }`}
                />
              </button>

              <span className="text-4xl md:text-6xl font-bold text-gray-900">
                work with us.
              </span>
            </div>
          </div>

          <button className="mt-8 lg:mt-0 bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            Let's build something
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* ==================== DO SECTION ==================== */}
        {isDo ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCard(item.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border ${
                    activeCard === item.id
                      ? "bg-[#004aad] text-white shadow-xl scale-105"
                      : "bg-white text-gray-900 hover:shadow-lg"
                  }`}
                >
                  <div className="flex justify-between items-center mb-5">
                    <Icon size={28} />
                    <ArrowUpRight size={20} />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      activeCard === item.id
                        ? "text-blue-100"
                        : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          /* ==================== DON'T SECTION ==================== */
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-3xl min-h-[450px]">

            {/* Dino */}
            <div className="text-center">
              <Gamepad2
                size={100}
                className="mx-auto text-[#004aad] mb-6"
              />

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                No Services Available
              </h3>

              <p className="text-gray-600 max-w-lg mx-auto">
                Looks like you're offline. Toggle back to
                <span className="font-bold text-[#004aad]">
                  {" "}DO
                </span>{" "}
                to explore our services.
              </p>

              {/* Fake Dino Ground */}
              <div className="mt-12 w-full max-w-xl mx-auto">
                <div className="border-b-4 border-dashed border-gray-400"></div>

                <div className="flex justify-between mt-6 text-gray-500">
                  <span>🌵</span>
                  <span>🌵</span>
                  <span>🌵</span>
                  <span>🌵</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoDontSection;