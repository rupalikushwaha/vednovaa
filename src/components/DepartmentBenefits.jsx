import React from "react";

const departments = [
  {
    id: 1,
    title: "Mechanical",
    description:
      "Learn industry-focused skills including CAD Design, Manufacturing Processes, Automation, Industrial IoT, and Smart Factory concepts.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/v1781457476/ChatGPT_Image_Jun_14_2026_10_39_04_PM_z7eorp.png",
  },
  {
    id: 2,
    title: "CSE & IT",
    description:
      "Build expertise in Full Stack Development, AI/ML, Cloud Computing, Cyber Security, Data Structures, and Software Engineering.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/v1781457476/ChatGPT_Image_Jun_14_2026_10_43_53_PM_apxcsk.png",
  },
  {
    id: 3,
    title: "Mechatronics",
    description:
      "Gain practical knowledge in Robotics, Embedded Systems, PLC Programming, Sensors, Automation, and Industry 4.0 technologies.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/v1781457476/ChatGPT_Image_Jun_14_2026_10_46_31_PM_zfagw3.png",
  },
  {
    id: 4,
    title: "Commerce",
    description:
      "Develop skills in Finance, Business Analytics, Digital Marketing, Entrepreneurship, Accounting, and Corporate Management.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/v1781457476/ChatGPT_Image_Jun_14_2026_10_46_47_PM_r1xsgt.png",
  },
];

const DepartmentBenefits = () => {
  return( 
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase leading-tight">
            Empowering Students
            <br />
            Across Multiple Domains
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f7fc] rounded-[28px] p-6 flex items-center justify-between min-h-[240px]"
            >
              <div className="flex-1 pr-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5B4CF0] font-bold text-lg mb-4">
                  {item.id}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-[#f5f7fc] rounded-[28px] p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl">🏆</div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase">
              Build Future-Ready Careers
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Whether you're from Mechanical, CSE, IT, Mechatronics, Commerce,
              or any other stream, our industry-driven programs prepare you
              with practical skills, hands-on projects, and real-world
              experience to excel in your career.
            </p>
          </div>
        </div>

      </div>
    </section>

  );
};

export default DepartmentBenefits;