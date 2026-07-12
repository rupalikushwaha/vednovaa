import React, { Suspense, lazy, useEffect, useState } from "react";
import Header from "../components/Header";

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
