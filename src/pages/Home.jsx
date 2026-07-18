import React, { Suspense, lazy, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";

const title = "Placement Readiness, AI/ML and Cybersecurity Programs for Colleges | Vednovaa";
const description = "Vednovaa helps colleges improve student placement readiness through practical AI/ML, cybersecurity programs, hackathons and industry-focused simulations.";
const canonical = "https://www.vednovaa.com/";
const socialImage = "https://res.cloudinary.com/dmjunqp6p/image/upload/f_auto,q_80,w_300/v1780596718/VEDNOVAA_-_1-removebg-preview_tszg2f.png";

const ImageSlider = lazy(() => import("../components/ImageSlider"));
const AboutUs = lazy(() => import("../components/AboutUs"));

function Home() {
  const [loadBelowFold, setLoadBelowFold] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.matchMedia("(max-width: 1023px)").matches;
  });

  useEffect(() => {
    if (loadBelowFold) return undefined;

    const load = () => setLoadBelowFold(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 1600 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(load, 1200);
    return () => window.clearTimeout(id);
  }, [loadBelowFold]);

  return (

    <div>

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Vednovaa" />
        <meta property="og:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vednovaa Private Limited",
          url: canonical,
          logo: socialImage,
          sameAs: [
            "https://www.instagram.com/vednovaa/",
            "https://t.me/vednovaa",
            "https://wa.me/message/O6Q7APSKJLWFA1",
            "https://www.linkedin.com/company/vednovaa/",
          ],
        })}</script>
      </Helmet>

      <Header />

      {loadBelowFold ? (
        <Suspense fallback={<div className="lg:hidden min-h-[2600px]" aria-hidden="true" />}>
          <ImageSlider />
          <AboutUs />
        </Suspense>
      ) : (
        <div className="lg:hidden min-h-[2600px]" aria-hidden="true" />
      )}

    </div>

  );
}

export default Home;
