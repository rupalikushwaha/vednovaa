export function ensureGtagQueue() {
  if (typeof window === "undefined") {
    return null;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  return window.gtag;
}

export function trackEvent(eventName, parameters = {}) {
  try {
    const gtag = ensureGtagQueue();
    if (gtag) {
      gtag("event", eventName, parameters);
    }
  } catch (error) {
    // Analytics must never interrupt the visitor's journey.
  }
}

export function getPageParameters() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return { page_path: "", page_title: "" };
  }

  return {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  };
}

// Create the command queue as soon as this shared analytics module is evaluated.
ensureGtagQueue();
