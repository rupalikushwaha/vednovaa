import React, { useRef, useState } from "react";
import { getPageParameters, trackEvent } from "../utils/analytics";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  designation: "",
  enquiryType: "",
  message: "",
};

const WHATSAPP_NUMBER = "918779171453";
const ANALYTICS_FALLBACK_MS = 400;

const ENQUIRY_TYPES = {
  "Request for Diagnostic Call": "diagnostic_call",
  "Request Product Demo": "product_demo",
  "General Enquiry": "general_enquiry",
};

export const whatsappNavigation = {
  open() {
    const popup = window.open("about:blank", "_blank");
    if (popup) {
      popup.opener = null;
    }
    return popup;
  },
  assign(popup, url) {
    popup.location.assign(url);
  },
};

const buildWhatsAppMessage = (formData) => {
  const trimmedName = formData.name.trim();
  const trimmedInstitution = formData.institution?.trim() || "Not provided";
  const trimmedDesignation = formData.designation?.trim() || "Not provided";
  const trimmedEmail = formData.email.trim();
  const trimmedPhone = formData.phone.trim();
  const trimmedMessage = formData.message.trim() || "Not provided";
  const enquiryType = formData.enquiryType;

  if (enquiryType === "Request for Diagnostic Call") {
    return [
      "Hello Vednovaa Team,",
      "",
      "I have submitted a request for a Diagnostic Call through your website.",
      "",
      `Name: ${trimmedName}`,
      `Institution: ${trimmedInstitution}`,
      `Designation: ${trimmedDesignation}`,
      `Email: ${trimmedEmail}`,
      `Phone: ${trimmedPhone}`,
      "",
      "We would like to discuss our institution's placement readiness challenges and understand how Vednovaa can help.",
      "",
      "Additional Information:",
      trimmedMessage,
      "",
      "Looking forward to connecting.",
    ].join("\n");
  }

  if (enquiryType === "Request Product Demo") {
    return [
      "Hello Vednovaa Team,",
      "",
      "I have submitted a request for a Product Demo through your website.",
      "",
      `Name: ${trimmedName}`,
      `Institution: ${trimmedInstitution}`,
      `Designation: ${trimmedDesignation}`,
      `Email: ${trimmedEmail}`,
      `Phone: ${trimmedPhone}`,
      "",
      "We would like to schedule a product demonstration and understand its features, implementation process and benefits.",
      "",
      "Additional Information:",
      trimmedMessage,
      "",
      "Looking forward to your response.",
    ].join("\n");
  }

  return [
    "Hello Vednovaa Team,",
    "",
    "I have submitted a General Enquiry through your website.",
    "",
    `Name: ${trimmedName}`,
    `Institution: ${trimmedInstitution}`,
    `Designation: ${trimmedDesignation}`,
    `Email: ${trimmedEmail}`,
    `Phone: ${trimmedPhone}`,
    "",
    "Message:",
    trimmedMessage,
    "",
    "Looking forward to hearing from you.",
  ].join("\n");
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionLockRef = useRef(false);
  const navigationStartedRef = useRef(false);
  const fallbackTimerRef = useRef(null);
  const formStartTrackedRef = useRef(false);

  const handleChange = (e) => {
    if (!formStartTrackedRef.current) {
      formStartTrackedRef.current = true;
      const formStartParameters = {
        ...getPageParameters(),
        form_name: "contact_form",
      };
      const selectedEnquiryType = e.target.name === "enquiryType" ? ENQUIRY_TYPES[e.target.value] : undefined;
      if (selectedEnquiryType) {
        formStartParameters.enquiry_type = selectedEnquiryType;
      }
      trackEvent("form_start", formStartParameters);
    }

    setStatus("idle");
    setErrorMessage("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submissionLockRef.current) {
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedInstitution = (formData.institution || "").trim();
    const trimmedDesignation = (formData.designation || "").trim();
    const trimmedMessage = formData.message.trim();
    const trimmedEnquiryType = formData.enquiryType.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedInstitution || !trimmedDesignation || !trimmedEnquiryType) {
      setStatus("error");
      setErrorMessage(trimmedEnquiryType ? "Please complete all the fields before submitting." : "Please select an enquiry type.");
      return;
    }

    if (trimmedEnquiryType === "General Enquiry" && !trimmedMessage) {
      setStatus("error");
      setErrorMessage("Please complete all the fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (trimmedPhone.replace(/\D/g, "").length < 8) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setIsSubmitting(true);
    submissionLockRef.current = true;
    navigationStartedRef.current = false;

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      institution: trimmedInstitution,
      designation: trimmedDesignation,
      enquiryType: ENQUIRY_TYPES[trimmedEnquiryType],
      message: trimmedMessage,
    };

    const message = buildWhatsAppMessage({ ...payload, enquiryType: trimmedEnquiryType });
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = whatsappNavigation.open();
    if (!whatsappWindow) {
      submissionLockRef.current = false;
      setIsSubmitting(false);
      setStatus("error");
      setErrorMessage("We could not complete your submission. Please try again.");
      return;
    }

    const navigateOnce = () => {
      if (navigationStartedRef.current) {
        return;
      }
      navigationStartedRef.current = true;
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      try {
        whatsappNavigation.assign(whatsappWindow, whatsappURL);
      } catch (error) {
        navigationStartedRef.current = false;
        submissionLockRef.current = false;
        setIsSubmitting(false);
        setStatus("error");
        setErrorMessage("We could not complete your submission. Please try again.");
      }
    };

    trackEvent("contact_form_submit", {
      ...getPageParameters(),
      enquiry_type: payload.enquiryType,
      form_name: "contact_form",
      redirect_destination: "whatsapp",
    });

    fallbackTimerRef.current = window.setTimeout(navigateOnce, ANALYTICS_FALLBACK_MS);
    trackEvent("whatsapp_redirect", {
      ...getPageParameters(),
      enquiry_type: payload.enquiryType,
      redirect_type: "automatic",
      event_callback: navigateOnce,
      event_timeout: ANALYTICS_FALLBACK_MS,
    });
  };

  return (
    <section id="contact-section" className="bg-white py-4 sm:py-6 scroll-mt-20">
      <div className="mx-auto max-w-[980px] px-3 sm:px-4">
        <div className="rounded-[24px] bg-[#004aad] p-4 sm:p-8 lg:p-12">
          <div className="overflow-hidden rounded-[20px] bg-white shadow-xl">
            <div className="grid min-h-[420px] lg:min-h-[560px] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative hidden items-center justify-center overflow-hidden bg-slate-50 lg:flex lg:px-0 lg:py-0">
                <img
                  src="https://res.cloudinary.com/dmjunqp6p/image/upload/e_trim,f_auto,q_85,w_1200/v1781596402/ChatGPT_Image_Jun_16__2026__12_49_53_PM-removebg-preview_lrqsmg.png"
                  alt=""
                  className="pointer-events-none absolute left-[90%] top-1/2 z-20 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 scale-[1.28] object-contain object-center select-none"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-8 top-8 z-0 h-24 w-24 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
              </div>

              <div className="relative flex flex-col justify-center bg-white p-5 sm:p-7 lg:p-8">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#004aad]">
                  Contact Us
                </span>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">Need Support?</h2>

                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Contact us if you need further assistance.
                </p>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label htmlFor="name" className="mb-1 block text-xs font-medium text-gray-700">
                      Name and Surname
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="mb-1 block text-xs font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      required
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="institution" className="mb-1 block text-xs font-medium text-gray-700">
                      Institution Name
                    </label>
                    <input
                      id="institution"
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Enter your institution name"
                      autoComplete="organization"
                      required
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="designation" className="mb-1 block text-xs font-medium text-gray-700">
                      Designation
                    </label>
                    <input
                      id="designation"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Enter your designation"
                      autoComplete="organization-title"
                      required
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="enquiryType" className="mb-1 block text-xs font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className={`h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad] ${formData.enquiryType ? "text-gray-700" : "text-gray-500"}`}
                    >
                      <option value="" disabled hidden>
                        Select enquiry type
                      </option>
                      <option value="Request for Diagnostic Call">Request for Diagnostic Call</option>
                      <option value="Request Product Demo">Request Product Demo</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {formData.enquiryType === "General Enquiry" && (
                    <div className="relative z-30 mb-4 bg-white">
                      <label htmlFor="message" className="mb-1 block text-xs font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please enter the details of your request..."
                        required
                        className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                      />
                    </div>
                  )}

                  {status === "error" && (
                    <p className="mb-3 text-sm text-red-600" role="alert">{errorMessage}</p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md bg-[#004aad] px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-[#003b8a] disabled:cursor-not-allowed disabled:bg-[#668cc7]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
