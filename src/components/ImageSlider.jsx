import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dmjunqp6p/image/upload/v1782289965/1_hleppi.jpg",
    title: "Slide 01",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut optio harum. Accusantium, quas ullam.",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dmjunqp6p/image/upload/v1782289965/4_ufnkuj.jpg",
    title: "Slide 02",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut optio harum. Accusantium, quas ullam.",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dmjunqp6p/image/upload/v1782289965/5_ffu5nn.jpg",
    title: "Slide 03",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut optio harum. Accusantium, quas ullam.",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dmjunqp6p/image/upload/v1782289965/3_hl8usy.jpg",
    title: "Slide 04",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut optio harum. Accusantium, quas ullam.",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dmjunqp6p/image/upload/v1782289965/2_hn36uq.jpg",
    title: "Slide 05",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aut optio harum. Accusantium, quas ullam.",
  },
  
];
export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [textKey, setTextKey] = useState(0);
  const autoRef = useRef(null);

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(() => {
      go("next");
    }, 3500);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto]);

  const go = useCallback(
    (dir) => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTextKey((k) => k + 1);
      setCurrent((c) =>
        dir === "next" ? (c + 1) % slides.length : (c - 1 + slides.length) % slides.length
      );
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const handlePrev = () => { stopAuto(); go("prev"); startAuto(); };
  const handleNext = () => { stopAuto(); go("next"); startAuto(); };

  // The 3 upcoming thumbnail cards (next slides after current)
  const thumbIndices = [1, 2, 3].map((offset) => (current + offset) % slides.length);

  return (
    <div className="relative w-auto h-screen overflow-hidden bg-white font-sans select-none m-10  ">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Inter:wght@300;400&display=swap');

        .slide-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: opacity 0.7s ease;
        }
        .slide-bg.active   { opacity: 1; z-index: 1; }
        .slide-bg.inactive { opacity: 0; z-index: 0; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .text-animate {
          animation: fadeSlideUp 0.65s cubic-bezier(0.22,1,0.36,1) both;
        }
        .text-animate-delay {
          animation: fadeSlideUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s both;
        }

        @keyframes thumbIn {
          from { opacity: 0; transform: translateX(60px) scale(0.9); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .thumb-card {
          animation: thumbIn 0.55s cubic-bezier(0.22,1,0.36,1) both;
        }
        .thumb-card:nth-child(1) { animation-delay: 0s; }
        .thumb-card:nth-child(2) { animation-delay: 0.08s; }
        .thumb-card:nth-child(3) { animation-delay: 0.16s; }

        .nav-btn {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(0,0,0,0.55);
          border: 2px solid rgba(255,255,255,0.35);
          color: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, border-color 0.2s;
          backdrop-filter: blur(6px);
        }
        .nav-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.7);
          transform: scale(1.08);
        }
        .nav-btn:active { transform: scale(0.95); }

        .slide-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .slide-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: rgba(255,255,255,0.82);
          font-weight: 300;
          max-width: 520px;
          line-height: 1.65;
        }
      `}</style>

      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`slide-bg ${i === current ? "active" : "inactive"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark gradient overlay — bottom and right */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 45%, transparent 75%), linear-gradient(to left, rgba(0,0,0,0.35) 0%, transparent 55%)",
        }}
      />

      {/* Thumbnail cards — right side, vertically centered */}
      <div
        key={`thumbs-${current}`}
        className="absolute right-0 top-1/2 z-20 flex flex-row items-center gap-3 pr-0"
        style={{ transform: "translateY(-50%)" }}
      >
        {thumbIndices.map((idx, pos) => (
          <div
            key={`${idx}-${pos}`}
            className="thumb-card overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
            style={{
              width: pos === 0 ? "clamp(110px,12vw,160px)" : pos === 1 ? "clamp(90px,9vw,130px)" : "clamp(70px,6vw,100px)",
              height: pos === 0 ? "clamp(160px,18vw,230px)" : pos === 1 ? "clamp(130px,15vw,190px)" : "clamp(100px,11vw,150px)",
              opacity: pos === 0 ? 1 : pos === 1 ? 0.75 : 0.45,
              marginRight: pos === 2 ? "-30px" : "0",
              flexShrink: 0,
            }}
            onClick={() => {
              stopAuto();
              const targetIdx = thumbIndices[pos];
              setCurrent(targetIdx);
              setTextKey((k) => k + 1);
              setAnimating(false);
              startAuto();
            }}
          >
            <img
              src={slides[idx].image}
              alt={slides[idx].title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Bottom-left: Title + Description */}
      <div className="absolute bottom-0 left-0 z-20 px-8 sm:px-14 pb-28 sm:pb-32">
        <div key={`title-${textKey}`} className="text-animate slide-title mb-3">
          {slides[current].title}
        </div>
        <div key={`desc-${textKey}`} className="text-animate-delay slide-desc">
          {slides[current].description}
        </div>
      </div>

      {/* Bottom-center: Prev / Next buttons */}
      <div className="absolute bottom-8 left-1/2 z-20 flex items-center gap-4" style={{ transform: "translateX(-50%)" }}>
        <button className="nav-btn" onClick={handlePrev} aria-label="Previous">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { stopAuto(); setCurrent(i); setTextKey((k) => k + 1); startAuto(); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button className="nav-btn" onClick={handleNext} aria-label="Next">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
