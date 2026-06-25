import React from "react";
import DepartmentBenefits from "./DepartmentBenefits";
import ProgramSection from "./ProgramSection";
import ConsultationSection from "./ConsultationSection";

const Servicebanner = () => {
  return <>
    <div className="w-full max-w-5xl mx-auto py-8 px-6 select-none mt-20">
      <div className="relative">

        <div className="absolute top-2 left-2 w-full h-full bg-[#e0d5ba] rounded-[30px]"></div>

        <div className="relative overflow-hidden bg-[#004aad] text-white rounded-[40px] px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-8 flex flex-col md:flex-row justify-between items-center gap-4 min-h-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-white/5 pointer-events-none"></div>

          <div className="w-full md:w-3/5 z-10 flex flex-col items-start space-y-4">

            <div className="flex items-center gap-2 border border-white/30 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-xs uppercase tracking-wider font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              VEDNOVAA
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide uppercase leading-tight">
                Placement-Ready Skills for Today's
              </h2>

              <div className="inline-block relative">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide uppercase">
                  Students.
                </span>

                <div className="absolute left-0 bottom-[-15px] h-1.5 w-full bg-[#60A5FA] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl">
              <div className="flex items-start gap-2">
                <span className="text-[#60A5FA] text-xl font-bold">+</span>
                <p className="text-sm sm:text-base text-white/90 leading-snug">
                  80% Practical and 20% Theory Learning
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[#60A5FA] text-xl font-bold">+</span>
                <p className="text-sm sm:text-base text-white/90 leading-snug">
                  Skills, Confidence & Career Readiness
                </p>
              </div>
            </div>

            <button className="bg-white hover:bg-slate-100 text-[#004aad] font-bold px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider text-xs sm:text-sm">
              Get Started
            </button>
          </div>

          <div className="w-full md:w-2/5 relative self-stretch flex justify-end items-end z-10">

     <div className="absolute top-22 right-9 z-20">
  <div className="relative w-[85px] h-[85px] bg-white rounded-full shadow-lg flex flex-col items-center justify-center">

    <p className="text-[#5B4CF0] text-[11px] font-extrabold uppercase text-center leading-tight">
      Want
      <br />
      to learn?
    </p>

    <span className="text-xl mt-2">😊</span>

    <div
      className="absolute right-[74px] bottom-[22px] w-[24px] h-[16px] bg-white"
      style={{
        clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
      }}
    />
  </div>
</div>
            <div className="absolute left-[-300px] top-16 h-full w-[420px] sm:w-[500px] md:w-[620px] lg:w-[750px] flex items-end justify-end overflow-visible">
              <img
                src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1781115972/ChatGPT_Image_Jun_10_2026_11_55_09_PM_yecria.png"
                alt="Programming student"
                className="h-[145%] w-auto object-contain object-bottom pointer-events-none"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
    <DepartmentBenefits />
    <ProgramSection />
    <ConsultationSection />

  </>;
  
};


export default Servicebanner;

