import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Target,
  ShieldCheck,
  FileSearch,
  Rocket,
  Cpu,
  Trophy,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// ── Content: Vednovaa's full workflow ─────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Diagnostic Call",
    description:
      "A 15-minute discussion with the HOD, TPO, or Professor to identify placement challenges and assess current student readiness.",
    icon: Target,
  },
  {
    number: "02",
    title: "PRA",
    subtitle: "Placement Readiness Assessment",
    description:
      "A structured management and student audit that measures placement preparedness through discussions and practical evaluation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Report",
    description:
      "A comprehensive readiness report highlighting strengths, gaps, priorities, and actionable recommendations.",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "PRAP",
    subtitle: "Placement Readiness Accelerator Program",
    description:
      "A 2-day industry-focused, hands-on learning program designed to bridge the gap between academics and real-world expectations.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "TDE",
    subtitle: "Talent Development Engine",
    description:
      "An AI-powered assessment platform that tracks student decisions, performance, and skill progression throughout practical activities.",
    icon: Cpu,
  },
  {
    number: "06",
    title: "Hackathon",
    description:
      "A real-world challenge where students apply their knowledge to solve industry problems while demonstrating teamwork and critical thinking.",
    icon: Trophy,
  },
  {
    number: "07",
    title: "A-CySec Simulation",
    description:
      "An AI-powered cyber awareness platform that strengthens institutional cyber readiness through realistic phishing and social engineering simulations.",
    icon: ShieldAlert,
  },
];

const AUTOPLAY_MS = 3500;
const COUNT = STEPS.length;
const HALF = COUNT / 2;
const BLUE = "#004aad";

// normalize i-active into the shortest signed offset around the circle
const normalizedOffset = (i, active) => {
  let diff = i - active;
  if (diff > HALF) diff -= COUNT;
  if (diff < -HALF) diff += COUNT;
  return diff;
};

// ── Responsive breakpoint hook (no dependency on Tailwind's md:/lg: ── */
// arbitrary-value classes, so sizing is guaranteed to work regardless of
// how Tailwind is configured on the host page). ─────────────────────────
function useViewport() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

