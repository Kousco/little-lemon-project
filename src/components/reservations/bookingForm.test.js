import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';

describe('BookingForm', () => {
  test('renders all form fields', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('form validation works', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/Choose date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionInput = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Click submit button without filling out any fields
    fireEvent.click(submitButton);
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();

    // Fill out all fields except time
    fireEvent.change(dateInput, { target: { value: '2023-05-01' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/This field is required/i)).toBeInTheDocument();

    // Fill out all fields
    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.click(submitButton);
    expect(screen.queryByText(/This field is required/i)).toBeNull();
  });
});
