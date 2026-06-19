import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {

  const location = useLocation();

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Products", path: "/products" },
    { title: "Case Studies", path: "/casestudies" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center h-20 px-13">

      {/* Logo */}
      <div>
        <img
          src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_auto/logo_qf2x22"
          alt="Logo"
          className="h-12"
        />
      </div>

      {/* Navbar */}
      <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-full shadow-lg px-2 py-1 absolute left-1/2 -translate-x-1/2 flex items-center">

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

      {/* Contact Button */}
      <div className="ml-auto">
        <Link
          to="/contactus"
          className="bg-[#004aad] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#004aad] shadow-md transition duration-300 text-sm font-semibold"
        >
          Contact Us
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;