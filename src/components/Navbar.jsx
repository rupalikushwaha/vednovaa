import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/products" },
    { title: "Case Studies", path: "/casestudies" }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">

      <div className="relative flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-13">

        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_auto/logo_qf2x22"
            alt="Logo"
            className="h-9 w-auto sm:h-10 lg:h-12"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Centered pill nav — desktop only (lg and up) */}
        <div className="hidden lg:flex bg-white/30 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-2 py-1 absolute left-1/2 -translate-x-1/2 items-center">

          <ul className="flex items-center relative">

            {navItems.map((item) => (

              <Link
                key={item.title}
                to={item.path}
                className={`relative z-10 px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#004aad]"
                    : "text-slate-700"
                }`}
              >

                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}

                {item.title}

              </Link>

            ))}

          </ul>

        </div>

        {/* Contact Button — desktop only */}
        <div className="hidden lg:block">
          <Link
            to="/contactus"
            className="bg-[#004aad] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#004aad] shadow-md transition duration-300 text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger button — below lg */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/30 shadow-sm"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6 text-[#004aad]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile dropdown menu — below lg */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/30 shadow-lg overflow-hidden">
          <ul className="flex flex-col px-6 py-4 gap-2">

              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "bg-[#004aad]/10 text-[#004aad]"
                        : "text-slate-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  to="/contactus"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-[#004aad] text-white px-6 py-3 rounded-full shadow-md text-sm font-semibold"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
