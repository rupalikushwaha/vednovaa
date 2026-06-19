import React from "react";

import {
FaInstagram,
FaTelegram,
FaWhatsapp,
FaLinkedin
} from "react-icons/fa";

const Footer = () => {

return (

<footer className="w-full bg-blue-100 mt-20 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">

{/* TOP SECTION */}

<div className="flex flex-col items-center justify-center py-10">

<img
src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png"
alt="Vednovaa Logo"
className="w-[260px] object-contain"
/>

</div>


{/* BOTTOM SECTION */}

<div className="bg-[#004aad] py-6 px-10">

<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

{/* COPYRIGHT */}

<div className="text-white text-sm">

© 2026 Vednovaa. All Rights Reserved

</div>


{/* TERMS */}

<div className="flex gap-8 text-white text-sm">

<button className="hover:text-sky-300 duration-300">

Terms & Conditions

</button>

<button className="hover:text-sky-300 duration-300">

Privacy Policy

</button>

</div>


{/* SOCIAL ICONS */}

<div className="flex gap-4">

<a
href=" https://www.instagram.com/vednovaa?utm_source=qr&igsh=bnZqdGpiN2Fyamti"
className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#4d567a] duration-300"
>

<FaInstagram/>

</a>


<a
href="https://t.me/vednovaa"
className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#4d567a] duration-300"
>

<FaTelegram/>

</a>


<a
href="https://wa.me/message/O6Q7APSKJLWFA1"
className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#4d567a] duration-300"
>

<FaWhatsapp/>

</a>


<a
href="https://www.linkedin.com/company/vednovaa/"
className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#4d567a] duration-300"
>

<FaLinkedin/>

</a>

</div>

</div>

</div>

</footer>

);

};

export default Footer;