import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, Camera, Phone, Send } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.instagram.com/vednovaa?utm_source=qr&igsh=bnZqdGpiN2Fyamti",
    icon: <Camera />,
    label: "Instagram",
  },
  {
    href: "https://t.me/vednovaa",
    icon: <Send />,
    label: "Telegram",
  },
  {
    href: "https://wa.me/message/O6Q7APSKJLWFA1",
    icon: <Phone />,
    label: "WhatsApp",
  },
  {
    href: "https://www.linkedin.com/company/vednovaa/",
    icon: <BriefcaseBusiness />,
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 w-full bg-blue-100 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-center justify-center py-10">
        <img
          src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png"
          alt="Vednovaa Logo"
          className="w-[220px] object-contain sm:w-[260px]"
          width="300"
          height="134"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="bg-[#004aad] px-4 py-6 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center text-sm text-white md:text-left">
            © 2026 Vednovaa. All Rights Reserved
          </div>

          <div className="flex flex-col gap-2 text-center text-sm text-white sm:flex-row sm:gap-8 md:text-left">
            <Link to="/terms-and-conditions" className="duration-300 hover:text-sky-300">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="duration-300 hover:text-sky-300">
              Privacy Policy
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white duration-300 hover:bg-white hover:text-[#4d567a]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
