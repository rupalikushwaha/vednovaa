import React from "react";
import { Link } from "react-router-dom";

const OxfordCollege = () => {
  return (
    <section className="w-full bg-white">

      {/* Header */}
      <div className="bg-[#004aad] py-14 px-6 sm:px-10 mt-20">
        <div className="max-w-5xl mx-auto">

          <Link
            to="/casestudies"
            className="text-white/70 text-sm hover:text-white duration-300"
          >
            ← Back to Case Studies
          </Link>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            The Oxford College of Engineering
          </h1>

          <p className="mt-3 text-white/80 text-base">
            AI & Machine Learning Bootcamp | Industry Integrated Learning
          </p>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-10 text-gray-700 leading-8">

        {/* Overview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Overview
          </h2>

          <p>
            Vednovaa collaborated with The Oxford College of Engineering to
            deliver an intensive Artificial Intelligence and Machine Learning
            Bootcamp focused on equipping students with practical knowledge,
            industry exposure, and real-world implementation skills. The
            program combined interactive sessions, live demonstrations, and
            project-based learning to help students understand the rapidly
            evolving AI ecosystem.
          </p>
        </div>

        {/* Challenge */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Challenge
          </h2>

          <p>
            Although students had a strong academic foundation, many lacked
            exposure to real-world AI applications, current industry tools,
            and practical problem-solving techniques. They required guidance
            on how Artificial Intelligence is applied across different
            industries and how to prepare for AI-focused careers.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Solution
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Industry-oriented AI & Machine Learning Bootcamp</li>
            <li>Hands-on implementation with live coding sessions</li>
            <li>Real-world AI use case demonstrations</li>
            <li>Career guidance from industry professionals</li>
            <li>Interactive workshops and practical exercises</li>
            <li>Question & Answer sessions with AI experts</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Technologies Covered
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Python",
              "Data Analytics",
              "Generative AI",
              "Prompt Engineering",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-[#004aad]/10 text-[#004aad] px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Outcome
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Students gained practical AI development experience.</li>
            <li>Improved understanding of industry workflows.</li>
            <li>Enhanced awareness of AI career opportunities.</li>
            <li>Positive participation and feedback from students and faculty.</li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Event Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783528807/WhatsApp_Image_2026-07-08_at_10.07.26_PM_xmgk7s.jpg"/>
            </div>

            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
             
              <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783528809/WhatsApp_Image_2026-07-08_at_10.07.24_PM_ayhl8a.jpg"/>
            </div>

            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783528807/WhatsApp_Image_2026-07-08_at_10.07.25_PM_hnkf8p.jpg"/>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#004aad] rounded-2xl p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Partner with Vednovaa
          </h2>

          <p className="mt-4 text-white/80">
            We help educational institutions bridge the gap between academics
            and industry through practical bootcamps, expert mentoring, and
            career-focused training programs.
          </p>

          <Link
            to="/contactus"
            className="inline-block mt-8 bg-white text-[#004aad] font-semibold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default OxfordCollege;