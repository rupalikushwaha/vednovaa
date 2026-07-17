import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactSection from "../ContactSection";

describe("ContactSection", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    window.open = jest.fn(() => ({}));
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("shows a success confirmation and opens WhatsApp for a valid submission", () => {
    render(<ContactSection />);

    fireEvent.change(screen.getByLabelText(/name and surname/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "+91 98765 43210" },
    });
    fireEvent.change(screen.getByLabelText(/institution name/i), {
      target: { value: "Vednovaa College" },
    });
    fireEvent.change(screen.getByLabelText(/designation/i), {
      target: { value: "Placement Cell" },
    });
    fireEvent.change(screen.getByLabelText(/how can we help you/i), {
      target: { value: "General Enquiry" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I would like to discuss a training program." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(window.open).toHaveBeenCalled();
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    expect(screen.getByText(/your enquiry has been submitted successfully/i)).toBeInTheDocument();
  });

  it("hides the message field for diagnostic and demo enquiries", () => {
    render(<ContactSection />);

    fireEvent.change(screen.getByLabelText(/how can we help you/i), {
      target: { value: "Request for Diagnostic Call" },
    });

    expect(screen.queryByLabelText(/message/i)).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/how can we help you/i), {
      target: { value: "Request Product Demo" },
    });

    expect(screen.queryByLabelText(/message/i)).not.toBeInTheDocument();
  });

  it("captures the designation in the WhatsApp message", () => {
    render(<ContactSection />);

    fireEvent.change(screen.getByLabelText(/name and surname/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "+91 98765 43210" },
    });
    fireEvent.change(screen.getByLabelText(/institution name/i), {
      target: { value: "Vednovaa College" },
    });
    fireEvent.change(screen.getByLabelText(/designation/i), {
      target: { value: "Head of Placement" },
    });
    fireEvent.change(screen.getByLabelText(/how can we help you/i), {
      target: { value: "General Enquiry" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I would like to discuss a training program." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    act(() => {
      jest.advanceTimersByTime(400);
    });

    const whatsappUrl = window.open.mock.calls[0][0];
    expect(whatsappUrl).toContain(encodeURIComponent("Designation: Head of Placement"));
  });
});
