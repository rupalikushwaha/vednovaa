describe("GA4 command queue", () => {
  beforeEach(() => {
    delete window.gtag;
    delete window.dataLayer;
    jest.resetModules();
  });

  it("exists immediately when the analytics module loads", () => {
    jest.isolateModules(() => {
      require("../analytics");
    });

    expect(window.dataLayer).toEqual([]);
    expect(typeof window.gtag).toBe("function");
  });

  it("queues an event before the external GA script loads", () => {
    let analytics;
    jest.isolateModules(() => {
      analytics = require("../analytics");
    });

    analytics.trackEvent("contact_form_submit", {
      enquiry_type: "diagnostic_call",
      page_path: "/contactus",
      page_title: "Contact Us",
    });

    expect(Array.from(window.dataLayer[0])).toEqual([
      "event",
      "contact_form_submit",
      {
        enquiry_type: "diagnostic_call",
        page_path: "/contactus",
        page_title: "Contact Us",
      },
    ]);
  });
});
