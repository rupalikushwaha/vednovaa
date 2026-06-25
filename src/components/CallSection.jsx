import React from "react";
import ContactSection from "./ContactSection";

const CallSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-100 via-[#004aad] to-[#003b8a] min-h-[600px]">

          {/* Vertical Lines */}
          <div className="absolute inset-0 opacity-15">
            <div className="h-full w-full flex justify-around">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-px bg-white h-full" />
              ))}
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -top-6 -left-6 rotate-[-12deg] bg-white rounded-3xl shadow-2xl p-6 w-48">
            <h4 className="text-gray-800 font-semibold text-xl">
              Design Concept
            </h4>
          </div>

          <div className="absolute -top-6 -right-6 rotate-[12deg] bg-white rounded-3xl shadow-2xl p-6 w-60">
            <h4 className="text-gray-800 font-semibold text-xl">
              Complete Development
            </h4>
          </div>

          {/* Decorative Pins */}
          <div className="absolute bottom-24 left-8">
            <div className="w-6 h-6 rounded-full bg-blue-500 shadow-lg"></div>
          </div>

          <div className="absolute bottom-24 right-8">
            <div className="w-6 h-6 rounded-full bg-blue-200 shadow-lg"></div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">

            {/* Profile Badge */}
            <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3 mb-10">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700 font-medium">
                Career Counselor
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-white font-extrabold leading-none">
              <span className="block text-5xl md:text-7xl lg:text-8xl">
                Let's Have a
              </span>

              <span className="block text-6xl md:text-8xl lg:text-[110px] mt-3">
                30-Min Call
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-white/90 text-lg md:text-2xl max-w-2xl leading-relaxed">
              Let's discuss your career goals, learning roadmap,
              industry opportunities, and the right program for your future.
            </p>

            {/* CTA Button */}
            <button className="mt-10 bg-white text-[#004aad] font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition duration-300 shadow-xl">
              Book Free Consultation
            </button>
          </div>
          {/* Bottom White Shapes */}
          <div className="absolute -bottom-12 -left-12 w-52 h-52 bg-white rounded-[40px] rotate-12"></div>

          <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-white rounded-[40px] -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;