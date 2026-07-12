import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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

function runWhenIdle(callback) {
  if (typeof window === "undefined") return undefined;

  if (window.matchMedia("(max-width: 1023px)").matches) {
    const id = window.setTimeout(callback, 15000);
    return () => window.clearTimeout(id);
  }

  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, 1800);
  return () => window.clearTimeout(id);
}

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    return runWhenIdle(() => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
      };

      if (!window.__vednovaaGaLoaded) {
        window.__vednovaaGaLoaded = true;
        window.gtag("js", new Date());

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
      }

      window.gtag("config", GA_ID, { page_path: location.pathname });
    });
  }, [location.pathname]);

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
