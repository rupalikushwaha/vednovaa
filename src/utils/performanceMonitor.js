/**
 * Performance monitoring utilities for Core Web Vitals
 * Reports LCP, FID, CLS, and custom metrics
 */

export const reportWebVitals = (metric) => {
  if (process.env.NODE_ENV === "production") {
    // Send to analytics/monitoring service
    console.log("Metric:", metric.name, "Value:", metric.value);
  }
};

/**
 * Report Core Web Vitals using Web Vitals API if available
 */
export const monitorCoreWebVitals = () => {
  if (typeof window !== "undefined" && "PerformanceObserver" in window) {
    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      console.warn("LCP monitoring not supported");
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log("CLS:", clsValue);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (e) {
      console.warn("CLS monitoring not supported");
    }

    // First Input Delay (FID) via interaction entries
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("FID:", entry.processingDuration);
        }
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    } catch (e) {
      console.warn("FID monitoring not supported");
    }
  }
};

/**
 * Measure resource timing for images and scripts
 */
export const measureResourceTiming = () => {
  if (typeof window !== "undefined" && performance.getEntriesByType) {
    const resources = performance.getEntriesByType("resource");
    const summary = {
      images: [],
      scripts: [],
      stylesheets: [],
      total: 0,
    };

    resources.forEach((resource) => {
      const size = resource.transferSize || 0;
      const duration = resource.duration || 0;
      
      if (resource.name.includes(".png") || resource.name.includes(".jpg") || resource.name.includes(".webp")) {
        summary.images.push({ name: resource.name, size, duration });
      } else if (resource.name.includes(".js")) {
        summary.scripts.push({ name: resource.name, size, duration });
      } else if (resource.name.includes(".css")) {
        summary.stylesheets.push({ name: resource.name, size, duration });
      }
      summary.total += size;
    });

    return summary;
  }
  return null;
};

/**
 * Log performance summary to console
 */
export const logPerformanceSummary = () => {
  if (typeof window !== "undefined" && window.performance && performance.timing) {
    const timing = performance.timing;
    const summary = {
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      pageLoad: timing.loadEventEnd - timing.navigationStart,
      timeToFirstByte: timing.responseStart - timing.navigationStart,
    };
    console.table(summary);
  }
};
