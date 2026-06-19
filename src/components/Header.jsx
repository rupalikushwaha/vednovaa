import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
const navItems = [

{
title:"Home",
path:"/"
},

{
title:"Services",
path:"/services"
},

{
title:"Products",
path:"/products"
},

{
title:"Case Studies",
path:"/casestudies"
}

]  // State to track the clicked item (Home by default) and the hovered item
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState(null);

  // Determine which item should have the white background
  const currentSelection = hoveredTab || activeTab;
  const [isFront, setIsFront] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setIsFront(prev => !prev);
  }, 1500);
  return () => clearInterval(interval);
}, []);

  return (
    <header className=" m-0 overflow-x-hidden bg-white">
      {/* 1. FIXED Navigation Bar */}


      {/* 2. Stylized Background Content (Scrolls) */}
      <div 
        className="relative bg-blue-100 w-full h-[740px]" 
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 65% 80%, 61% 95%, 33% 95%, 30% 80%, 0 80%)"
        }}
      >
        {/* ADD THIS HERE */}
<div className="absolute bottom-0 w-full h-62 bg-gradient-to-b from-transparent  to-white pointer-events-none "></div>
{/* L-shape white line */}
<div className="absolute right-20 top-75">
  
  {/* Horizontal line */}
  <div className="w-70 h-[1px] bg-white opacity-80"></div>
  
  {/* Vertical line */}
  <div className="w-[1px] h-20 bg-white opacity-80 mr-80"></div>


</div>
{/* L-shape white line */}
<div className="absolute right-100 top-96">
  
  {/* Horizontal line */}
  <div className="relative w-160 h-[2px] bg-white opacity-80 "></div>
  
  {/* Vertical line */}
  {/* <div className="absolute w-[2px] h-40 bg-black opacity-80 -translate-y-full"></div> */}


</div>
<div className="absolute right-20 top-75">
  
  {/* Horizontal line */}
  <div className="w-20 h-[5px] bg-white opacity-80"></div></div>
  <div className="absolute left-29 top-118">
  
  {/* Horizontal line */}
  <div className="w-20 h-[5px] bg-white "></div></div>
  <div className="relative flex items-center justify-center top-95">

  {/* Glow effect */}
  <div className="absolute w-6 h-6 bg-white rounded-full opacity-70 "></div>

  {/* Solid dot */}
  {/* <div className="w-2 h-2 bg-white  rounded-full z-10"></div> */}

</div>
 <div className="items-center justify-center top-138 relative left-120 border-1 border-white w-52  rounded-2xl z-[16] "> 
    <div className='text-lg font-semibold text-gray-700 text-center  border-white border-1 w-50 h-9  rounded-2xl bg-white pt-1 m-1 '>Unlock Your Potential</div>
      </div>
  <div className="items-center justify-center top-140 relative left-113  z-[16] ">
    <div className='text-3xl font-bold text-white italic '>Where curiosity , <br/>meets capability</div>
  </div>
  

        {/* VEDNOVAA TEXT */}
       <div className="absolute top-18 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none z-[-1] overflow-hidden">
  <p className="w-full text-center tracking-tighter uppercase select-none
                bg-gradient-to-b from-white/90 via-white/40 to-transparent 
                bg-clip-text text-transparent text-[18vw] leading-none">
    VEDNOVAA
  </p>
</div>

        {/* Floating White Card */}
        
      <div className="absolute top-75 w-[200px] bg-white ml-29 rounded-[40px] p-6 shadow-md
                transition duration-300 ease-out 
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                flex flex-col justify-between min-h-[250px]">
  
  {/* Text Content Area */}
  <div className="text-[#004aad] space-y-2">
    <h1 className='text-2xl font-black leading-tight uppercase tracking-wide'>
      JOIN THE <br /> VEDNOVAA <br /> WORLD
    </h1>
    <p className='text-xs font-semibold text-[#004aad] leading-tight'>
      Faster Learning, <br /> Easy remembering
    </p>
  </div>

  {/* Floating Graduation Cap Image */}
  {/* Using absolute position keeps it from pushing the button down */}
  <img 
    src='https://res.cloudinary.com/dmjunqp6p/image/upload/v1780163979/topia_webxtn.png' 
    className='absolute -right-12 bottom-7 w-[120px] pointer-events-none'
    alt="Graduation Cap"
  />

  {/* Button Area */}
  {/* mt-auto pushes the button perfectly to the bottom of the container */}
  <div className="mt-auto  pt-4 flex justify-center">
    <button className='border border-[#004aad] text-[#004aad] px-4 py-1 rounded-md text-xs font-bold uppercase bg-gray-100 hover:bg-gray-200 transition-colors'>
  <a href="https://t.me/vednovaa" target="_blank" rel="noopener noreferrer">   Join Now</a>
    </button>
  </div>

