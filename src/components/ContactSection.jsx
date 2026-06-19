import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white py-4">
      <div className="max-w-[851px] mx-auto px-4">
        
        {/* Blue Wrapper */}
        <div className="bg-[#004aad] p-12">
          
          {/* Contact Card */}
          <div className="bg-white rounded-[20px] shadow-xl overflow-hidden min-h-[420px]">
            <div className="grid lg:grid-cols-2 min-h-[420px]">

              {/* Left Side */}
              <div className="relative flex items-center justify-center min-h-[420px]">
                
                {/* Telephone Image */}
                <img
                  src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1781596402/ChatGPT_Image_Jun_16__2026__12_49_53_PM-removebg-preview_lrqsmg.png"
                  alt="Contact"
                  className="absolute left-14 top-13 h-[100%] max-w-none"
                />

                {/* Decorative Blur */}
                <div className="absolute top-10 left-12 w-16 h-16 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
              </div>

              {/* Right Side */}
              <div className="p-6 flex flex-col justify-center">
                
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#004aad]">
                  Contact Us
                </span>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  Need Support?
                </h2>

                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Contact us if you need further assistance.
                </p>

                <form className="mt-4 space-y-4">

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Name and Surname
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-10 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-10 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Please enter the details of your request..."
                      className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-[#004aad] hover:bg-[#003b8a] text-white text-sm font-medium px-4 py-1.5  shadow-md transition duration-300"
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