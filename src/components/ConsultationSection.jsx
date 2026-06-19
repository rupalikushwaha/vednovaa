import React from "react";
import {
  AlertTriangle,
  BarChart3,
  Search,
  Users,
  Palette,
  Layout,
} from "lucide-react";

const ConsultationSection = () => {
  const problems = [
    {
      title: "Low Engagement",
      desc: "Students not actively participating",
      icon: <Users size={20} />,
      position: "top-left",
    },
    {
      title: "Poor Performance",
      desc: "Lack of practical exposure",
      icon: <BarChart3 size={20} />,
      position: "top-right",
    },
    {
      title: "Low Placement Rate",
      desc: "Industry readiness gap",
      icon: <Search size={20} />,
      position: "middle-left",
    },
    {
      title: "Skill Gap",
      desc: "Outdated learning methods",
      icon: <Layout size={20} />,
      position: "middle-right",
    },
    {
      title: "Lack of Innovation",
      desc: "Limited hands-on projects",
      icon: <Palette size={20} />,
      position: "bottom-left",
    },
    {
      title: "Career Confusion",
      desc: "No proper guidance",
      icon: <Users size={20} />,
      position: "bottom-right",
    },
  ];

  const getPosition = (position) => {
    switch (position) {
      case "top-left":
        return "top-12 left-8 -rotate-12";
      case "top-right":
        return "top-12 right-8 rotate-12";
      case "middle-left":
        return "top-1/2 left-4 -translate-y-1/2";
      case "middle-right":
        return "top-1/2 right-4 -translate-y-1/2";
      case "bottom-left":
        return "bottom-12 left-8 -rotate-12";
      case "bottom-right":
        return "bottom-12 right-8 rotate-12";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Card */}
        <div className="bg-white rounded-[40px] shadow-xl p-12 text-center mb-8">

          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-[#004aad] text-white text-sm font-medium shadow-lg mb-8">
            Student Challenges
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gray-400">
              Most Common
            </span>
            <br />
            <span className="text-gray-900">
              Learning Problems!
            </span>
          </h2>
        </div>

        {/* Main Problem Circle */}
        <div className="relative bg-white rounded-[40px] shadow-xl min-h-[750px] overflow-hidden">

          {/* Background Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#004aad]"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#004aad]"></div>

            <div className="absolute inset-0 rotate-45">
              <div className="absolute left-1/2 top-0 h-full w-px bg-[#004aad]"></div>
            </div>

            <div className="absolute inset-0 -rotate-45">
              <div className="absolute left-1/2 top-0 h-full w-px bg-[#004aad]"></div>
            </div>
          </div>

          {/* Circular Background */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100 to-[#004aad]/20"></div>

            <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-100 to-[#004aad]/10"></div>

            <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-br from-blue-50 to-white"></div>
          </div>

          {/* Center Warning */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-[40px] p-10 border border-blue-100">

              <AlertTriangle
                size={80}
                className="text-[#004aad] mx-auto"
              />

            </div>
          </div>

          {/* Problem Cards */}
          {problems.map((item, index) => (
            <div
              key={index}
              className={`absolute ${getPosition(
                item.position
              )} bg-white rounded-3xl shadow-xl border border-blue-100 p-5 w-[240px]`}
            >
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-[#004aad] flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;