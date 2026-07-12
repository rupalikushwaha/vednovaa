import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setStatus("idle");
    setErrorMessage("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedMessage) {
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

    const message = `New Contact Form Submission\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nPhone: ${trimmedPhone}\n\nMessage:\n${trimmedMessage}`;

    const whatsappURL = `https://wa.me/918779171453?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setFormData(initialForm);
    setStatus("success");
    setErrorMessage("");
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
                  alt="Contact"
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
                      className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

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
                      className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  {status === "error" && (
                    <p className="mb-3 text-sm text-red-600">{errorMessage}</p>
                  )}

                  {status === "success" && (
                    <p className="mb-3 text-sm font-medium text-emerald-600">
                      Thanks for reaching out. We will get back to you shortly.
                    </p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-[#004aad] px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-[#003b8a] disabled:cursor-not-allowed disabled:bg-[#668cc7]"
                    >
                      Submit
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
