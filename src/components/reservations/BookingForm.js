import { useState } from 'react';
import './reservation.css';

const BookingForm = (props) => {
  const [date, setDate] = useState('date');
  const [guests, setGuests] = useState('guests');
  const [occasion, setOccasion] = useState('occasion');
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');

  //code to handle form validity and submission
  const isDateValid = () => date !== '';
  const isTimeValid = () => selectedTime !== '';
  const isGuestsValid = () => guests !== '';
  const isOccasionValid = () => occasion !== '';
  const isEmailValid = () => email !==''

  const allFieldsValid = () => {
    return (
      isDateValid()
      && isTimeValid()
      && isGuestsValid()
      && isOccasionValid()
      && isEmailValid
    )
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (allFieldsValid()) {
      props.submitForm( {date, selectedTime, guests, occasion, email} )
    }
  }

  //code for Random time api
  const handleDateChange = async (e) => {
    const currentDate = new Date();
    const selectedDate = e.target.value;

    if (selectedDate < currentDate.toISOString().slice(0, 10)) {
      alert('Please select a date after the current date.');
      return;
    }

    setDate(selectedDate);
    const times = await props.fetchAPI(selectedDate);
    props.dispatch({ type: 'UPDATE_TIMES', times });
    setSelectedTime('');
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setSelectedTime(selectedTime);
    props.dispatch({ type: 'UPDATE_SELECTED_TIME', selectedTime });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <section>
          <h2>Reserve a Table</h2>
        </section>
        <section>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            required={true}
            onChange={handleDateChange}
          />
        </section>
        <section>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={selectedTime}
            required={true}
            onChange={handleTimeChange}
          >
            {props.availableTimes.map((time) => (
              <option value={time}>
                {time}
              </option>
            ))}
          </select>
        </section>
        <section>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder=''
            min="1"
            max="10"
            id="guests"
            value={guests}
            required={true}
            onChange={(e) => setGuests(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            required={true}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </section>
        <section>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <button
          className="submit-button"
          type="submit"
          disabled={!allFieldsValid()}
        >
          Make Your reservation
        </button>
      </form>
    </div>
  );
};


export default BookingForm;
