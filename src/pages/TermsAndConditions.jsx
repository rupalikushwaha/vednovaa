import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const title = "Terms and Conditions | Vednovaa";
  const description = "Read the terms and conditions governing the use of Vednovaa's website, services and programs.";
  const canonical = "https://vednovaa.com/terms-and-conditions";
  const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";
  return (
    <section className="w-full bg-white">
      <Helmet>
        <title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={canonical} /><meta property="og:site_name" content="Vednovaa" /><meta property="og:image" content={socialImage} />
      </Helmet>
      {/* Header band */}
      <div className="bg-[#004aad] py-14 px-6 sm:px-10 mt-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-white/70 text-sm hover:text-white duration-300">
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-white/80 text-sm">Last updated: July 1, 2026</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 space-y-8 text-gray-700 leading-relaxed">

        <p>
          These Terms & Conditions ("Terms") govern your access to and use of
          Vednovaa's website, programs, and services, including the Placement
          Readiness Accelerator Program (PRAP). By accessing our website or
          enrolling in any program, you agree to be bound by these Terms. If
          you do not agree, please do not use our services.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Our Services</h2>
          <p>
            Vednovaa partners with educational institutions to deliver
            placement-readiness training, skill-development workshops, and
            related programs for students. Program structure, schedules, and
            content may be updated from time to time to keep pace with
            industry requirements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Eligibility & Enrollment</h2>
          <p>
            Programs are typically delivered through partner institutions.
            Enrollment may require confirmation from your college or
            university, and you are responsible for providing accurate
            information when registering for any session.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Code of Conduct</h2>
          <p>
            Participants are expected to engage respectfully with trainers,
            staff, and fellow students. We reserve the right to remove any
            participant from a session for disruptive, abusive, or unsafe
            behavior.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Intellectual Property</h2>
          <p>
            All course materials, frameworks (including the CORE Framework
            and Talent Development Engine), branding, and website content are
            the property of Vednovaa and may not be copied, redistributed, or
            used commercially without written permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Payments & Cancellations</h2>
          <p>
            Where programs involve fees, payment terms will be communicated
            at the time of enrollment, typically through your institution.
            Refund and rescheduling requests are reviewed on a case-by-case
            basis.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Limitation of Liability</h2>
          <p>
            Vednovaa works to prepare students for placement opportunities
            but does not guarantee specific employment outcomes. We are not
            liable for indirect or consequential losses arising from the use
            of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to These Terms</h2>
          <p>
            We may update these Terms periodically. Continued use of our
            services after changes are posted constitutes acceptance of the
            revised Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
          <p>
            If you have questions about these Terms, please reach out through
            our{" "}
            <Link to="/contactus" className="text-[#004aad] underline hover:text-[#003b8a]">
              contact form
            </Link>{" "}
            or via our social channels listed in the footer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;