export default function ImageSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const width = useViewport();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  // all sizing derives from viewport, not from CSS breakpoints,
  // so nothing depends on the host page's Tailwind build config
  const cardWidth = isMobile ? 210 : isTablet ? 250 : 290;
  const cardHeight = isMobile ? 300 : isTablet ? 340 : 380;
  const stageHeight = isMobile ? 340 : isTablet ? 380 : 420;
  const xStep = cardWidth * 0.78;
  const zStep = isMobile ? 90 : 150;
  const rotateDeg = isMobile ? 20 : 30;
  const maxVisibleOffset = isMobile ? 1 : 2;

  const goTo = useCallback((i) => setActive(((i % COUNT) + COUNT) % COUNT), []);

  // ── Autoplay ─────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % COUNT);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handleManualNav = (i) => goTo(i);

  return (
    <section style={{ width: "100%", padding: "56px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          background: "#DBEAFE",
          borderRadius: 32,
          padding: isMobile ? "40px 20px" : "56px 40px",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: 640, margin: "0 auto 48px", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            color: BLUE,
            fontFamily: "'IBM Plex Mono', monospace",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Process
        </p>
        <h2
          style={{
            color: BLUE,
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? 28 : 36,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          The Right Diagnosis First
        </h2>
        <p style={{ color: "#64748B", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
          From diagnosis to accelerator programs to simulations — a complete
          pipeline from placement readiness to real industry-facing skill.
        </p>
      </div>

      {/* ── 3D Carousel ────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          maxWidth: 1000,
          margin: "0 auto",
          height: stageHeight,
          perspective: 1400,
          overflow: "hidden",
        }}
      >
        {STEPS.map((step, i) => {
          const offset = normalizedOffset(i, active);
          const absOffset = Math.abs(offset);
          if (absOffset > maxVisibleOffset) return null;

          const isActive = offset === 0;
          const Icon = step.icon;

          const translateX = offset * xStep;
          const translateZ = -absOffset * zStep;
          const rotateY = -offset * rotateDeg;
          const scale = 1 - absOffset * 0.12;
          const opacity = Math.max(1 - absOffset * 0.38, 0.25);
          const zIndex = 20 - absOffset;

          return (
            <div
              key={step.number}
              onClick={() => handleManualNav(i)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: cardWidth,
                height: cardHeight,
                borderRadius: 24,
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.7s ease, opacity 0.7s ease",
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                background: isActive ? "#FFFFFF" : "#F8FAFC",
                border: isActive ? `1px solid rgba(0,74,173,0.15)` : "1px solid #EEF2F6",
                boxShadow: isActive
                  ? "0 30px 60px -20px rgba(0,74,173,0.35), 0 10px 25px -10px rgba(0,74,173,0.25), 0 0 0 1px rgba(0,74,173,0.04)"
                  : "0 15px 35px -15px rgba(0,74,173,0.18)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {/* ── per-card decorative background ── */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 3,
                    background: isActive
                      ? "linear-gradient(90deg, transparent, #004aad, transparent)"
                      : "transparent",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: -64,
                    right: -64,
                    width: 192,
                    height: 192,
                    borderRadius: "9999px",
                    background:
                      "radial-gradient(circle, rgba(0,74,173,0.16) 0%, rgba(0,74,173,0.04) 55%, transparent 75%)",
                    filter: "blur(6px)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -56,
                    left: -56,
                    width: 128,
                    height: 128,
                    borderRadius: "9999px",
                    background: "radial-gradient(circle, rgba(0,74,173,0.10) 0%, transparent 70%)",
                    filter: "blur(4px)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 30%)",
                  }}
                />
                <svg
                  style={{ position: "absolute", top: 16, left: 16, opacity: isActive ? 0.35 : 0.15 }}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M1 7V1H7" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    opacity: isActive ? 0.35 : 0.15,
                  }}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11V17H11" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  padding: isMobile ? 20 : 28,
                }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    marginBottom: 18,
                    color: isActive ? BLUE : "#CBD5E1",
                  }}
                >
                  {step.number}
                </span>

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    background: isActive ? "rgba(0,74,173,0.1)" : "#F1F5F9",
                  }}
                >
                  <Icon size={20} strokeWidth={1.75} color={isActive ? BLUE : "#94A3B8"} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    lineHeight: 1.35,
                    color: isActive ? BLUE : "#94A3B8",
                    fontSize: isActive ? (isMobile ? 17 : 19) : 14,
                    marginBottom: isActive && step.subtitle ? 4 : 12,
                  }}
                >
                  {step.title}
                </h3>

                {isActive && step.subtitle && (
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.03em",
                      color: "#94A3B8",
                      marginBottom: 12,
                    }}
                  >
                    {step.subtitle}
                  </p>
                )}

                {isActive && (
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Arrows + progress dots ─────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          marginTop: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => handleManualNav(active - 1)}
            aria-label="Previous step"
            style={{
              width: 40,
              height: 40,
              borderRadius: "9999px",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748B",
              background: "transparent",
              cursor: "pointer",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = BLUE;
              e.currentTarget.style.color = BLUE;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.color = "#64748B";
            }}
          >
            <ArrowLeft size={17} />
          </button>
          <button
            onClick={() => handleManualNav(active + 1)}
            aria-label="Next step"
            style={{
              width: 40,
              height: 40,
              borderRadius: "9999px",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748B",
              background: "transparent",
              cursor: "pointer",
              transition: "color 0.3s, border-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = BLUE;
              e.currentTarget.style.color = BLUE;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.color = "#64748B";
            }}
          >
            <ArrowRight size={17} />
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {STEPS.map((step, i) => (
            <button
              key={step.number}
              onClick={() => handleManualNav(i)}
              aria-label={`Go to ${step.title}`}
              style={{
                height: 6,
                width: active === i ? 24 : 6,
                borderRadius: "9999px",
                border: "none",
                background: active === i ? BLUE : "#E2E8F0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}