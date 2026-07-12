import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactSection from "../ContactSection";

describe("ContactSection", () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it("shows a success message and opens WhatsApp for a valid submission", () => {
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
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I would like to discuss a training program." },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.open).toHaveBeenCalled();
    expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
  });
});