</div>
        {/* Student Image and Button */}
        <div className="flex items-center justify-center pt-[330px] contain-size ">
          <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-blue-500 rounded-full blur-2xl opacity-50  z-[15] top-50"></div>
          <img 
            src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1776194465/Gemini_Generated_Image_v0ukpwv0ukpwv0uk-removebg-preview_q3uugf.png" 
            className="h-170 w-90 mr-20" 
            alt="Students"
          />
          </div>  
         
        </div>
        <div className="flex  justify-end   overflow-visible mr-12 mt-[-80px]">
               
<motion.div
  className="relative w-[280px] h-[170px] cursor-pointer"
  style={{ 
    transformStyle: "preserve-3d", 
    perspective: "1200px",
    rotate: "-25deg" // Matches the aesthetic tilt from your screenshot
  }}
  animate={{ rotateY: isFront ? 0 : 180 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
  {/* FRONT FACE - SVABIX */}
  <div 
    className="absolute inset-0 w-full h-full rounded-[30px] p-8 flex flex-col justify-center bg-gradient-to-br from-[#86efac] to-[#22c55e] shadow-2xl overflow-hidden"
    style={{ backfaceVisibility: "hidden" }}
  >
    {/* THE FLASH EFFECT: Sweeping light reflection */}
    <motion.div 
      className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/40 skew-x-[-25deg] blur-[50px] z-20"
      animate={{ left: ["-150%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
    />

    {/* Content Layout per Screenshot Reference */}
    <div className="absolute top-6 right-8 z-10">
      <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-lg p-3">
        <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1776740502/Svabix-removebg-preview_zsl6zp.png" alt="logo" className="object-contain" />
      </div>
    </div>

    <div className="relative z-10 text-left">
      <div className="text-white/80 text-xs font-mono mb-2">**** 2026</div>
      <div className="text-white text-lg font-bold tracking-tight">SVABIX.</div>
      <div className="text-white/90 text-sm font-medium mt-1">Your brand deserves this!</div>
    </div>

    <div className="absolute bottom-7 right-13 z-10">
      <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center text-white text-sm">→</div>
    </div>
  </div>

  {/* BACK FACE - SCREEN2SKILLS */}
  <div 
    className="absolute inset-0 w-full h-full rounded-[30px] p-8 flex flex-col justify-center bg-gradient-to-br from-[#d8b4fe] to-[#7c3aed] shadow-2xl overflow-hidden"
    style={{ 
      backfaceVisibility: "hidden", 
      transform: "rotateY(180deg)" 
    }}
  >
    {/* FLASH EFFECT (Back side) */}
    <motion.div 
      className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/40 skew-x-[-25deg] blur-[60px] z-20"
      animate={{ left: ["-150%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
    />

    <div className="absolute top-6 right-8 z-10">
      <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-lg p-3">
         <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/v1776740512/screen2skills-removebg-preview_rotqfg.png" alt="logo" className="w-8 h-8 object-contain" />
      </div>
    </div>

    <div className="relative z-10 text-left">
      <div className="text-white/80 text-xs font-mono mb-2">**** 2025</div>
      <div className="text-white text-lg font-bold uppercase tracking-tight">SCREEN2SKILLS</div>
      <div className="text-white/90 text-xs font-medium mt-1 leading-tight">Knock knock! Your children<br/> growthis here</div>
    </div>

    <div className="absolute bottom-7 right-13 z-10">
      <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center text-white text-sm">→</div>
    </div>
  </div>
</motion.div>
</div>
    
      </div>
      
      <div className="w-full overflow-hidden bg-blue-100 py-4 relative">
  
  <div className="flex whitespace-nowrap animate-marquee">
    
    {/* First Copy */}
    <div className="flex shrink-0">
      <span className="mx-10 text-2xl font-bold text-blue-800">
        AI Powered Learning
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Industry Experts
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Internship Programs
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Career Growth
      </span>
    </div>

    {/* Duplicate Copy for Infinite Effect */}
    <div className="flex shrink-0">
      <span className="mx-10 text-2xl font-bold text-blue-800">
        AI Powered Learning
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Industry Experts
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Internship Programs
      </span>

      <span className="mx-10 text-2xl font-bold text-blue-800">
        Career Growth
      </span>
    </div>

  </div>

</div>
      
    </header>
  );
};

export default Header;