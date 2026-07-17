import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Headphones,
  MessageCircle,
  Send,
  Users,
  X,
} from "lucide-react";
import { getPageParameters, trackEvent } from "../utils/analytics";

const SESSION_STORAGE_KEY = "vednovaa-diagnostic-popup-shown";

const PROCESS_STEPS = [
  {
    number: "01",
    text: "Go to the Contact page.",
    icon: Building2,
  },
  {
    number: "02",
    text: "Fill in your institution details.",
    icon: ClipboardList,
  },
  {
    number: "03",
    text: "Select Request for Diagnostic Call.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    text: "Submit the form.",
    icon: Send,
  },
  {
    number: "05",
    text: "Continue the conversation on WhatsApp.",
    icon: MessageCircle,
  },
];

export default function DiagnosticCallPopup({
  contactPageUrl,
  onNavigate,
  delay = 6000,
  scrollPercentage = 35,
  autoCloseDelay = 10000,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const hasOpenedRef = useRef(false);
  const openingTimerRef = useRef(null);
  const autoCloseTimerRef = useRef(null);
  const hasTrackedViewRef = useRef(false);

  const clearOpeningTimer = useCallback(() => {
    if (openingTimerRef.current) {
      window.clearTimeout(openingTimerRef.current);
      openingTimerRef.current = null;
    }
  }, []);

  const clearAutoCloseTimer = useCallback(() => {
    if (autoCloseTimerRef.current) {
      window.clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }
  }, []);

  const closePopup = useCallback(() => {
    clearAutoCloseTimer();
    setIsOpen(false);
  }, [clearAutoCloseTimer]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const hasAlreadyBeenShown = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (hasAlreadyBeenShown) {
      return undefined;
    }

    const showPopup = () => {
      if (hasOpenedRef.current) {
        return;
      }

      hasOpenedRef.current = true;

      window.sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      setIsOpen(true);
    };

    openingTimerRef.current = window.setTimeout(showPopup, delay);

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const currentScrollPercentage = (window.scrollY / scrollableHeight) * 100;

      if (currentScrollPercentage >= scrollPercentage) {
        clearOpeningTimer();
        showPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearOpeningTimer();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clearOpeningTimer, delay, scrollPercentage]);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      return undefined;
    }

    if (!hasTrackedViewRef.current) {
      hasTrackedViewRef.current = true;
      trackEvent("diagnostic_popup_view", {
        ...getPageParameters(),
        popup_name: "diagnostic_call_popup",
      });
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    autoCloseTimerRef.current = window.setTimeout(closePopup, autoCloseDelay);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearAutoCloseTimer();
    };
  }, [autoCloseDelay, clearAutoCloseTimer, closePopup, isOpen]);

  const handleRequestCall = () => {
    trackEvent("diagnostic_popup_click", {
      ...getPageParameters(),
      popup_name: "diagnostic_call_popup",
      destination: "contact_page",
    });

    closePopup();

    if (typeof onNavigate === "function") {
      onNavigate(contactPageUrl);
      return;
    }

    if (typeof window !== "undefined" && contactPageUrl) {
      window.location.assign(contactPageUrl);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/65 px-3 py-4 backdrop-blur-sm sm:px-5 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagnostic-popup-heading"
      onClick={closePopup}
    >
      <div
        className="relative my-auto max-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:max-h-[calc(100vh-3rem)] sm:rounded-3xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-2 bg-[#004aad]" aria-hidden="true" />

        <button
          type="button"
          onClick={closePopup}
          aria-label="Close Diagnostic Call popup"
          className="absolute right-3 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition duration-200 hover:border-[#004aad] hover:bg-[#004aad] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#004aad]/20 sm:right-5 sm:top-5"
        >
          <X size={21} aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr]">
          <section className="relative px-5 pb-7 pt-16 sm:px-8 sm:pb-9 md:px-10 lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute -left-20 -top-28 h-64 w-64 rounded-full bg-[#004aad]/5 blur-2xl" aria-hidden="true" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-64 rounded-tl-[100%] bg-[#004aad]/5" aria-hidden="true" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-[#004aad]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004aad] sm:text-sm">
                Complimentary Diagnostic Call
              </span>

              <h2
                id="diagnostic-popup-heading"
                className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.12]"
              >
                Not sure which program is the right fit for your institution?
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
                Request a complimentary 15-minute Diagnostic Call to discuss your institution&apos;s placement challenges and receive guidance on the most suitable solution.
              </p>

              <div className="mt-7 sm:mt-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-[#004aad] sm:text-xl">Process</h3>

                  <div className="h-px flex-1 bg-slate-200" aria-hidden="true" />
                </div>

                <div className="mt-5 space-y-3 sm:space-y-4">
                  {PROCESS_STEPS.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div key={step.number} className="group flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#004aad]/10 text-sm font-bold text-[#004aad] sm:h-11 sm:w-11">
                          {step.number}
                        </div>

                        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition duration-200 group-hover:border-[#004aad]/10 group-hover:bg-[#004aad]/[0.03]">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#004aad]/20 bg-white text-[#004aad] shadow-sm sm:h-10 sm:w-10">
                            <Icon size={18} aria-hidden="true" />
                          </div>

                          <p className="text-sm leading-5 text-slate-700 sm:text-base">{step.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={handleRequestCall}
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#004aad] px-5 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(0,74,173,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#003b8a] hover:shadow-[0_18px_35px_rgba(0,74,173,0.32)] focus:outline-none focus:ring-4 focus:ring-[#004aad]/25 sm:w-auto sm:min-w-[285px]"
              >
                Request Diagnostic Call
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </section>

          <section className="relative hidden min-h-[560px] overflow-hidden bg-gradient-to-br from-[#004aad] via-[#074495] to-[#002c69] lg:flex lg:items-center lg:justify-center">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" aria-hidden="true" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" aria-hidden="true" />
            <div className="absolute left-8 top-8 select-none text-[180px] font-black leading-none text-white/[0.07]" aria-hidden="true">
              04
            </div>

            <div className="relative z-10 mx-auto w-full max-w-md px-8 text-center">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-5 rounded-full border border-dashed border-white/30" aria-hidden="true" />
                <div className="absolute inset-12 rounded-full bg-white/10" aria-hidden="true" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl">
                  <Headphones size={70} strokeWidth={1.7} className="text-[#004aad]" aria-hidden="true" />
                </div>

                <div className="absolute -left-5 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white text-[#004aad] shadow-lg">
                  <Building2 size={24} aria-hidden="true" />
                </div>

                <div className="absolute -right-5 top-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white text-[#004aad] shadow-lg">
                  <Users size={24} aria-hidden="true" />
                </div>

                <div className="absolute -bottom-4 left-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white text-[#004aad] shadow-lg">
                  <MessageCircle size={24} aria-hidden="true" />
                </div>

                <div className="absolute -bottom-4 right-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white text-[#004aad] shadow-lg">
                  <ClipboardList size={24} aria-hidden="true" />
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">15-Minute</p>
                <h3 className="mt-2 text-3xl font-bold text-white">Diagnostic Call</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-blue-100">
                  Understand the challenge, identify the readiness gap, and select the most relevant solution for your institution.
                </p>
              </div>
            </div>

            <svg className="absolute bottom-0 left-0 w-full text-white/[0.06]" viewBox="0 0 600 180" fill="none" aria-hidden="true">
              <path d="M0 110C95 45 165 160 270 105C375 50 455 165 600 85V180H0V110Z" fill="currentColor" />
              <path d="M0 135C100 85 185 180 305 125C420 73 500 150 600 120V180H0V135Z" fill="currentColor" />
            </svg>
          </section>
        </div>

        <section className="relative overflow-hidden bg-[#004aad] px-5 py-5 text-white lg:hidden">
          <div className="absolute right-3 top-[-30px] select-none text-[110px] font-black leading-none text-white/10" aria-hidden="true">
            04
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
              <Headphones size={30} className="text-[#004aad]" aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">15-Minute Diagnostic Call</p>
              <p className="mt-1 text-sm leading-5 text-white/90">Discuss the challenge before choosing the program.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
