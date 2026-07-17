import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiagnosticCallPopup from "../DiagnosticCallPopup";

describe("DiagnosticCallPopup", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    window.sessionStorage.clear();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it("opens after the delay and closes when the close button is clicked", () => {
    render(<DiagnosticCallPopup delay={1000} autoCloseDelay={5000} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/complimentary diagnostic call/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close diagnostic call popup/i }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("does not reopen after the first open in the same session", () => {
    const { rerender } = render(<DiagnosticCallPopup delay={1000} autoCloseDelay={5000} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    rerender(<DiagnosticCallPopup delay={1000} autoCloseDelay={5000} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getAllByRole("dialog")).toHaveLength(1);
  });

  it("auto-closes after the configured delay and closes on backdrop click", () => {
    render(<DiagnosticCallPopup delay={1000} autoCloseDelay={2000} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes on backdrop click and CTA navigation", () => {
    const onNavigate = jest.fn();

    const { unmount } = render(<DiagnosticCallPopup delay={1000} autoCloseDelay={5000} contactPageUrl="/contactus" onNavigate={onNavigate} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    fireEvent.click(screen.getByRole("dialog"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    unmount();
    window.sessionStorage.clear();

    render(<DiagnosticCallPopup delay={1000} autoCloseDelay={5000} contactPageUrl="/contactus" onNavigate={onNavigate} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    fireEvent.click(screen.getByRole("button", { name: /request diagnostic call/i }));
    expect(onNavigate).toHaveBeenCalledWith("/contactus");
  });
});
