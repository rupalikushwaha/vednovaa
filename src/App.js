import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ensureGtagQueue } from "./utils/analytics";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const CBBhandari = lazy(() => import("./pages/CBBhandari"));
const OxfordCollege = lazy(() => import("./pages/OxfordCollege"));
const Upcoming = lazy(() => import("./pages/Upcoming"));
const GA_ID = "G-6P8PD0YJD9";

export function configureGoogleAnalytics(pagePath) {
  if (typeof window === "undefined") return;

  const gtag = ensureGtagQueue();
  if (!gtag) return;

  if (!window.__vednovaaGaInitialized) {
    window.__vednovaaGaInitialized = true;
    gtag("js", new Date());
  }

  if (window.__vednovaaGaConfiguredPath !== pagePath) {
    window.__vednovaaGaConfiguredPath = pagePath;
    gtag("config", GA_ID, {
      page_path: pagePath,
      page_title: document.title,
    });
  }
}

export function loadGoogleAnalyticsScript() {
  if (typeof window === "undefined" || typeof document === "undefined" || window.__vednovaaGaLoaded) {
    return;
  }

  window.__vednovaaGaLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

if (typeof window !== "undefined") {
  ensureGtagQueue();
}

function GoogleAnalytics() {
  const location = useLocation();
  const pagePath = `${location.pathname}${location.search}`;

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    configureGoogleAnalytics(pagePath);
    loadGoogleAnalyticsScript();
    return undefined;
  }, [pagePath]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <main className="grow">
          <Suspense fallback={<div className="min-h-screen bg-white" /> }>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/services" element={<Services />} />

              <Route path="/products" element={<Products />} />

              <Route path="/casestudies" element={<CaseStudies />} />

              <Route path="/contactus" element={<ContactUs />} />

              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />

              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              />

              {/* New Pages */}
              <Route
                path="/cb-bhandari"
                element={<CBBhandari />}
              />

              <Route
                path="/oxford-college"
                element={<OxfordCollege />}
              />

              <Route
                path="/upcoming"
                element={<Upcoming />}
              />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
