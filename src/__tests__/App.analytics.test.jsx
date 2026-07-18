describe("application GA4 initialization", () => {
  beforeEach(() => {
    document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]').forEach((script) => script.remove());
    delete window.gtag;
    delete window.dataLayer;
    delete window.__vednovaaGaInitialized;
    delete window.__vednovaaGaConfiguredPath;
    delete window.__vednovaaGaLoaded;
    jest.resetModules();
  });

  it("creates and configures the queue as soon as App loads", () => {
    jest.isolateModules(() => {
      require("../App");
    });

    const commands = window.dataLayer.map((entry) => Array.from(entry));
    expect(typeof window.gtag).toBe("function");
    expect(commands.filter(([command]) => command === "js")).toHaveLength(1);
    expect(commands.filter(([command]) => command === "config")).toEqual([
      ["config", "G-6P8PD0YJD9", { page_path: window.location.pathname }],
    ]);
    expect(document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')).toHaveLength(0);
  });

  it("does not insert the script or configure the same path twice", () => {
    let appAnalytics;
    jest.isolateModules(() => {
      appAnalytics = require("../App");
    });

    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.loadGoogleAnalyticsScript();
    appAnalytics.loadGoogleAnalyticsScript();

    const commands = window.dataLayer.map((entry) => Array.from(entry));
    expect(commands.filter(([command]) => command === "config")).toHaveLength(1);
    expect(document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')).toHaveLength(1);
  });
});
