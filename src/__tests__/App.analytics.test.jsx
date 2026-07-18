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

  it("creates the queue as soon as App loads without inserting the script", () => {
    jest.isolateModules(() => {
      require("../App");
    });

    const commands = window.dataLayer.map((entry) => Array.from(entry));
    expect(typeof window.gtag).toBe("function");
    expect(commands).toEqual([]);
    expect(document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')).toHaveLength(0);
  });

  it("does not insert the script or configure the same path twice", () => {
    let appAnalytics;
    jest.isolateModules(() => {
      appAnalytics = require("../App");
    });

    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.loadGoogleAnalyticsScript();
    appAnalytics.loadGoogleAnalyticsScript();

    const commands = window.dataLayer.map((entry) => Array.from(entry));
    expect(commands.filter(([command]) => command === "js")).toHaveLength(1);
    expect(commands.filter(([command]) => command === "config")).toHaveLength(1);
    expect(commands.find(([command]) => command === "config")[2]).toEqual({
      page_path: window.location.pathname,
      page_title: document.title,
    });
    expect(document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')).toHaveLength(1);
  });

  it("queues one config page view for each distinct SPA route", () => {
    let appAnalytics;
    jest.isolateModules(() => {
      appAnalytics = require("../App");
    });

    appAnalytics.configureGoogleAnalytics(window.location.pathname);
    appAnalytics.configureGoogleAnalytics("/contactus");
    appAnalytics.configureGoogleAnalytics("/products");
    appAnalytics.configureGoogleAnalytics("/products");

    const configCommands = window.dataLayer
      .map((entry) => Array.from(entry))
      .filter(([command]) => command === "config");
    expect(configCommands.map(([, , parameters]) => parameters.page_path)).toEqual([
      window.location.pathname,
      "/contactus",
      "/products",
    ]);
  });
});
