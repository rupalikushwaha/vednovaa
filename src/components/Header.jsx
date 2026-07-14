import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isFront, setIsFront] = useState(true);
  const [isAnimationReady, setIsAnimationReady] = useState(true);
  const [isLargeViewport, setIsLargeViewport] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLargeViewport(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    setIsAnimationReady(true);
    const interval = setInterval(() => {
      setIsFront(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <header className="m-0 overflow-x-hidden bg-white">

      {/* ============================================================ */}
      {/* DESKTOP HERO (xl and up, >=1280px)                           */}
      {/* Original desktop design, untouched, just gated behind xl:block */}
      {/* ============================================================ */}
      <div
        className="hidden xl:block relative bg-blue-100 w-full h-[740px]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 65% 80%, 61% 95%, 33% 95%, 30% 80%, 0 80%)"
        }}
      >
        <div className="absolute bottom-0 w-full h-62 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>

        {/* L-shape white line */}
        <div className="absolute right-20 top-75">
          <div className="w-70 h-[1px] bg-white opacity-80"></div>
          <div className="w-[1px] h-20 bg-white opacity-80 mr-80"></div>
        </div>

        <div className="absolute right-100 top-96">
          <div className="relative w-160 h-[2px] bg-white opacity-80"></div>
        </div>

        <div className="absolute right-20 top-75">
          <div className="w-20 h-[5px] bg-white opacity-80"></div>
        </div>
        <div className="absolute left-29 top-118">
          <div className="w-20 h-[5px] bg-white"></div>
        </div>

        <div className="relative flex items-center justify-center top-95">
          <div className="absolute w-6 h-6 bg-white rounded-full opacity-70"></div>
        </div>

        <div className="items-center justify-center top-138 relative left-120 border-1 border-white w-52 rounded-2xl z-[16]">
          <div className="text-lg font-semibold text-gray-700 text-center border-white border-1 w-50 h-9 rounded-2xl bg-white pt-1 m-1">
            Unlock Your Potential
          </div>
        </div>
        <div className="items-center justify-center top-140 relative left-113 z-[16]">
          <div className="text-3xl font-bold text-white italic">
            Where curiosity , <br />meets capability
          </div>
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
          <div className="text-[#004aad] space-y-2">
            <h1 className="text-2xl font-black leading-tight uppercase tracking-wide">
              JOIN THE <br /> VEDNOVAA <br /> WORLD
            </h1>
            <p className="text-xs font-semibold text-[#004aad] leading-tight">
              Faster Learning, <br /> Easy remembering
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_120/v1780163979/topia_webxtn.png"
            className="absolute -right-12 bottom-7 w-[120px] pointer-events-none"
            alt=""
            loading="lazy"
            decoding="async"
          />

          <div className="mt-auto pt-4 flex justify-center">
            <button className="border border-[#004aad] text-[#004aad] px-4 py-1 rounded-md text-xs font-bold uppercase bg-gray-100 hover:bg-gray-200 transition-colors">
              <a href="https://t.me/vednovaa" target="_blank" rel="noopener noreferrer">Join Now</a>
            </button>
          </div>
        </div>

        {/* Student Image */}
        <div className="flex items-center justify-center pt-[330px] contain-size">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-blue-500 rounded-full blur-2xl opacity-50 z-[15] top-50"></div>
            <img
              src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_400/v1776194465/Gemini_Generated_Image_v0ukpwv0ukpwv0uk-removebg-preview_q3uugf.png"
              className="h-170 w-90 mr-20"
              alt="Students preparing for industry-ready careers"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Flip Card */}
        <div className="flex justify-end overflow-visible mr-12 mt-[-80px]">
          <motion.div
            className="relative w-[280px] h-[170px] cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
              rotate: "-25deg"
            }}
            animate={{ rotateY: reduceMotion ? 0 : isFront ? 0 : 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 w-full h-full rounded-[30px] p-8 flex flex-col justify-center bg-gradient-to-br from-[#86efac] to-[#22c55e] shadow-2xl overflow-hidden flip-card-front"
              style={{ backfaceVisibility: "hidden" }}
            >
              {isAnimationReady && !reduceMotion && (
                <motion.div
                  className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/40 skew-x-[-25deg] blur-[50px] z-20"
                  animate={{ left: ["-150%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                />
              )}
              <div className="absolute top-6 right-8 z-10">
                <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-lg p-3">
                  <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_150/v1776740502/Svabix-removebg-preview_zsl6zp.png" alt="Svabix" className="object-contain" loading="lazy" decoding="async" />
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

            <div
              className="absolute inset-0 w-full h-full rounded-[30px] p-8 flex flex-col justify-center bg-gradient-to-br from-[#d8b4fe] to-[#7c3aed] shadow-2xl overflow-hidden flip-card-back"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              {isAnimationReady && !reduceMotion && (
                <motion.div
                  className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/40 skew-x-[-25deg] blur-[60px] z-20"
                  animate={{ left: ["-150%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                />
              )}
              <div className="absolute top-6 right-8 z-10">
                <div className="rounded-full bg-white w-16 h-16 flex items-center justify-center shadow-lg p-3">
                  <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_150/v1776740512/screen2skills-removebg-preview_rotqfg.png" alt="Screen2Skills" className="w-8 h-8 object-contain" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="relative z-10 text-left">
                <div className="text-white/80 text-xs font-mono mb-2">**** 2025</div>
                <div className="text-white text-lg font-bold uppercase tracking-tight">SCREEN2SKILLS</div>
                <div className="text-white/90 text-xs font-medium mt-1 leading-tight">Knock knock! Your children<br /> growth is here</div>
              </div>
              <div className="absolute bottom-7 right-13 z-10">
                <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center text-white text-sm">→</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET HERO (below xl, <1280px)                     */}
      {/* Rebuilt to mirror the desktop "collage" language: angled     */}
      {/* clip-path shape, decorative lines, overlapping floating      */}
      {/* card, and a tilted flip card tucked into the corner — just   */}
      {/* re-scaled with relative units so nothing collides at small   */}
      {/* widths.                                                      */}
      {/* ============================================================ */}
      <div
        className="xl:hidden relative bg-blue-100 w-full h-[700px] min-[390px]:h-[720px] sm:h-[780px] md:h-[840px] overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 70% 92%, 64% 98%, 36% 98%, 30% 92%, 0 92%)"
        }}
      >
        {/* Bottom fade into white — sits inside the reserved notch buffer */}
        <div className="absolute bottom-0 w-full h-14 sm:h-16 bg-gradient-to-b from-transparent to-white pointer-events-none z-[5]"></div>

        {/* VEDNOVAA background text */}
        <div className="absolute top-23 min-[390px]:top-25 sm:top-27 md:top-29 left-1/2 -translate-x-1/2 w-full px-5 sm:px-8 flex justify-center pointer-events-none z-0 overflow-hidden">
          <p className="w-full max-w-[92vw] text-center tracking-[-0.075em] uppercase select-none
                bg-gradient-to-b from-white/90 via-white/40 to-transparent
                bg-clip-text text-transparent text-[clamp(2.9rem,18vw,5.2rem)] sm:text-[clamp(5rem,14.5vw,7.2rem)] md:text-[clamp(6rem,12vw,8.2rem)] leading-none">
            VEDNOVAA
          </p>
        </div>

        {/* Decorative corner lines — scaled-down echo of the desktop L-shapes */}
        <div className="absolute right-6 top-[24%] z-0">
          <div className="w-16 sm:w-20 h-[1px] bg-white opacity-80"></div>
          <div className="w-[1px] h-10 sm:h-12 bg-white opacity-80 ml-16 sm:ml-20"></div>
        </div>
        <div className="absolute left-5 top-[40%] z-0">
          <div className="w-10 sm:w-14 h-[3px] bg-white opacity-80"></div>
        </div>
        <div className="absolute right-8 top-[30%] w-3 h-3 rounded-full bg-white opacity-70 z-0"></div>

        {/* Pill badge + headline — mobile/tablet only, centered in the hero */}
        <div className="absolute left-1/2 top-[118px] z-10 flex w-full -translate-x-1/2 flex-col items-center px-5 text-center min-[390px]:top-[128px] sm:top-[142px] md:top-[156px] md:max-w-[720px]">
          <div className="mx-auto flex h-9 min-w-[184px] items-center justify-center rounded-full bg-white/95 px-5 text-sm font-semibold text-gray-700 shadow-sm sm:h-10 sm:min-w-[220px] sm:text-base md:h-11 md:min-w-[250px] md:text-lg">
            Unlock Your Potential
          </div>
          <h2 className="mx-auto mt-4 flex max-w-[310px] flex-col items-center text-center text-[30px] font-bold italic leading-[1.06] tracking-[-0.03em] text-white drop-shadow-sm min-[390px]:max-w-[340px] min-[390px]:text-[34px] sm:mt-5 sm:max-w-[560px] sm:text-4xl md:max-w-[680px] md:text-5xl">
            <span>Where curiosity</span>
            <span>meets capability</span>
          </h2>
        </div>

        {/* Collage zone: student image with the join card overlapping it, */}
        {/* anchored to the bottom of the fixed-height container so the    */}
        {/* clip-path notch and overflow-hidden never cut through it.      */}
        <div className="absolute inset-x-0 bottom-[78px] sm:bottom-[96px] md:bottom-[108px] z-[10] px-4 sm:px-6">
          <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[560px] md:max-w-[680px] h-[430px] sm:h-[490px] md:h-[540px]">

            {/* Student image */}
            <div className="absolute inset-x-0 top-0 flex justify-center">
              <div className="absolute -inset-1 bg-gradient-to-b from-transparent to-blue-500 rounded-full blur-2xl opacity-50 z-0"></div>
              <img
                src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_320/v1776194465/Gemini_Generated_Image_v0ukpwv0ukpwv0uk-removebg-preview_q3uugf.png"
                className="relative z-[1] h-[285px] min-[390px]:h-[305px] sm:h-[360px] md:h-[405px] w-auto"
                alt=""
                width="160"
                height="320"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            {/* Floating join card — overlaps the bottom-left of the image.   */}
            {/* Width is a % of the collage container (not a fixed px value)  */}
            {/* so it and the flip card keep a guaranteed gap between them    */}
            {/* at every real device width, not just the sm/md test widths.   */}
            <div className="absolute left-0 bottom-0 w-[48%] sm:w-[46%] bg-white rounded-[24px] sm:rounded-[30px] md:rounded-[36px] p-3.5 min-[390px]:p-4 sm:p-5 md:p-6 shadow-xl
                    flex flex-col justify-between h-[180px] min-[390px]:h-[190px] sm:h-[220px] md:h-[260px] z-[2]">
              <div className="text-[#004aad] space-y-1 min-[390px]:space-y-1.5">
                <div className="text-[16px] min-[390px]:text-[17px] sm:text-xl md:text-2xl font-black leading-tight uppercase tracking-wide">
                  JOIN THE <br /> VEDNOVAA <br /> WORLD
                </div>
                <p className="text-[9px] min-[390px]:text-[10px] sm:text-xs md:text-sm font-semibold text-[#004aad] leading-tight">
                  Faster Learning, <br /> Easy remembering
                </p>
              </div>

              {/* Small corner accent — kept close to the card so it can   */}
              {/* never drift into the flip card's space next to it.      */}
              <img
                src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_96/v1780163979/topia_webxtn.png"
                className="absolute -right-1 sm:-right-4 md:-right-5 bottom-9 sm:bottom-8 md:bottom-8 w-[42px] min-[390px]:w-[50px] sm:w-[64px] md:w-[76px] pointer-events-none z-[1]"
                alt=""
                loading="lazy"
                decoding="async"
              />

              <div className="mt-auto pt-2 sm:pt-3 flex justify-center relative z-[2]">
                <button className="border border-[#004aad] text-[#004aad] px-3 py-1.5 md:px-4 md:py-1.5 rounded-md text-[10px] sm:text-xs md:text-sm font-bold uppercase bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors">
                  <a href="https://t.me/vednovaa" target="_blank" rel="noopener noreferrer" className="block">Join Now</a>
                </button>
              </div>
            </div>

            {/* Flip card — tucked into the bottom-right corner, tilted.     */}
            {/* Also sized as a % of the collage container, and kept fully   */}
            {/* inside the box so it never crosses the overflow boundary.    */}
            <motion.div
              className="absolute right-0 bottom-0 w-[48%] sm:w-[49%] h-[180px] min-[390px]:h-[190px] sm:h-[220px] md:h-[260px] cursor-pointer z-[3] flip-card"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
                rotate: "-4deg"
              }}
              animate={{ rotateY: reduceMotion ? 0 : isFront ? 0 : 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] p-4 sm:p-5 md:p-6 flex flex-col justify-center bg-gradient-to-br from-[#86efac] to-[#22c55e] shadow-2xl overflow-hidden flip-card-front"
                style={{ backfaceVisibility: "hidden" }}
              >
                {isAnimationReady && !reduceMotion && (
                  <motion.div
                    className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/35 skew-x-[-25deg] blur-[45px] z-20"
                    animate={{ left: ["-150%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  />
                )}
                <div className="absolute top-4 right-4 z-10">
                  <div className="rounded-full bg-white w-10 h-10 min-[390px]:w-11 min-[390px]:h-11 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg p-2">
                    <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_96/v1776740502/Svabix-removebg-preview_zsl6zp.png" alt="" className="object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="relative z-10 max-w-[76%] text-left">
                  <div className="text-white/80 text-[9px] sm:text-xs font-mono mb-1">**** 2026</div>
                  <div className="text-white text-base min-[390px]:text-lg sm:text-xl md:text-2xl font-bold tracking-tight">SVABIX.</div>
                  <div className="text-white/90 text-[10px] min-[390px]:text-xs sm:text-sm font-medium mt-1 leading-tight">Your brand deserves this!</div>
                </div>
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border border-white/40 rounded-full flex items-center justify-center text-white text-xs">→</div>
                </div>
              </div>

              <div
                className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] p-4 sm:p-5 md:p-6 flex flex-col justify-center bg-gradient-to-br from-[#d8b4fe] to-[#7c3aed] shadow-2xl overflow-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                {isAnimationReady && !reduceMotion && (
                  <motion.div
                    className="absolute top-[-50%] left-[-150%] w-[80%] h-[200%] bg-white/35 skew-x-[-25deg] blur-[50px] z-20"
                    animate={{ left: ["-150%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  />
                )}
                <div className="absolute top-3 right-4 z-10">
                  <div className="rounded-full bg-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg p-2">
                    <img src="https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_150/v1776740512/screen2skills-removebg-preview_rotqfg.png" alt="" className="w-6 h-6 object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="relative z-10 text-left">
                  <div className="text-white/80 text-[9px] sm:text-xs font-mono mb-1">**** 2025</div>
                  <div className="text-white text-sm sm:text-base font-bold uppercase tracking-tight">SCREEN2SKILLS</div>
                  <div className="text-white/90 text-[9px] sm:text-xs font-medium mt-1 leading-tight">Knock knock! Your children<br /> growth is here</div>
                </div>
                <div className="absolute bottom-3 right-4 z-10">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border border-white/40 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs">→</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MARQUEE — shared by all breakpoints, sizes scaled down        */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden bg-blue-100 py-3 sm:py-4 relative">
        <div className="flex whitespace-nowrap animate-marquee motion-reduce:animate-none">

          {/* First Copy */}
          <div className="flex shrink-0">
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              AI Powered Learning
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Industry Experts
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Internship Programs
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Career Growth
            </span>
          </div>

          {/* Duplicate Copy for Infinite Effect */}
          <div className="flex shrink-0">
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              AI Powered Learning
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Industry Experts
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Internship Programs
            </span>
            <span className="mx-4 sm:mx-6 md:mx-10 text-base sm:text-xl md:text-2xl font-bold text-blue-800">
              Career Growth
            </span>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;
