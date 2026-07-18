import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactSection, { whatsappNavigation } from "../ContactSection";
import { trackEvent } from "../../utils/analytics";

jest.mock("../../utils/analytics", () => ({
  getPageParameters: () => ({ page_path: "/contactus", page_title: "Contact Us" }),
  trackEvent: jest.fn(),
}));

const fillRequiredFields = (enquiryType) => {
  fireEvent.change(screen.getByLabelText(/name and surname/i), { target: { value: "Jane Doe" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: "+91 98765 43210" } });
  fireEvent.change(screen.getByLabelText(/institution name/i), { target: { value: "Vednovaa College" } });
  fireEvent.change(screen.getByLabelText(/designation/i), { target: { value: "Placement Cell" } });
  fireEvent.change(screen.getByLabelText(/how can we help you/i), { target: { value: enquiryType } });
  if (enquiryType === "General Enquiry") {
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Please share programme details" } });
  }
};

const submitButton = () => screen.getByRole("button", { name: /^submit$/i });

describe("ContactSection WhatsApp submission", () => {
  let navigationSpy;

  beforeEach(() => {
    jest.useFakeTimers();
    navigationSpy = jest.spyOn(whatsappNavigation, "assign").mockImplementation(() => {});
    trackEvent.mockReset();
    trackEvent.mockImplementation((eventName, parameters) => {
      if (eventName === "whatsapp_redirect") {
        parameters.event_callback();
      }
    });
  });

  afterEach(() => {
    navigationSpy.mockRestore();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it.each([
    ["Request for Diagnostic Call", "diagnostic_call", "Diagnostic Call"],
    ["Request Product Demo", "product_demo", "Product Demo"],
    ["General Enquiry", "general_enquiry", "General Enquiry"],
  ])("submits a valid %s enquiry", (label, enquiryType, messageText) => {
    render(<ContactSection />);
    fillRequiredFields(label);

    fireEvent.click(submitButton());

    expect(trackEvent).toHaveBeenCalledTimes(3);
    expect(trackEvent).toHaveBeenNthCalledWith(1, "form_start", {
      form_name: "contact_form",
      page_path: "/contactus",
      page_title: "Contact Us",
    });
    expect(trackEvent).toHaveBeenNthCalledWith(2, "contact_form_submit", {
      enquiry_type: enquiryType,
      form_name: "contact_form",
      page_path: "/contactus",
      page_title: "Contact Us",
      redirect_destination: "whatsapp",
    });
    expect(trackEvent).toHaveBeenNthCalledWith(3, "whatsapp_redirect", expect.objectContaining({
      enquiry_type: enquiryType,
      redirect_type: "automatic",
      page_path: "/contactus",
      page_title: "Contact Us",
    }));
    expect(navigationSpy).toHaveBeenCalledTimes(1);
    expect(decodeURIComponent(navigationSpy.mock.calls[0][0])).toContain(messageText);
    expect(screen.getByRole("button", { name: /submitting/i })).toBeDisabled();

    const analyticsPayload = JSON.stringify(trackEvent.mock.calls);
    expect(analyticsPayload).not.toContain("Jane Doe");
    expect(analyticsPayload).not.toContain("jane@example.com");
    expect(analyticsPayload).not.toContain("98765");
    expect(analyticsPayload).not.toContain("Vednovaa College");
    expect(analyticsPayload).not.toContain("Placement Cell");
    expect(analyticsPayload).not.toContain("Please share programme details");
  });

  it("shows validation errors without tracking or opening WhatsApp", () => {
    render(<ContactSection />);
    fireEvent.submit(submitButton().closest("form"));

    expect(screen.getByRole("alert")).toHaveTextContent("Please select an enquiry type.");
    expect(trackEvent).not.toHaveBeenCalled();
    expect(navigationSpy).not.toHaveBeenCalled();
    expect(submitButton()).toBeEnabled();
  });

  it("prevents duplicate events and duplicate WhatsApp openings", () => {
    trackEvent.mockImplementation(() => {});
    render(<ContactSection />);
    fillRequiredFields("Request for Diagnostic Call");
    const form = submitButton().closest("form");

    fireEvent.submit(form);
    fireEvent.submit(form);

    expect(trackEvent).toHaveBeenCalledTimes(3);
    expect(trackEvent.mock.calls.filter(([name]) => name === "form_start")).toHaveLength(1);
    expect(trackEvent.mock.calls.filter(([name]) => name === "contact_form_submit")).toHaveLength(1);
    expect(trackEvent.mock.calls.filter(([name]) => name === "whatsapp_redirect")).toHaveLength(1);

    const callback = trackEvent.mock.calls.find(([name]) => name === "whatsapp_redirect")[1].event_callback;
    callback();
    act(() => { jest.advanceTimersByTime(400); });
    expect(navigationSpy).toHaveBeenCalledTimes(1);
  });

  it("fires form_start only once and includes enquiry_type only when selected first", () => {
    render(<ContactSection />);
    fireEvent.change(screen.getByLabelText(/how can we help you/i), {
      target: { value: "Request Product Demo" },
    });
    fireEvent.change(screen.getByLabelText(/name and surname/i), {
      target: { value: "Jane Doe" },
    });

    expect(trackEvent).toHaveBeenCalledTimes(1);
    expect(trackEvent).toHaveBeenCalledWith("form_start", {
      enquiry_type: "product_demo",
      form_name: "contact_form",
      page_path: "/contactus",
      page_title: "Contact Us",
    });
  });

  it("uses the invisible fallback when the GA4 callback does not run", () => {
    trackEvent.mockImplementation(() => {});
    render(<ContactSection />);
    fillRequiredFields("Request Product Demo");

    fireEvent.click(submitButton());
    expect(navigationSpy).not.toHaveBeenCalled();

    act(() => { jest.advanceTimersByTime(399); });
    expect(navigationSpy).not.toHaveBeenCalled();
    act(() => { jest.advanceTimersByTime(1); });
    expect(navigationSpy).toHaveBeenCalledTimes(1);
  });

  it("restores the Submit button only when navigation throws", () => {
    navigationSpy.mockImplementation(() => { throw new Error("navigation failed"); });
    render(<ContactSection />);
    fillRequiredFields("Request for Diagnostic Call");

    fireEvent.click(submitButton());

    expect(screen.getByRole("alert")).toHaveTextContent("We could not complete your submission. Please try again.");
    expect(submitButton()).toBeEnabled();
  });
});
