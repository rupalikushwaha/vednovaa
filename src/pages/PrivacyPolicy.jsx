import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-white">
      {/* Header band */}
      <div className="bg-[#004aad] py-14 px-6 sm:px-10 mt-20 ">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-white/70 text-sm hover:text-white duration-300">
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white ">
            Privacy Policy
          </h1>
          <p className="mt-2 text-white/80 text-sm ">Last updated: July 1, 2026</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 space-y-8 text-gray-700 leading-relaxed">

        <p>
          Vednovaa ("we," "us," or "our") respects your privacy. This Privacy
          Policy explains what information we collect, how we use it, and
          the choices you have, when you visit our website or take part in
          our programs.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details you submit, such as name, email address, and phone number, through our contact form.</li>
            <li>Messages and inquiries you send us directly.</li>
            <li>Basic usage data, such as pages visited, collected automatically through standard web analytics.</li>
            <li>Institutional details when we coordinate programs with your college or university.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to inquiries submitted through our contact form or WhatsApp.</li>
            <li>To coordinate and deliver our training programs with partner institutions.</li>
            <li>To improve our website and program content.</li>
            <li>To send relevant updates about programs you've engaged with, where permitted.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">3. How We Share Information</h2>
          <p>
            We do not sell your personal information. We may share necessary
            details with the educational institution coordinating your
            program, or with service providers who help us operate our
            website and communications (for example, hosting or messaging
            platforms), under appropriate confidentiality obligations.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to
            protect your information. However, no method of transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Cookies & Analytics</h2>
          <p>
            Our website may use basic cookies or analytics tools to
            understand how visitors use our site. You can control cookies
            through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us using the details below.
            We will respond to reasonable requests in a timely manner.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last
            updated" date at the top of this page will reflect the most
            recent revision.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or your personal data,
            please reach out through our{" "}
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

export default PrivacyPolicy;