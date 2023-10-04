import React from 'react';
import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";

test("Renders the BookingForm", () => {
  render(<BookingForm />);

  const formElement = screen.getByTestId("booking-form");
  expect(formElement).toBeInTheDocument();

  const dateInput = screen.getByLabelText("Choose a date:");
  const timeSelect = screen.getByLabelText("Choose time:");
  const guestsInput = screen.getByLabelText("Number of guests:");
  const occasionInput = screen.getByLabelText("Occasion:");
  const submitButton = screen.getByText("Submit");

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(occasionInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
