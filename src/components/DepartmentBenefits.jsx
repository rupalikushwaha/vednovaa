import React from "react";

const departments = [
  {
    id: 1,
    title: "Mechanical",
    description:
      "Prepare Mechanical Engineering students for the future of Industry 4.0 through a practical bootcamp focused on Artificial Intelligence and Operational Technology (OT) Security. Students gain hands-on exposure to intelligent manufacturing, industrial automation, and securing connected operational systems.",
      image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1781457476/ChatGPT_Image_Jun_14_2026_10_43_53_PM_apxcsk.png",
  },
  {
    id: 2,
    title: "CSE & IT",
    description:
      "An intensive, hands-on bootcamp designed to prepare students for modern technology careers by combining Artificial Intelligence and Cyber Security. The program emphasizes practical implementation, real-world projects, and placement-oriented learning.",
   image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1781457476/ChatGPT_Image_Jun_14_2026_10_39_04_PM_z7eorp.png",
  },
  {
    id: 3,
    title: "Mechatronics",
    description:
      "Designed specifically for Mechatronics students, this bootcamp combines Artificial Intelligence, Cyber Security, and Industrial IoT to build secure, intelligent automation systems used across modern industries.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1781457476/ChatGPT_Image_Jun_14_2026_10_46_31_PM_zfagw3.png",
  },
  {
    id: 4,
    title: "Commerce",
    description:
      "A practical workshop designed to help Commerce and Management students understand how Artificial Intelligence is transforming business operations, finance, marketing, HR, analytics, and decision-making.",
    image:
      "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_600/v1781457476/ChatGPT_Image_Jun_14_2026_10_46_47_PM_r1xsgt.png",
  },
];

const DepartmentBenefits = () => {
  return(
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 uppercase leading-tight">
            Empowering Students
            <br />
            Across Multiple Domains
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {departments.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f7fc] rounded-[24px] sm:rounded-[28px] p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-2 min-h-[240px] text-center sm:text-left"
            >
              <div className="flex-1 flex flex-col items-center sm:items-start sm:pr-4">
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
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 sm:mt-8 bg-[#f5f7fc] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl">🏆</div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 uppercase">
REAL-WORLD HACKATHON
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
             Students don't just learn, they build. Our hands-on hackathon simulates real workplace challenges, helping participants demonstrate technical skills, analytical thinking, and project execution that employers value.
             A structured talent development engine(TDE) that helps institutions understand how students learn, perform, collaborate, and grow.
            </p>
          </div>
        </div>

      </div>
    </section>

  );
};

export default DepartmentBenefits;