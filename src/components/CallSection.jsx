import React from "react";
import ContactSection from "./ContactSection";

const CallSection = () => {
  const scrollToContact = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-8 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-100 via-[#004aad] to-[#003b8a] sm:min-h-[600px] sm:rounded-[40px]">
          {/* Vertical Lines */}
          <div className="absolute inset-0 opacity-15">
            <div className="flex h-full w-full justify-around">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full w-px bg-white" />
              ))}
            </div>
          </div>

          {/* Floating Cards — hidden on phones, would collide with each other below sm */}
          <div className="absolute -top-6 -left-6 hidden w-48 rotate-[-12deg] rounded-3xl bg-white p-6 shadow-2xl sm:block">
            <h4 className="text-xl font-semibold text-gray-800">Design Concept</h4>
          </div>

          <div className="absolute -top-6 -right-6 hidden w-60 rotate-[12deg] rounded-3xl bg-white p-6 shadow-2xl sm:block">
            <h4 className="text-xl font-semibold text-gray-800">Complete Development</h4>
          </div>

          {/* Decorative Pins */}
          <div className="absolute bottom-16 left-4 sm:bottom-24 sm:left-8">
            <div className="h-4 w-4 rounded-full bg-blue-500 shadow-lg sm:h-6 sm:w-6"></div>
          </div>

          <div className="absolute bottom-16 right-4 sm:bottom-24 sm:right-8">
            <div className="h-4 w-4 rounded-full bg-blue-200 shadow-lg sm:h-6 sm:w-6"></div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex min-h-[430px] flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[600px] sm:px-6 sm:py-20 md:py-24">
            {/* Profile Badge */}
            <div className="mb-6 flex w-full max-w-[260px] items-center justify-center gap-3 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:mb-8 sm:max-w-[320px] sm:px-4 sm:py-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="h-8 w-8 rounded-full"
                loading="lazy"
                decoding="async"
              />
              <span className="text-sm font-medium text-gray-700 sm:text-base">
                Wanna Know More?
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="w-full max-w-3xl font-extrabold leading-[0.95] tracking-tight text-white">
              <span className="block text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl">
                Let's Have a
              </span>

              <span className="mt-2 block text-[2.55rem] sm:mt-3 sm:text-6xl md:text-8xl lg:text-[110px]">
                30-Min Call
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[32rem] text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-lg md:text-2xl">
              Let's discuss your career goals, learning roadmap, industry opportunities,
              and the right program for your future.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#004aad] shadow-xl transition duration-300 hover:scale-[1.02] sm:mt-10 sm:px-10 sm:py-4 sm:text-base"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Bottom White Shapes */}
          <div className="absolute -bottom-10 -left-10 hidden h-36 w-36 rotate-12 rounded-[28px] bg-white sm:-bottom-12 sm:-left-12 sm:block sm:h-52 sm:w-52 sm:rounded-[40px]"></div>

          <div className="absolute -bottom-10 -right-10 hidden h-36 w-36 -rotate-12 rounded-[28px] bg-white sm:-bottom-12 sm:-right-12 sm:block sm:h-52 sm:w-52 sm:rounded-[40px]"></div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
