import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Upcoming = () => {
  const title = "Upcoming College Training Programs and Partnerships | Vednovaa";
  const description = "Partner with Vednovaa for upcoming college workshops, AI/ML bootcamps, cybersecurity training, hackathons and placement readiness programs.";
  const canonical = "https://vednovaa.com/upcoming";
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
            Your Institution Could Be Our Next Success Story
          </h1>

          <p className="mt-3 text-white/80 text-base">
            We are excited to collaborate with colleges, universities, and organizations
            to create impactful industry-oriented learning experiences.
          </p>

        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-10 text-gray-700 leading-8">

        {/* Overview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h2>

          <p>
            At Vednovaa, we believe every institution deserves access to
            practical, industry-driven education. Whether you're planning a
            workshop, bootcamp, faculty development program, hackathon, or
            career-focused event, we're ready to help you create an engaging
            learning experience for your students.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Artificial Intelligence & Machine Learning Bootcamps</li>
            <li>Cyber Security Workshops</li>
            <li>Web Development Training Programs</li>
            <li>Cloud Computing Sessions</li>
            <li>Data Science & Analytics Workshops</li>
            <li>Industry Expert Talks</li>
            <li>Hackathons & Innovation Challenges</li>
            <li>Career Guidance & Placement Readiness Programs</li>
          </ul>
        </div>

        {/* Why Partner */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Partner With Vednovaa?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Experienced industry mentors.</li>
            <li>Hands-on practical learning.</li>
            <li>Real-world projects and demonstrations.</li>
            <li>Customized programs based on your institution's requirements.</li>
            <li>Interactive sessions that keep students engaged.</li>
            <li>Certificates for participants.</li>
          </ul>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>

          <p>
            Our mission is to bridge the gap between academics and industry by
            empowering students with practical knowledge, emerging technologies,
            and career-ready skills. We look forward to making your institution
            our next successful collaboration.
          </p>
        </div>

        {/* Future Collaboration */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Success Story Starts Here
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex flex-col items-center justify-center">
              <span className="text-5xl">🎓</span>
              <p className="mt-4 font-semibold">
                Your Campus
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex flex-col items-center justify-center">
              <span className="text-5xl">🚀</span>
              <p className="mt-4 font-semibold">
                Your Event
              </p>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl h-56 flex flex-col items-center justify-center">
              <span className="text-5xl">🏆</span>
              <p className="mt-4 font-semibold">
                Your Success Story
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#004aad] rounded-2xl p-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            Ready to Collaborate?
          </h2>

          <p className="mt-4 text-white/80">
            Let's work together to organize impactful workshops, bootcamps,
            hackathons, and industry-focused learning programs for your students.
          </p>

          <Link
            to="/contactus"
            className="inline-block mt-8 bg-white text-[#004aad] font-semibold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Get in Touch
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Upcoming;
