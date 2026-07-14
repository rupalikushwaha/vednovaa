import React from "react";
import DepartmentBenefits from "./DepartmentBenefits";
import ProgramSection from "./ProgramSection";
import ConsultationSection from "./ConsultationSection";

const Servicebanner = () => {
  const scrollToContact = () => {
    const target = document.getElementById("contact-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <>
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 select-none mt-20">


      <div className="relative">

        {/* Backing card — ticket-style offset panel */}
        <div className="absolute top-2 left-2 w-full h-full bg-[#e8d8ad] rounded-[30px] border-2 border-dashed border-[#004aad]/15"></div>
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white hidden sm:block"></span>

        <div className="relative overflow-hidden bg-[#003a8c] text-white rounded-[30px] sm:rounded-[40px] px-5 py-5 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-8 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 min-h-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">

          {/* Texture layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a4fc4] via-[#003a8c] to-[#00276b] pointer-events-none"></div>
          <div className="absolute inset-0 vn-dot-grid opacity-40 pointer-events-none"></div>
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#60A5FA]/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Text column */}
          <div className="w-full lg:w-3/5 z-10 flex flex-col items-start space-y-4 vn-body">

            <div className="flex items-center gap-2 border border-white/30 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-xs uppercase tracking-[0.15em] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              VEDNOVAA
            </div>

            <div className="space-y-2">
              <h1 className="vn-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-[1.08]">
                Placement-Ready Skills for Today's
              </h1>

              <div className="inline-block relative">
                <span className="vn-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
                  Students.
                </span>

                <div className="absolute left-0 bottom-[-12px] sm:bottom-[-15px] h-1.5 w-full bg-[#FFB562] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#FFB562] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003a8c]"></span>
                </span>
                <p className="text-sm sm:text-base text-white/90 leading-snug">
                  80% Practical and 20% Theory Learning
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#FFB562] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003a8c]"></span>
                </span>
                <p className="text-sm sm:text-base text-white/90 leading-snug">
                  Skills, Confidence & Career Readiness
                </p>
              </div>
            </div>

            <button className="group bg-[#FFB562] hover:bg-[#ffc684] text-[#003a8c] font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider text-xs sm:text-sm inline-flex items-center gap-2" onClick={scrollToContact}>
              Get Started
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Image column — desktop breakout illustration, lg and up only */}
          <div className="hidden lg:flex w-2/5 relative self-stretch justify-end items-end z-10">

            {/* Signature element: readiness dial, grounded in the real "80% practical" stat */}
            <div className="absolute top-16 right-6 z-20 motion-safe:animate-dial-in">
              <div
                className="relative w-[100px] h-[100px] rounded-full p-[5px]"
                style={{
                  background: "conic-gradient(#FFB562 288deg, rgba(255,255,255,0.18) 0deg)",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#00296b] flex flex-col items-center justify-center border border-white/10 shadow-inner">
                  <span className="vn-display text-2xl font-bold text-white leading-none">80%</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/70 mt-1">Practical</span>
                </div>
              </div>
            </div>

            <div className="absolute left-[-300px] top-16 h-full w-[620px] lg:w-[750px] flex items-end justify-end overflow-visible">
              <img
                src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_800/v1781115972/ChatGPT_Image_Jun_10_2026_11_55_09_PM_yecria.png"
                alt="Programming student"
                loading="eager"
                decoding="async"
                className="h-[145%] w-auto object-contain object-bottom pointer-events-none motion-safe:animate-bounce-slow"
              />
            </div>

          </div>

          {/* Image — mobile/tablet contained block, below lg */}
          <div className="lg:hidden w-full relative flex justify-center mt-2">

            <div className="absolute -top-3 right-2 sm:right-8 z-20">
              <div
                className="relative w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-full p-[4px]"
                style={{
                  background: "conic-gradient(#FFB562 288deg, rgba(255,255,255,0.18) 0deg)",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#00296b] flex flex-col items-center justify-center border border-white/10">
                  <span className="vn-display text-base sm:text-lg font-bold text-white leading-none">80%</span>
                  <span className="text-[6px] sm:text-[7px] uppercase tracking-wider text-white/70 mt-0.5">Practical</span>
                </div>
              </div>
            </div>

            <img
              src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1781115972/ChatGPT_Image_Jun_10_2026_11_55_09_PM_yecria.png"
              alt="Programming student"
              loading="lazy"
              decoding="async"
              className="h-48 sm:h-64 md:h-72 w-auto object-contain pointer-events-none"
            />
          </div>

        </div>
      </div>
    </div>
    <section id="contact-section">
    <DepartmentBenefits />
    </section>
    <ProgramSection />
    <ConsultationSection />

  </>;

};


export default Servicebanner;
