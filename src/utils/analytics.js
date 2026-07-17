export function trackEvent(eventName, parameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  try {
    window.gtag("event", eventName, parameters);
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
