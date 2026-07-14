import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CBBhandari = () => {
  const title = "CB Bhandari Jain College AI and Placement Readiness Session | Vednovaa";
  const description = "See how Vednovaa helped CB Bhandari Jain College MBA students understand practical AI applications, employer expectations and placement readiness.";
  const canonical = "https://vednovaa.com/cb-bhandari";
  const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";
  return (
    <section className="w-full bg-white">
      <Helmet>
        <title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
      </Helmet>

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
            CB Bhandari Jain College
          </h1>

          <p className="mt-3 text-white/80 text-base">
  AI & Industry Readiness: Getting Placement-Ready | Interactive Expert Session
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
  Vednovaa collaborated with <strong>CB Bhandari Jain College</strong> to conduct an
  interactive industry session titled <strong>"AI & Industry Readiness: Getting Placement-Ready"</strong>
  for MBA students specializing in Finance, Business Analytics, Marketing,
  and Human Resource Management. The objective was to help students
  understand how Artificial Intelligence is transforming businesses while
  preparing them for today's evolving placement landscape.
</p>
        </div>

        {/* Challenge */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Challenge
          </h2>

         <p>
  As Artificial Intelligence continues to reshape industries, students
  need more than academic knowledge. They need clarity on emerging
  technologies, evolving employer expectations, and the skills required
  to succeed in today's competitive job market. The objective was to help
  MBA students understand AI's business impact while preparing them for
  placement opportunities.
</p>
        </div>

        {/* Approach */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>

          <ul className="list-disc pl-6 space-y-2">
  <li>Conducted an interactive industry-focused expert session.</li>
  <li>Bridged the gap between classroom learning and workplace expectations.</li>
  <li>Explained practical AI applications across business domains.</li>
  <li>Discussed changing recruitment trends and employer expectations.</li>
  <li>Shared actionable strategies for placement readiness.</li>
  <li>Interactive Q&A with real-world business examples.</li>
</ul>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
             Key Highlights

          </h2>

          <div className="flex flex-wrap gap-3">
           {[
  "AI in Finance",
  "AI in Marketing",
  "AI in HR",
  "Business Analytics",
  "Industry Hiring Trends",
  "Placement Readiness",
].map((item) => (
  <span
    key={item}
    className="bg-[#004aad]/10 text-[#004aad] px-4 py-2 rounded-full text-sm font-medium"
  >
    {item}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
           The Impact
          </h2>

         <ul className="list-disc pl-6 space-y-2">
  <li>Exceptional student participation throughout the session.</li>
  <li>Meaningful discussions around Artificial Intelligence and business innovation.</li>
  <li>Students gained clarity on AI-driven career opportunities.</li>
  <li>Improved understanding of employer expectations and placement preparation.</li>
  <li>Reinforced Vednovaa's commitment to industry-oriented learning.</li>
</ul>
        </div>
        <div>
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    Institutional Support
  </h2>

  <p>
    We sincerely thank <strong>Ms. Usha Sharan (Principal)</strong>,
    <strong> Ms. Shubha Kalkur (Vice Principal)</strong>, and
    <strong> Ms. Poornima Suman (Assistant Professor)</strong> for their
    continuous support in making this initiative successful. Their
    encouragement and commitment to providing students with industry-oriented
    learning opportunities played a vital role in the success of this
    interactive session.
  </p>
</div>

        {/* Gallery Placeholder */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Event Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
              <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783527614/WhatsApp_Image_2026-07-08_at_7.51.42_PM_wdrobs.jpg" alt="CB Bhandari Jain College AI and placement readiness session"/>
            </div>

            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
              <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783527613/WhatsApp_Image_2026-07-08_at_7.51.41_PM_nzk3wk.jpg" alt="MBA students participating in Vednovaa's industry readiness session"/>
            </div>

            <div className="h-56 rounded-xl bg-gray-200 flex items-center justify-center">
              <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1783527613/WhatsApp_Image_2026-07-08_at_7.51.41_PM_1_utjori.jpg" alt="Interactive Vednovaa session at CB Bhandari Jain College"/>
            </div>
          </div>
        </div>
<div>
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Results at a Glance
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
      <thead className="bg-[#004aad] text-white">
        <tr>
          <th className="px-6 py-4 text-left">Attribute</th>
          <th className="px-6 py-4 text-left">Details</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 font-semibold">Institution</td>
          <td className="px-6 py-4">CB Bhandari Jain College</td>
        </tr>

        <tr>
          <td className="px-6 py-4 font-semibold">Audience</td>
          <td className="px-6 py-4">
            MBA Students (Finance, Business Analytics, Marketing & HR)
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 font-semibold">Program</td>
          <td className="px-6 py-4">
            AI & Industry Readiness: Getting Placement-Ready
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 font-semibold">Focus Areas</td>
          <td className="px-6 py-4">
            AI Applications • Industry Expectations • Placement Readiness
          </td>
        </tr>

        <tr>
          <td className="px-6 py-4 font-semibold">Outcome</td>
          <td className="px-6 py-4">
            High engagement and improved awareness of AI-driven careers.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        {/* CTA */}
        <div className="bg-[#004aad] rounded-2xl p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Want Vednovaa at Your Campus?
          </h2>

          <p className="mt-4 text-white/80">
            Let's collaborate to provide students with industry-focused
            training, practical learning, and career opportunities.
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

export default CBBhandari;
